<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Pool FIFA World Cup 2026 — DRI</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
:root {
  --green:   #00C46A;
  --green-d: #008F4D;
  --gold:    #F5C842;
  --dark:    #0D0D0D;
  --card:    #161616;
  --card2:   #1E1E1E;
  --border:  rgba(255,255,255,0.07);
  --text:    #F0F0F0;
  --muted:   #888;
  --red:     #E84545;
  --blue:    #4A9EFF;
  --font-display: 'Bebas Neue', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--dark);
  color: var(--text);
  min-height: 100vh;
  font-size: 15px;
  line-height: 1.6;
}

/* ── HEADER ── */
.site-header {
  border-bottom: 1px solid var(--border);
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: rgba(13,13,13,0.92);
  backdrop-filter: blur(12px);
  z-index: 100;
}
.logo {
  font-family: var(--font-display);
  font-size: 26px;
  letter-spacing: 2px;
  color: var(--green);
}
.logo span { color: var(--gold); }
.live-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
}
.live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }

/* ── LAYOUT ── */
.container { max-width: 900px; margin: 0 auto; padding: 0 20px; }

/* ── HERO ── */
.hero {
  text-align: center;
  padding: 48px 20px 32px;
  border-bottom: 1px solid var(--border);
}
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(48px, 10vw, 96px);
  letter-spacing: 4px;
  line-height: 1;
  color: var(--text);
}
.hero h1 span { color: var(--green); }
.hero p { color: var(--muted); margin-top: 10px; font-size: 14px; }
.stats-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 28px;
}
.stat { text-align: center; }
.stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  color: var(--gold);
  line-height: 1;
}
.stat-label { font-size: 12px; color: var(--muted); margin-top: 3px; }

