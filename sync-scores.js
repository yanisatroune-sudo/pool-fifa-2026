/**
 * api/sync-scores.js
 * Fonction Vercel (serverless) — synchro automatique des scores FIFA 2026
 * 
 * Déploiement : place ce fichier dans /api/sync-scores.js à la racine du projet.
 * Vercel le détecte automatiquement comme endpoint HTTP.
 * 
 * Variables d'environnement à configurer sur vercel.com > Settings > Environment Variables :
 *   FOOTBALL_API_KEY    → clé football-data.org (gratuit sur https://www.football-data.org/client/register)
 *   FIREBASE_DB_URL     → URL de ta base Firebase ex: https://pool-dri-2026-default-rtdb.firebaseio.com
 *   FIREBASE_SECRET     → clé secrète Firebase Database (Settings > Service accounts > Database secrets)
 *   CRON_SECRET         → mot de passe que tu inventes, ex: "sync_secret_dri_2026"
 */

const FOOTBALL_API_BASE = "https://api.football-data.org/v4";

// ─── Appel football-data.org ───────────────────────────────────────────────
async function fetchLiveMatches(apiKey) {
  const url = `${FOOTBALL_API_BASE}/competitions/WC/matches?status=IN_PLAY,FINISHED&season=2026`;
  const res = await fetch(url, {
    headers: { "X-Auth-Token": apiKey }
  });
  if (!res.ok) throw new Error(`football-data API error: ${res.status}`);
  const data = await res.json();
  return data.matches || [];
}

// ─── Lecture Firebase (REST) ───────────────────────────────────────────────
async function firebaseGet(dbUrl, secret, path) {
  const url = `${dbUrl}/${path}.json?auth=${secret}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Firebase GET error: ${res.status}`);
  return res.json();
}

// ─── Écriture Firebase (REST) ──────────────────────────────────────────────
async function firebasePatch(dbUrl, secret, path, data) {
  const url = `${dbUrl}/${path}.json?auth=${secret}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Firebase PATCH error: ${res.status}`);
  return res.json();
}

// ─── Logique principale ────────────────────────────────────────────────────
async function syncScores(env) {
  const { FOOTBALL_API_KEY, FIREBASE_DB_URL, FIREBASE_SECRET } = env;

  // 1. Charger les matchs du pool depuis Firebase
  const poolMatches = await firebaseGet(FIREBASE_DB_URL, FIREBASE_SECRET, "matches");
  if (!poolMatches) return { updated: 0, message: "Aucun match dans le pool" };

  // 2. Récupérer les matchs en direct ou terminés de l'API
  const liveMatches = await fetchLiveMatches(FOOTBALL_API_KEY);

  let updated = 0;

  // 3. Pour chaque match du pool qui a un apiId, chercher son résultat
  for (const [key, match] of Object.entries(poolMatches)) {
    if (!match.apiId) continue; // skip les matchs sans ID API

    const apiMatch = liveMatches.find(m => String(m.id) === String(match.apiId));
    if (!apiMatch) continue;

    const status = apiMatch.status; // "FINISHED", "IN_PLAY", "TIMED", etc.
    const score  = apiMatch.score?.fullTime;

    if (!score || score.home === null || score.away === null) continue;

    const newResult = { s1: score.home, s2: score.away };
    const isLive    = status === "IN_PLAY" || status === "PAUSED";
    const isFinished = status === "FINISHED";

    // Ne mettre à jour que si score change ou statut change
    const existingResult = match.result;
    const scoreChanged =
      !existingResult ||
      existingResult.s1 !== newResult.s1 ||
      existingResult.s2 !== newResult.s2;

    const liveChanged = !!match.live !== isLive;

    if (scoreChanged || liveChanged) {
      await firebasePatch(FIREBASE_DB_URL, FIREBASE_SECRET, `matches/${key}`, {
        result: newResult,
        live: isLive,
        autoResult: isFinished, // flag pour afficher "mis à jour automatiquement" côté UI
        lastSync: Date.now()
      });
      updated++;
      console.log(`[sync] ${match.team1} vs ${match.team2}: ${newResult.s1}–${newResult.s2} (${status})`);
    }
  }

  return { updated, total: Object.keys(poolMatches).length };
}

// ─── Handler Vercel ────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // Autoriser les appels depuis le bouton admin (même origine) + le cron Vercel
  const cronSecret = req.headers["x-cron-secret"] || req.query.secret;
  const isFromUI   = req.headers["x-requested-with"] === "fetch" ||
                     req.headers.referer?.includes(process.env.VERCEL_URL || "localhost");

  if (!isFromUI && cronSecret !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: "Non autorisé" });
  }

  try {
    const result = await syncScores(process.env);
    console.log(`[sync] Terminé — ${result.updated}/${result.total} matchs mis à jour`);
    res.status(200).json({ ok: true, ...result });
  } catch (err) {
    console.error("[sync] Erreur:", err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
}