/* ── JOIN BANNER ── */
#join-zone { padding: 24px 20px 0; max-width: 900px; margin: 0 auto; }
.join-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.join-icon {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(0,196,106,0.12);
  border: 1px solid rgba(0,196,106,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.join-text h3 { font-weight: 600; font-size: 15px; }
.join-text p { font-size: 13px; color: var(--muted); margin-top: 2px; }
.join-form { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.join-form input {
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 14px;
  height: 38px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14px;
  outline: none;
  width: 200px;
  transition: border-color .2s;
}
.join-form input:focus { border-color: var(--green); }
.btn-join {
  height: 38px;
  padding: 0 20px;
  background: var(--green);
  color: #000;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: var(--font-body);
  transition: background .15s, transform .1s;
}
.btn-join:hover { background: var(--green-d); }
.btn-join:active { transform: scale(.97); }
.user-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 6px 14px 6px 8px;
  font-size: 13px;
}
.user-dot { width: 10px; height: 10px; border-radius: 50%; }
.btn-ghost {
  background: none;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--muted);
  padding: 0 12px;
  height: 32px;
  font-size: 12px;
  cursor: pointer;
  font-family: var(--font-body);
  transition: border-color .15s, color .15s;
}
.btn-ghost:hover { border-color: var(--muted); color: var(--text); }

/* ── TABS ── */
.tabs-wrapper {
  max-width: 900px; margin: 0 auto;
  padding: 24px 20px 0;
}
.tabs {
  display: flex;
  gap: 2px;
  border-bottom: 1px solid var(--border);
}
.tab {
  padding: 10px 20px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color .15s, border-color .15s;
}
.tab:hover { color: var(--text); }
.tab.active { color: var(--green); border-bottom-color: var(--green); }

/* ── SECTIONS ── */
.section { display: none; padding: 24px 0 40px; }
.section.active { display: block; }

/* ── NOTIFICATION ── */
.notif {
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 16px;
  border: 1px solid;
  animation: fadeIn .3s ease;
}
@keyframes fadeIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }
.notif-success { background: rgba(0,196,106,.1); color: #00C46A; border-color: rgba(0,196,106,.25); }
.notif-info    { background: rgba(74,158,255,.1); color: #4A9EFF; border-color: rgba(74,158,255,.25); }
.notif-warn    { background: rgba(245,200,66,.1); color: #F5C842; border-color: rgba(245,200,66,.25); }

/* ── MATCH CARDS ── */
.filter-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.flt {
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: none;
  color: var(--muted);
  font-size: 12px;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all .15s;
}
.flt.on { background: var(--green); color: #000; border-color: var(--green); font-weight: 600; }

.legend-row {
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-bottom: 20px;
}
.leg {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: var(--muted);
}
.leg-badge {
  font-size: 11px; font-weight: 700;
  padding: 2px 8px; border-radius: 4px;
}
.lb-exact  { background: rgba(0,196,106,.15);   color: var(--green); }
.lb-result { background: rgba(74,158,255,.15);  color: var(--blue); }
.lb-wrong  { background: rgba(232,69,69,.12);   color: var(--red); }
.lb-none   { background: rgba(255,255,255,.06); color: var(--muted); }

.match-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 12px;
  transition: border-color .15s;
}
.match-card:hover { border-color: rgba(255,255,255,0.14); }
.match-card.live { border-color: rgba(0,196,106,.35); }
.match-top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 14px;
}
.phase-badge {
  font-size: 11px; font-weight: 600;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 3px 8px;
  color: var(--muted);
  letter-spacing: .04em;
  text-transform: uppercase;
}
.match-meta { font-size: 12px; color: var(--muted); }
.live-badge {
  font-size: 11px; font-weight: 700;
  background: rgba(0,196,106,.18);
  color: var(--green);
  border: 1px solid rgba(0,196,106,.3);
  border-radius: 4px;
  padding: 2px 8px;
  animation: pulse 2s infinite;
}
.teams-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.team { text-align: center; }
.flag { font-size: 32px; display: block; margin-bottom: 4px; }
.team-name { font-size: 13px; font-weight: 600; }
.score-center { text-align: center; }
.score-display {
  font-family: var(--font-display);
  font-size: 30px;
  letter-spacing: 2px;
  color: var(--gold);
}
.vs-text { font-size: 13px; color: var(--muted); font-weight: 500; }

/* My prediction */
.my-pred {
  background: var(--card2);
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.my-pred label { font-size: 13px; color: var(--muted); flex: 1; min-width: 100px; }
.score-inp { display: flex; align-items: center; gap: 6px; }
.score-inp input {
  width: 42px; height: 36px;
  text-align: center;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 16px; font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 1px;
  outline: none;
  transition: border-color .2s;
}
.score-inp input:focus { border-color: var(--green); }
.score-inp input:disabled { opacity: .5; cursor: not-allowed; }
.score-sep { color: var(--muted); font-size: 16px; font-weight: 500; }
.pts-chip {
  font-size: 12px; font-weight: 700;
  padding: 3px 10px; border-radius: 5px;
}
.pc-exact  { background: rgba(0,196,106,.15);   color: var(--green); }
.pc-result { background: rgba(74,158,255,.15);  color: var(--blue); }
.pc-wrong  { background: rgba(232,69,69,.12);   color: var(--red); }
.pc-none   { background: rgba(255,255,255,.06); color: var(--muted); }

/* Other predictions */
.others-section { margin-top: 8px; }
.others-label {
  font-size: 11px; color: var(--muted);
  text-transform: uppercase; letter-spacing: .06em;
  margin-bottom: 6px;
}
.pred-chips { display: flex; flex-wrap: wrap; gap: 5px; }
.pred-chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 8px; border-radius: 5px;
  font-size: 12px; border: 1px solid var(--border);
  background: var(--card2);
  color: var(--muted);
}
.pred-chip.exact  { background: rgba(0,196,106,.12);  color: var(--green); border-color: rgba(0,196,106,.25); }
.pred-chip.result { background: rgba(74,158,255,.12); color: var(--blue);  border-color: rgba(74,158,255,.25); }
.pred-chip.wrong  { background: rgba(232,69,69,.1);   color: var(--red);   border-color: rgba(232,69,69,.2); }

/* Result row (admin) */
.result-row {
  margin-top: 10px; padding-top: 10px;
  border-top: 1px solid var(--border);
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.result-row label { font-size: 12px; color: var(--muted); flex: 1; }
.result-row .auto-badge {
  font-size: 11px; padding: 2px 8px; border-radius: 4px;
  background: rgba(0,196,106,.12); color: var(--green);
}

/* ── CLASSEMENT ── */
.podium-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.podium-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.podium-card.p1 { border-color: rgba(245,200,66,.35); }
.podium-card.p2 { border-color: rgba(192,192,192,.25); }
.podium-card.p3 { border-color: rgba(205,127,50,.25); }
.podium-medal { font-size: 28px; margin-bottom: 6px; }
.podium-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700;
  margin: 0 auto 8px;
}
.podium-name { font-weight: 600; font-size: 15px; }
.podium-pts {
  font-family: var(--font-display);
  font-size: 32px; color: var(--gold); line-height: 1; margin-top: 4px;
}
.podium-pts span { font-family: var(--font-body); font-size: 12px; color: var(--muted); }

.stand-list { background: var(--card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; }
.stand-row {
  display: flex; align-items: center; gap: 12px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--border);
  transition: background .15s;
}
.stand-row:last-child { border-bottom: none; }
.stand-row:hover { background: var(--card2); }
.stand-row.me { background: rgba(0,196,106,.06); }
.rank-no { font-size: 13px; font-weight: 600; color: var(--muted); min-width: 22px; }
.stand-av {
  width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; flex-shrink: 0;
}
.stand-name { flex: 1; font-size: 14px; font-weight: 500; }
.you-tag {
  font-size: 10px; padding: 1px 6px; border-radius: 3px;
  background: rgba(0,196,106,.15); color: var(--green);
  margin-left: 6px; vertical-align: middle;
}
.stand-detail { font-size: 11px; color: var(--muted); display: flex; gap: 8px; margin-top: 2px; }
.stand-pts { font-family: var(--font-display); font-size: 22px; color: var(--gold); }
.bar-wrap { height: 3px; background: rgba(255,255,255,.06); border-radius: 2px; margin-top: 4px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 2px; background: var(--gold); transition: width .4s ease; }

/* ── ADMIN ── */
.admin-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 16px;
}
.admin-card h3 { font-size: 14px; font-weight: 600; margin-bottom: 14px; color: var(--text); }
.form-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
.inp {
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  height: 38px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14px;
  outline: none;
  flex: 1;
  min-width: 120px;
  transition: border-color .2s;
}
.inp:focus { border-color: var(--green); }
.inp::placeholder { color: var(--muted); }
.btn-prim {
  height: 38px; padding: 0 18px;
  background: var(--green); color: #000;
  font-weight: 600; font-size: 13px;
  border: none; border-radius: 8px;
  cursor: pointer; font-family: var(--font-body);
  transition: background .15s;
  white-space: nowrap;
}
.btn-prim:hover { background: var(--green-d); }
.admin-list-item {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 0; border-bottom: 1px solid var(--border);
  font-size: 13px;
}
.admin-list-item:last-child { border-bottom: none; }
.btn-del {
  background: none; border: none; cursor: pointer;
  color: var(--muted); font-size: 14px; padding: 0 4px;
  transition: color .15s;
}
.btn-del:hover { color: var(--red); }
.api-status {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px;
  background: var(--card2); border-radius: 8px;
  font-size: 13px; margin-bottom: 10px;
}
.api-ok   { color: var(--green); }
.api-warn { color: var(--gold); }
.api-err  { color: var(--red); }

/* ── EMPTY STATE ── */
.empty { text-align: center; padding: 40px 20px; color: var(--muted); font-size: 14px; }

/* ── FOOTER ── */
footer {
  text-align: center; padding: 24px;
  font-size: 12px; color: var(--muted);
  border-top: 1px solid var(--border);
}
</style>
</head>
<body>

<header class="site-header">
  <div class="logo">POOL FIFA <span>2026</span></div>
  <div class="live-indicator">
    <div class="live-dot"></div>
    <span id="sync-label">Chargement...</span>
  </div>
</header>

<div class="hero">
  <div class="container">
    <h1>WORLD <span>CUP</span><br>2026</h1>
    <p>Pool de prédictions — DRI · CIUSSS Centre-Sud</p>
    <div class="stats-row">
      <div class="stat"><div class="stat-num" id="s-participants">0</div><div class="stat-label">participants</div></div>
      <div class="stat"><div class="stat-num" id="s-matchs">0</div><div class="stat-label">matchs</div></div>
      <div class="stat"><div class="stat-num" id="s-preds">0</div><div class="stat-label">prédictions</div></div>
    </div>
  </div>
</div>

<div id="notif-zone" class="container" style="padding-top:16px"></div>
<div id="join-zone"></div>

<div class="tabs-wrapper">
  <div class="tabs">
    <button class="tab active" onclick="showTab('matchs')">Matchs</button>
    <button class="tab" onclick="showTab('classement')">Classement</button>
    <button class="tab" onclick="showTab('admin')">Admin</button>
  </div>
</div>

<div class="container">
  <div id="tab-matchs" class="section active"></div>
  <div id="tab-classement" class="section"></div>
  <div id="tab-admin" class="section"></div>
</div>

<footer>Pool FIFA 2026 · DRI · Scores mis à jour automatiquement via football-data.org</footer>

<!-- Firebase SDK -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set, get, update, push, remove }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ═══════════════════════════════════════════════
// CONFIGURATION — Remplace par tes vraies valeurs
// ═══════════════════════════════════════════════
const firebaseConfig = {
  apiKey:            "AIzaSyC3lgixGNtpxrGPIFfpUDKjvGrkPiTcT1k",
  authDomain:        "pool-wc-2026-dri.firebaseapp.com",
  databaseURL:       "https://pool-wc-2026-dri-default-rtdb.firebaseio.com",
  projectId:         "pool-wc-2026-dri",
  storageBucket:     "pool-wc-2026-dri.firebasestorage.app",
  messagingSenderId: "545092982794",
  appId:             "1:545092982794:web:26d56c7daef7f1a626a7f3"
};
// ═══════════════════════════════════════════════

const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

const ADMIN_CODE = "dri2026";
const COLORS = [
  "#00C46A","#4A9EFF","#F5C842","#E84545","#A78BFA",
  "#FB923C","#34D399","#F472B6","#60A5FA","#FBBF24"
];

let ME = null;
let isAdmin = false;
let DATA = { participants:{}, matches:{}, predictions:{} };
let currentTab = "matchs";
let currentFilter = "all";

// ── Utils ──
function calcPts(ps1, ps2, rs1, rs2) {
  const p1=parseInt(ps1),p2=parseInt(ps2),r1=parseInt(rs1),r2=parseInt(rs2);
  if([p1,p2,r1,r2].some(isNaN)) return null;
  if(p1===r1 && p2===r2) return 3;
  const pw = p1>p2?1:p1<p2?-1:0, rw = r1>r2?1:r1<r2?-1:0;
  return pw===rw ? 1 : 0;
}
function getTotal(pid) {
  return Object.values(DATA.matches).reduce((s,m) => {
    const pred = (DATA.predictions||{})[`${pid}_${m.id}`];
    if(!pred || !m.result) return s;
    return s + (calcPts(pred.s1,pred.s2,m.result.s1,m.result.s2)||0);
  }, 0);
}
function notify(msg, type="info") {
  const z = document.getElementById("notif-zone");
  const d = document.createElement("div");
  d.className = `notif notif-${type}`;
  d.textContent = msg;
  z.innerHTML = "";
  z.appendChild(d);
  setTimeout(()=>d.remove(), 3500);
}
function fmt(ms) {
  return new Date(ms).toLocaleDateString("fr-CA",{weekday:"short",day:"numeric",month:"short"});
}
function pFlag(p) {
  return `<div class="user-dot" style="background:${p.color};width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0"></div>`;
}

// ── Firebase listeners ──
function initListeners() {
  onValue(ref(db,"participants"), snap => {
    DATA.participants = snap.val() || {};
    refreshUI();
  });
  onValue(ref(db,"matches"), snap => {
    DATA.matches = snap.val() || {};
    refreshUI();
  });
  onValue(ref(db,"predictions"), snap => {
    DATA.predictions = snap.val() || {};
    refreshUI();
  });
  document.getElementById("sync-label").textContent =
    "En direct · " + new Date().toLocaleTimeString("fr-CA",{hour:"2-digit",minute:"2-digit"});
  setInterval(()=>{
    document.getElementById("sync-label").textContent =
      "En direct · " + new Date().toLocaleTimeString("fr-CA",{hour:"2-digit",minute:"2-digit"});
  }, 30000);
}

function refreshUI() {
  updateStats();
  renderJoinZone();
  if(currentTab==="matchs")     renderMatchs();
  if(currentTab==="classement") renderClassement();
  if(currentTab==="admin")      renderAdmin();
}

// ── Stats ──
function updateStats() {
  const ps = Object.values(DATA.participants).length;
  const ms = Object.values(DATA.matches).length;
  const pr = Object.values(DATA.predictions||{}).filter(p=>p.s1!==undefined).length;
  document.getElementById("s-participants").textContent = ps;
  document.getElementById("s-matchs").textContent = ms;
  document.getElementById("s-preds").textContent = pr;
}

// ── Join zone ──
function renderJoinZone() {
  const z = document.getElementById("join-zone");
  const participants = Object.values(DATA.participants);
  if(ME) {
    const p = participants.find(x=>x.id===ME);
    if(!p) { ME=null; renderJoinZone(); return; }
    z.innerHTML = `<div class="container" style="padding-top:16px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <div class="user-pill">
          <div style="width:10px;height:10px;border-radius:50%;background:${p.color}"></div>
          ${p.name}
        </div>
        ${isAdmin?`<span style="font-size:11px;padding:2px 8px;border-radius:4px;background:rgba(245,200,66,.15);color:#F5C842">Admin</span>`:""}
        <button class="btn-ghost" onclick="logout()" style="margin-left:auto">Changer de joueur</button>
      </div>
    </div>`;
  } else {
    z.innerHTML = `<div class="container" style="padding-top:16px">
      <div class="join-card">
        <div class="join-icon">⚽</div>
        <div class="join-text" style="flex:1">
          <h3>Rejoindre le pool</h3>
          <p>${participants.length} participant${participants.length!==1?"s":""} inscrit${participants.length!==1?"s":""}</p>
          <div class="join-form">
            <input id="inp-join" placeholder="Ton prénom" maxlength="24"
              onkeydown="if(event.key==='Enter')joinPool()"/>
            <button class="btn-join" onclick="joinPool()">Rejoindre →</button>
          </div>
        </div>
      </div>
    </div>`;
  }
}
window.logout = () => { ME=null; renderJoinZone(); renderMatchs(); renderClassement(); };

window.joinPool = async () => {
  const name = document.getElementById("inp-join").value.trim();
  if(!name) return;
  const existing = Object.values(DATA.participants).find(p=>p.name.toLowerCase()===name.toLowerCase());
  if(existing) {
    ME = existing.id;
    notify(`Bon retour ${name} ! 👋`, "success");
  } else {
    const color = COLORS[Object.values(DATA.participants).length % COLORS.length];
    const id = "p_" + Date.now();
    await set(ref(db,`participants/${id}`), { id, name, color, joined: Date.now() });
    ME = id;
    notify(`Bienvenue ${name} dans le pool !`, "success");
  }
  renderJoinZone();
  renderMatchs();
  renderClassement();
};

// ── Tabs ──
window.showTab = (tab) => {
  currentTab = tab;
  document.querySelectorAll(".tab").forEach((t,i) =>
    t.classList.toggle("active", ["matchs","classement","admin"][i]===tab));
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById("tab-"+tab).classList.add("active");
  if(tab==="matchs")     renderMatchs();
  if(tab==="classement") renderClassement();
  if(tab==="admin")      renderAdmin();
};

// ── Matchs ──
window.setFilter = (f, btn) => {
  currentFilter = f;
  document.querySelectorAll(".flt").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on");
  renderMatchs();
};

function renderMatchs() {
  const el = document.getElementById("tab-matchs");
  const all = Object.values(DATA.matches).sort((a,b)=>(a.date||0)-(b.date||0));
  let matches = all;
  if(currentFilter==="pending") matches = all.filter(m=>!m.result);
  if(currentFilter==="done")    matches = all.filter(m=>!!m.result);

  const counts = {
    all: all.length,
    pending: all.filter(m=>!m.result).length,
    done: all.filter(m=>!!m.result).length
  };

  const legend = `<div class="legend-row">
    <div class="leg"><span class="leg-badge lb-exact">+3</span> Score exact</div>
    <div class="leg"><span class="leg-badge lb-result">+1</span> Bon résultat</div>
    <div class="leg"><span class="leg-badge lb-wrong">0</span> Raté</div>
  </div>`;

  const filters = `<div class="filter-row">
    <button class="flt ${currentFilter==="all"?"on":""}" onclick="setFilter('all',this)">Tous (${counts.all})</button>
    <button class="flt ${currentFilter==="pending"?"on":""}" onclick="setFilter('pending',this)">À prédire (${counts.pending})</button>
    <button class="flt ${currentFilter==="done"?"on":""}" onclick="setFilter('done',this)">Terminés (${counts.done})</button>
  </div>`;

  if(!matches.length) {
    el.innerHTML = legend + filters + `<div class="empty">Aucun match dans cette catégorie.</div>`;
    return;
  }

  const cards = matches.map(m => renderMatchCard(m)).join("");
  el.innerHTML = legend + filters + cards;
}

function renderMatchCard(m) {
  const participants = Object.values(DATA.participants);
  const t1parts = m.team1.split(" "), t2parts = m.team2.split(" ");
  const f1=t1parts[0], n1=t1parts.slice(1).join(" ");
  const f2=t2parts[0], n2=t2parts.slice(1).join(" ");

  // Score center
  let scoreHtml;
  if(m.live) {
    scoreHtml = `<div class="score-center">
      <div class="score-display">${m.result?`${m.result.s1}–${m.result.s2}`:"0–0"}</div>
      <div class="live-badge">LIVE</div>
    </div>`;
  } else if(m.result) {
    scoreHtml = `<div class="score-center">
      <div class="score-display">${m.result.s1}–${m.result.s2}</div>
    </div>`;
  } else {
    scoreHtml = `<div class="score-center"><div class="vs-text">VS</div></div>`;
  }

  // My prediction row
  let myPredHtml = "";
  if(ME) {
    const pred = (DATA.predictions||{})[`${ME}_${m.id}`] || {s1:"",s2:""};
    let ptsBadge = "";
    if(m.result && pred.s1!=="" && pred.s2!=="") {
      const pts = calcPts(pred.s1, pred.s2, m.result.s1, m.result.s2);
      if(pts===3) ptsBadge = `<span class="pts-chip pc-exact">+3 pts ✓</span>`;
      else if(pts===1) ptsBadge = `<span class="pts-chip pc-result">+1 pt</span>`;
      else ptsBadge = `<span class="pts-chip pc-wrong">0 pt</span>`;
    }
    myPredHtml = `<div class="my-pred">
      <label>Ma prédiction</label>
      ${ptsBadge}
      <div class="score-inp">
        <input type="number" min="0" max="20" value="${pred.s1}" placeholder="0"
          ${m.result?"disabled":""}
          onchange="savePred('${m.id}','s1',this.value)"/>
        <span class="score-sep">–</span>
        <input type="number" min="0" max="20" value="${pred.s2}" placeholder="0"
          ${m.result?"disabled":""}
          onchange="savePred('${m.id}','s2',this.value)"/>
      </div>
    </div>`;
  }

  // Others
  const others = participants.filter(p=>p.id!==ME);
  let othersHtml = "";
  if(others.length) {
    const chips = others.map(p => {
      const pred = (DATA.predictions||{})[`${p.id}_${m.id}`];
      if(!pred || pred.s1==="" || pred.s2==="") {
        return `<span class="pred-chip">${pFlag(p)} ${p.name} —</span>`;
      }
      let cls = "";
      if(m.result) {
        const pts = calcPts(pred.s1,pred.s2,m.result.s1,m.result.s2);
        if(pts===3) cls="exact"; else if(pts===1) cls="result"; else cls="wrong";
      }
      return `<span class="pred-chip ${cls}">${pFlag(p)} ${p.name} ${pred.s1}–${pred.s2}</span>`;
    }).join("");
    othersHtml = `<div class="others-section">
      <div class="others-label">Prédictions des autres</div>
      <div class="pred-chips">${chips}</div>
    </div>`;
  }

  // Result row (admin)
  let resultHtml = "";
  if(isAdmin) {
    resultHtml = `<div class="result-row">
      <label>⚡ Résultat réel (admin · ou auto via API)</label>
      <div class="score-inp">
        <input type="number" min="0" max="20" style="width:42px;height:34px;font-size:15px;background:var(--card2);border:1px solid var(--border);border-radius:6px;color:var(--text);text-align:center;outline:none"
          value="${m.result?m.result.s1:""}" placeholder="–"
          onchange="saveResult('${m.id}','s1',this.value)"/>
        <span class="score-sep">–</span>
        <input type="number" min="0" max="20" style="width:42px;height:34px;font-size:15px;background:var(--card2);border:1px solid var(--border);border-radius:6px;color:var(--text);text-align:center;outline:none"
          value="${m.result?m.result.s2:""}" placeholder="–"
          onchange="saveResult('${m.id}','s2',this.value)"/>
      </div>
      ${m.result?`<span class="auto-badge">✓ Sauvegardé</span>`:""}
    </div>`;
  } else if(m.result) {
    resultHtml = `<div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border);font-size:12px;color:var(--muted)">
      Score final : <strong style="color:var(--text)">${m.result.s1}–${m.result.s2}</strong>
      ${m.autoResult?`<span style="margin-left:8px;font-size:11px;color:var(--green)">· mis à jour automatiquement</span>`:""}
    </div>`;
  }

  return `<div class="match-card${m.live?" live":""}">
    <div class="match-top">
      <span class="phase-badge">${m.group||"Match"}</span>
      <span class="match-meta">${m.date?fmt(m.date):""}</span>
    </div>
    <div class="teams-row">
      <div class="team"><span class="flag">${f1}</span><div class="team-name">${n1}</div></div>
      ${scoreHtml}
      <div class="team"><span class="flag">${f2}</span><div class="team-name">${n2}</div></div>
    </div>
    ${myPredHtml}
    ${othersHtml}
    ${resultHtml}
  </div>`;
}

window.savePred = async (mid, field, val) => {
  if(!ME) { notify("Rejoins le pool d'abord !", "warn"); return; }
  const key = `${ME}_${mid}`;
  const cur = (DATA.predictions||{})[key] || {s1:"",s2:""};
  cur[field] = val;
  await set(ref(db, `predictions/${key}`), cur);
};

window.saveResult = async (mid, field, val) => {
  const m = DATA.matches[mid];
  if(!m) return;
  const result = m.result || {s1:"",s2:""};
  result[field] = val;
  await update(ref(db, `matches/${mid}`), {result, autoResult: false});
};

// ── Classement ──
function renderClassement() {
  const el = document.getElementById("tab-classement");
  const participants = Object.values(DATA.participants);
  if(!participants.length) {
    el.innerHTML = `<div class="empty">Personne n'a encore rejoint le pool.</div>`;
    return;
  }
  const ranked = participants.map(p => {
    const total = getTotal(p.id);
    const exact = Object.values(DATA.matches).filter(m => {
      const pred = (DATA.predictions||{})[`${p.id}_${m.id}`];
      return pred && m.result && calcPts(pred.s1,pred.s2,m.result.s1,m.result.s2)===3;
    }).length;
    const res = Object.values(DATA.matches).filter(m => {
      const pred = (DATA.predictions||{})[`${p.id}_${m.id}`];
      return pred && m.result && calcPts(pred.s1,pred.s2,m.result.s1,m.result.s2)===1;
    }).length;
    return {...p, total, exact, res};
  }).sort((a,b)=>b.total-a.total);

  const maxPts = Math.max(...ranked.map(r=>r.total), 1);
  const medals = ["🥇","🥈","🥉"];

  // Podium top 3
  const podium = ranked.slice(0,3).map((p,i) => `
    <div class="podium-card p${i+1}">
      <div class="podium-medal">${medals[i]}</div>
      <div class="podium-avatar" style="background:${p.color}22;color:${p.color}">${p.name[0].toUpperCase()}</div>
      <div class="podium-name">${p.name}${p.id===ME?`<span class="you-tag">moi</span>`:""}</div>
      <div class="podium-pts">${p.total}<span> pts</span></div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">${p.exact} exact · ${p.res} résultat</div>
    </div>`).join("");

  // Full list
  const rows = ranked.map((p,i) => `
    <div class="stand-row${p.id===ME?" me":""}">
      <span class="rank-no">${medals[i]||i+1}</span>
      <div class="stand-av" style="background:${p.color}22;color:${p.color}">${p.name[0].toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div class="stand-name">${p.name}${p.id===ME?`<span class="you-tag">moi</span>`:""}</div>
        <div class="stand-detail">
          <span style="color:var(--green)">${p.exact} exact</span>
          <span style="color:var(--blue)">${p.res} résultat</span>
        </div>
        <div class="bar-wrap"><div class="bar-fill" style="width:${Math.round(p.total/maxPts*100)}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="stand-pts">${p.total}</div>
        <div style="font-size:11px;color:var(--muted)">pts</div>
      </div>
    </div>`).join("");

  el.innerHTML = `
    <div class="podium-row">${podium}</div>
    <div class="stand-list">${rows}</div>`;
}

// ── Admin ──
window.checkAdmin = () => {
  const v = document.getElementById("admin-code").value;
  if(v===ADMIN_CODE) {
    isAdmin=true;
    notify("Accès admin activé ✓","success");
    renderAdmin();
    renderMatchs();
  } else {
    notify("Code incorrect","warn");
  }
};

function renderAdmin() {
  const el = document.getElementById("tab-admin");
  const participants = Object.values(DATA.participants);
  const matches = Object.values(DATA.matches).sort((a,b)=>(a.date||0)-(b.date||0));

  if(!isAdmin) {
    el.innerHTML = `<div class="admin-card" style="max-width:400px">
      <h3>🔒 Accès administrateur</h3>
      <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Entre le code admin pour gérer les matchs et activer la synchro des scores.</p>
      <div class="form-row">
        <input class="inp" id="admin-code" type="password" placeholder="Code admin"
          onkeydown="if(event.key==='Enter')checkAdmin()"/>
        <button class="btn-prim" onclick="checkAdmin()">Connexion</button>
      </div>
    </div>`;
    return;
  }

  const pList = participants.map(p=>`
    <div class="admin-list-item">
      <div style="width:10px;height:10px;border-radius:50%;background:${p.color}"></div>
      <span style="flex:1">${p.name}</span>
      <span style="font-size:11px;color:var(--muted)">${getTotal(p.id)} pts</span>
      <button class="btn-del" onclick="removeP('${p.id}')">✕</button>
    </div>`).join("") || `<div style="font-size:13px;color:var(--muted);padding:8px 0">Aucun participant</div>`;

  const mList = matches.map(m=>`
    <div class="admin-list-item">
      <span style="flex:1;font-size:13px">${m.team1} vs ${m.team2}
        <span style="color:var(--muted);font-size:11px"> · ${m.group||""}</span>
      </span>
      ${m.result?`<span style="font-size:12px;color:var(--green)">${m.result.s1}–${m.result.s2}</span>`:""}
      ${m.autoResult?`<span style="font-size:10px;color:var(--green);margin-left:4px">auto</span>`:""}
      <button class="btn-del" onclick="removeM('${m.id}')">✕</button>
    </div>`).join("") || `<div style="font-size:13px;color:var(--muted);padding:8px 0">Aucun match ajouté</div>`;

  el.innerHTML = `
    <div class="admin-card">
      <h3>⚡ Synchro automatique des scores</h3>
      <div class="api-status api-ok" id="api-status-box">
        ● Configuration requise — voir instructions ci-dessous
      </div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:10px">
        Les scores sont mis à jour automatiquement via <strong style="color:var(--text)">football-data.org</strong>
        toutes les 2 minutes. La clé API gratuite est configurée dans la fonction Vercel/Firebase.
      </p>
      <button class="btn-prim" onclick="triggerSync()" id="btn-sync">🔄 Forcer une synchro maintenant</button>
    </div>

    <div class="admin-card">
      <h3>➕ Ajouter un match</h3>
      <div class="form-row">
        <input class="inp" id="at1" placeholder="🇫🇷 France"/>
        <input class="inp" id="at2" placeholder="🇧🇷 Brésil"/>
      </div>
      <div class="form-row">
        <input class="inp" id="adate" type="date"/>
        <input class="inp" id="agrp" placeholder="Groupe A / Huitième..."/>
        <input class="inp" id="aext" placeholder="ID API (optionnel)" style="max-width:180px"/>
      </div>
      <button class="btn-prim" onclick="addMatch()">Ajouter le match</button>
      <p style="font-size:11px;color:var(--muted);margin-top:8px">
        L'ID API est l'identifiant du match sur football-data.org — permet la synchro auto des scores.
      </p>
    </div>

    <div class="admin-card">
      <h3>👥 Participants (${participants.length})</h3>
      ${pList}
    </div>

    <div class="admin-card">
      <h3>📅 Matchs (${matches.length})</h3>
      ${mList}
    </div>`;
}

window.addMatch = async () => {
  const t1 = document.getElementById("at1").value.trim();
  const t2 = document.getElementById("at2").value.trim();
  if(!t1||!t2) return;
  const id = "m_" + Date.now();
  const dateVal = document.getElementById("adate").value;
  await set(ref(db,`matches/${id}`), {
    id, team1:t1, team2:t2,
    date: dateVal ? new Date(dateVal).getTime() : Date.now(),
    group: document.getElementById("agrp").value.trim(),
    apiId: document.getElementById("aext").value.trim() || null,
    result: null, autoResult: false, live: false
  });
  ["at1","at2","adate","agrp","aext"].forEach(id=>document.getElementById(id).value="");
  notify("Match ajouté !", "success");
};

window.removeP = async (id) => {
  await remove(ref(db,`participants/${id}`));
};
window.removeM = async (id) => {
  await remove(ref(db,`matches/${id}`));
};

window.triggerSync = async () => {
  const btn = document.getElementById("btn-sync");
  btn.textContent = "⏳ Synchro en cours...";
  btn.disabled = true;
  try {
    // Appelle la fonction Vercel de synchro
    const res = await fetch("/api/sync-scores");
    const data = await res.json();
    notify(`Synchro OK — ${data.updated||0} match(s) mis à jour`, "success");
  } catch(e) {
    notify("Erreur de synchro — vérifie la configuration de l'API", "warn");
  }
  btn.textContent = "🔄 Forcer une synchro maintenant";
  btn.disabled = false;
};

// ── Init ──
initListeners();
</script>
</body>
</html>
