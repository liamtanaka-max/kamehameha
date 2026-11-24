// =========================================================
//  PAGE / UI — three modes
//    Daily Charge : 7 prompts, same for everyone, saved per day
//    Infinite     : endless prompts, 3 lives, best score saved
//    Party        : 2–6 players pass one device; taken answers don't count
// =========================================================

const $ = (id) => document.getElementById(id);
const dateKey = todayKey();
const dayNum = dayNumber(dateKey);
const DAILY_KEY = "kamehameha-progress";
const BEST_KEY = "kamehameha-infinite-best";
const LIVES = 3;
const SCREENS = ["start", "party-setup", "pass", "play", "round", "results", "party-results"];

let daily = loadDaily();   // { date, results: [] }
let run = null;            // the game in progress
let answered = false;
let suggestion = null;
let timerId = null;

// ---------- Storage ----------

function loadDaily() {
  try {
    const saved = JSON.parse(localStorage.getItem(DAILY_KEY));
    if (saved && saved.date === dateKey) return saved;
  } catch (e) {}
  return { date: dateKey, results: [] };
}
function saveDaily() { try { localStorage.setItem(DAILY_KEY, JSON.stringify(daily)); } catch (e) {} }
function getBest() { try { return Number(localStorage.getItem(BEST_KEY)) || 0; } catch (e) { return 0; } }
function setBest(v) { try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) {} }

// ---------- Helpers ----------

const powerOf = (results) => results.reduce((s, r) => s + (r.tier ? TIERS[r.tier].points : 0), 0);
const bestTierOf = (results) => results.reduce((m, r) => Math.max(m, r.tier || 0), 0);
const mobCount = (results) => Math.min(60, results.reduce((s, r) => s + (r.tier || 0), 0));

function show(id) {
  for (const s of SCREENS) $(s).hidden = s !== id;
  document.body.dataset.screen = id;
  window.scrollTo(0, 0);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function animateNumber(el, to, ms = 900, suffix = "") {
  const from = Number(el.dataset.value || 0);
  const start = performance.now();
  const token = (el._anim = (el._anim || 0) + 1); // a newer animation cancels this one
  const step = (t) => {
    if (el._anim !== token) return;
    const p = Math.min(1, (t - start) / ms);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  el.dataset.value = to;
  requestAnimationFrame(step);
}

function setNumber(el, v, suffix = "") {
  el._anim = (el._anim || 0) + 1;
  el.dataset.value = v;
  el.textContent = v.toLocaleString() + suffix;
}

// Current prompt / player / results for whichever mode is running
function curPrompt() { return run.mode === "daily" ? run.prompts[run.results.length] : run.prompt; }
function curPlayer() { return run.players[run.order[run.turn]]; }
function curResults() { return run.mode === "party" ? curPlayer().results : run.results; }
function maxPower() {
  if (run.mode === "party") return run.rounds * TIERS[6].points;
  return MAX_POWER;
}
// Which fighter on screen belongs to whoever is answering
function fighterIndex() { return run && run.mode === "party" ? run.order[run.turn] : 0; }
function chargePct() { return Math.min(1, powerOf(curResults()) / maxPower()); }

// ---------- Menu ----------

function goMenu() {
  stopTimer();
  run = null;
  Scene.reset();
  daily = loadDaily();
  const done = daily.results.length >= PER_DAY;
  $("daily-btn-label").textContent = done ? `CHARGE #${dayNum} ✓ SEE RESULTS` : daily.results.length ? "RESUME CHARGE" : "BEGIN CHARGE";
  $("daily-btn-sub").textContent = done ? `${powerOf(daily.results)} power · next charge at midnight` : "today's 7 prompts · one from every theme";
  const best = getBest();
  $("infinite-best").textContent = best ? `BEST: ${best} power` : "";
  if (done) Scene.setCharge(0, powerOf(daily.results) / MAX_POWER);
  show("start");
}

// ---------- Starting modes ----------

// Today's 7 prompts: one from each theme, picked by a shuffle seeded with
// the date, so everyone gets the same set. Saved once per day.
function dailyPrompts() {
  if (daily.ids) {
    const qs = daily.ids.map((id) => QUESTION_BY_ID.get(id));
    if (qs.every(Boolean)) return qs;
  }
  const qs = personalizeDaily(questionsFor(dateKey));
  daily.ids = qs.map((q) => q.id);
  saveDaily();
  return qs;
}

function startDaily() {
  daily = loadDaily();
  const prompts = dailyPrompts();
  run = { mode: "daily", prompts, results: daily.results };
  Scene.reset();
  if (run.results.length >= PER_DAY) {
    Scene.setCharge(0, powerOf(run.results) / MAX_POWER);
    Scene.finale(0, [], null, null, true);
    return showResults(false);
  }
  beginTurn();
}

function startInfinite() {
  run = { mode: "infinite", next: promptStream(), results: [], lives: LIVES };
  run.prompt = run.next();
  Scene.reset();
  beginTurn();
}

let lastPartyNames = null;

function startParty(names, rounds) {
  lastPartyNames = names;
  run = {
    mode: "party", rounds, round: 0, next: promptStream(),
    players: names.map((name) => ({ name, results: [] })), names
  };
  Scene.reset();
  Scene.setPlayers(names); // everyone gets their own fighter
  startRound();
}

// ---------- Party flow ----------

function startRound() {
  run.prompt = run.next();
  run.taken = new Map();       // answer -> player name
  run.roundAnswers = [];
  const n = run.players.length;
  run.order = Array.from({ length: n }, (_, i) => (i + run.round) % n); // rotate who goes first
  run.turn = 0;
  showPass();
}

function showPass() {
  const p = curPlayer();
  show("pass");
  $("pass-round").textContent = `ROUND ${run.round + 1} / ${run.rounds}`;
  $("pass-name").textContent = p.name.toUpperCase();
  $("pass-taken").textContent = run.taken.size ? `${run.taken.size} answer${run.taken.size > 1 ? "s" : ""} already taken this round` : "you go first this round";
  Scene.setActive(run.order[run.turn]);
  $("pass-ready").focus();
}

function showRoundSummary() {
  show("round");
  $("round-label").textContent = `ROUND ${run.round + 1} / ${run.rounds} RESULTS`;
  $("round-prompt").textContent = run.prompt.prompt;
  $("round-log").innerHTML = "";
  run.roundAnswers.forEach((a) => {
    const li = document.createElement("li");
    li.style.setProperty("--c", TIER_COLORS[a.tier]);
    li.innerHTML = `<span class="log-q"></span><span class="log-a"></span><span class="log-t"></span>`;
    li.querySelector(".log-q").textContent = a.player;
    li.querySelector(".log-a").textContent = a.answer || "—";
    li.querySelector(".log-t").textContent = a.tier ? `${TIERS[a.tier].name} +${TIERS[a.tier].points}` : "No answer";
    $("round-log").appendChild(li);
  });
  $("round-reveal").innerHTML = revealHtml(run.prompt);
  renderBoard($("round-board"));
  const last = run.round >= run.rounds - 1;
  $("round-next").textContent = last ? "WINNER FIRES ›" : "NEXT ROUND ›";
  $("round-next").classList.toggle("pink", last);
  $("round-next").focus();
}

function standings() {
  return run.players.map((p) => ({ ...p, power: powerOf(p.results) }))
    .sort((a, b) => b.power - a.power);
}

function renderBoard(el) {
  const rows = standings();
  el.innerHTML = rows.map((p, i) => {
    const squares = p.results.map((r) => `<span class="sq" style="--c:${TIER_COLORS[r.tier || 0]}"></span>`).join("");
    const form = Scene.formOf(p.power / maxPower());
    return `<li class="${i === 0 ? "lead" : ""}"><span class="rank">${i + 1}</span><span class="pname">${escapeHtml(p.name)} <em style="color:${form.color}">${form.name}</em></span><span class="squares">${squares}</span><span class="ppow">${p.power}</span></li>`;
  }).join("");
}

function partyFinale() {
  const winner = standings()[0];
  const tiers = winner.results.map((r) => r.tier || 0);
  show("play");
  $("play").classList.add("firing");
  $("fire-hud").hidden = false;
  prepareFireHud(`${winner.name.toUpperCase()} FIRES!`);
  const who = run.players.findIndex((p) => p.name === winner.name);
  Scene.finale(who, tiers, () => {
    setTimeout(() => { endFire(); showPartyResults(winner); }, 400);
  }, onKill, false, (ms) => onBeamFired(winner.power, ms));
}

function showPartyResults(winner) {
  show("party-results");
  const rows = standings();
  const tied = rows.filter((p) => p.power === rows[0].power);
  const best = winner.results.filter((r) => r.tier).sort((a, b) => b.tier - a.tier)[0];
  if (tied.length > 1) {
    $("winner").textContent = "IT'S A TIE!";
    $("winner-line").textContent = `${tied.map((p) => p.name).join(", ")} — ${rows[0].power} power each`;
  } else {
    $("winner").textContent = `👑 ${winner.name.toUpperCase()} WINS`;
    $("winner-line").textContent = best
      ? `${winner.power} power · ${(winner.power * KM_PER_POWER).toLocaleString()} km · best pull: ${best.answer} (${TIERS[best.tier].name})`
      : `${winner.power} power`;
  }
  renderBoard($("final-board"));
}

// ---------- Turn (shared by all modes) ----------

function beginTurn() {
  answered = false;
  suggestion = null;
  show("play");
  $("play").classList.remove("firing");
  $("fire-hud").hidden = true;

  const q = curPrompt();
  markSeen(q);
  setTimeout(() => { warmUp(q); if (q.catalog) warmUp(ANY_ANIME); }, 30);
  if (run.mode === "daily") {
    $("prompt-label").textContent = `PROMPT ${run.results.length + 1} / ${PER_DAY}`;
  } else if (run.mode === "infinite") {
    $("prompt-label").textContent = `PROMPT ${run.results.length + 1}`;
  } else {
    $("prompt-label").textContent = `ROUND ${run.round + 1}/${run.rounds} · ${curPlayer().name.toUpperCase()}`;
  }
  $("hard-badge").hidden = !q.hard;
  $("prompt").textContent = q.prompt;
  $("prompt").classList.remove("enter"); void $("prompt").offsetWidth; $("prompt").classList.add("enter");

  $("answer").value = "";
  $("answer").disabled = false;
  $("form").querySelector("button").disabled = false;
  $("flash").innerHTML = "";
  $("flash").className = "result-flash";
  delete $("flash").dataset.tier;
  $("reveal").hidden = true;
  $("skip").hidden = false;
  $("next").hidden = true;
  renderTaken();
  refreshHud(false);
  Scene.setActive(fighterIndex());
  Scene.setCharge(fighterIndex(), chargePct());
  startTimer();
  $("answer").focus();
}

function renderTaken() {
  if (run.mode !== "party" || !run.taken.size) { $("taken").hidden = true; return; }
  $("taken").hidden = false;
  $("taken").innerHTML = `<span class="reveal-label">TAKEN THIS ROUND</span>` +
    [...run.taken.entries()].map(([ans, who]) => `<span class="chip taken-chip">${escapeHtml(ans)} <i>${escapeHtml(who)}</i></span>`).join("");
}

function refreshHud(animate = true) {
  const results = curResults();
  const power = powerOf(results);
  setCharge(chargePct(), animate);
  if (animate) animateNumber($("power"), power, 600); else setNumber($("power"), power);
  $("power-label").textContent = run.mode === "party" ? `${curPlayer().name.toUpperCase()}'S POWER` : "POWER";

  if (run.mode === "infinite") {
    $("pips").innerHTML = Array.from({ length: LIVES }, (_, i) =>
      `<span class="heart ${i < run.lives ? "" : "lost"}">♥</span>`).join("");
    return;
  }
  const total = run.mode === "daily" ? PER_DAY : run.rounds;
  const current = results.length;
  $("pips").innerHTML = Array.from({ length: total }, (_, i) => {
    const r = results[i];
    const cls = r ? (r.tier ? "done" : "skip") : i === current && !answered ? "now" : "";
    const style = r && r.tier ? `style="--c:${TIER_COLORS[r.tier]}"` : "";
    return `<span class="pip ${cls}" ${style}></span>`;
  }).join("");
}

// ---------- Charge meter + answer reveal ----------

const calm = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
const canAnimate = () => !calm() && typeof Element.prototype.animate === "function";

// The meter eases to the new level; its glow and colour follow the form
function setCharge(pct, animate) {
  const el = $("charge");
  const fill = $("charge-fill");
  const prev = Number(el.dataset.pct || 0);
  if (!animate) fill.style.transition = "none";
  el.style.setProperty("--pct", pct.toFixed(4));
  el.style.setProperty("--glow", (0.15 + 0.85 * pct).toFixed(3));
  el.style.setProperty("--fc", Scene.formOf(pct).color);
  el.classList.toggle("max", pct >= 0.95);
  el.dataset.pct = pct;
  if (!animate) { void fill.offsetWidth; fill.style.transition = ""; return; }
  if (pct > prev && canAnimate()) {
    $("charge-sheen").animate([{ transform: "translateX(-120%)" }, { transform: "translateX(420%)" }],
      { duration: 700, delay: 120, easing: "cubic-bezier(.25, 1, .5, 1)" });
  }
}

// How loud each tier's reveal is. Common is a quick nudge; Deep Cut is the big one.
const TIER_FX = {
  1: { from: 0.92, peak: 1.03, ms: 220 },
  2: { from: 0.86, peak: 1.07, ms: 300 },
  3: { from: 0.8, peak: 1.12, ms: 380 },
  4: { from: 0.7, peak: 1.2, ms: 480, shake: 3, bits: 14 },
  5: { from: 0.6, peak: 1.28, ms: 580, shake: 5, bits: 24, ring: true },
  6: { from: 0.5, peak: 1.36, ms: 700, shake: 7, bits: 36, ring: true }
};

function revealTier(tier) {
  const flash = $("flash");
  flash.dataset.tier = tier;
  if (!canAnimate()) return;
  const fx = TIER_FX[tier];
  const stamp = flash.querySelector(".tier-name");
  const easeOut = "cubic-bezier(.19, 1, .22, 1)";
  stamp.animate([
    { transform: `scale(${fx.from})`, opacity: 0 },
    { transform: `scale(${fx.peak})`, opacity: 1, offset: 0.55 },
    { transform: "scale(1)", opacity: 1 }
  ], { duration: fx.ms, easing: easeOut });
  flash.querySelector(".tier-pts").animate([{ transform: "translateY(10px)", opacity: 0 }, { transform: "none", opacity: 1 }],
    { duration: 260, delay: fx.ms * 0.35, easing: easeOut, fill: "backwards" });
  flash.querySelector(".tier-answer").animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, delay: fx.ms * 0.45, fill: "backwards" });

  if (fx.shake) {
    const a = fx.shake;
    document.querySelector(".wrap").animate([
      { transform: "none" }, { transform: `translate(${-a}px, ${a * 0.4}px)` }, { transform: `translate(${a * 0.8}px, ${-a * 0.4}px)` },
      { transform: `translate(${-a * 0.5}px, 0)` }, { transform: `translate(${a * 0.25}px, 0)` }, { transform: "none" }
    ], { duration: 380, easing: "linear" });
  }
  if (fx.bits || fx.ring) {
    const cx = stamp.offsetLeft + stamp.offsetWidth / 2;
    const cy = stamp.offsetTop + stamp.offsetHeight / 2;
    if (fx.ring) {
      const ring = document.createElement("span");
      ring.className = "fx-ring";
      ring.style.left = cx + "px"; ring.style.top = cy + "px";
      flash.appendChild(ring);
      ring.animate([{ transform: "scale(.2)", opacity: 1 }, { transform: `scale(${tier === 6 ? 3.4 : 2.6})`, opacity: 0 }],
        { duration: 650, easing: easeOut }).onfinish = () => ring.remove();
    }
    const colors = tier === 6 ? Object.values(TIER_COLORS).slice(2) : [TIER_COLORS[tier], "#ffffff"];
    for (let i = 0; i < fx.bits; i++) {
      const bit = document.createElement("span");
      bit.className = "fx-bit";
      bit.style.setProperty("--c", colors[i % colors.length]);
      const size = 4 + Math.round(Math.random() * 5);
      bit.style.width = bit.style.height = size + "px";
      bit.style.left = cx + "px"; bit.style.top = cy + "px";
      flash.appendChild(bit);
      const ang = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * (40 + (tier - 3) * 45);
      const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist * 0.7 - 10;
      bit.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(.2)`, opacity: 0 }
      ], { duration: 500 + Math.random() * 450, easing: easeOut, delay: Math.random() * 60 }).onfinish = () => bit.remove();
    }
  }
}

// ---------- Timer ----------

function startTimer() {
  stopTimer();
  const end = performance.now() + TIME_LIMIT * 1000;
  const tick = () => {
    const left = Math.max(0, end - performance.now());
    $("timer-fill").style.width = (left / (TIME_LIMIT * 1000)) * 100 + "%";
    $("timer-num").textContent = Math.ceil(left / 1000);
    const urgent = left <= 5000;
    $("timer-fill").classList.toggle("urgent", urgent);
    $("timer-num").classList.toggle("urgent", urgent);
    if (left <= 0) timeUp();
  };
  $("timer-fill").parentElement.classList.remove("stopped");
  timerId = setInterval(tick, 100);
  tick();
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  $("timer-fill").parentElement.classList.add("stopped");
}

function timeUp() {
  stopTimer();
  if (answered) return;
  suggestion = null;
  miss("TIME'S UP — no power this round", "TIME");
}

// ---------- Answering ----------

function revealHtml(q) {
  const answers = answersOf(q);
  const names = (tier) => (answers[tier] || []).map((e) => e.split("|")[0]);
  const chips = (list, tier) => list.map((n) => `<span class="chip" style="--c:${TIER_COLORS[tier]}">${escapeHtml(n)}</span>`).join("");
  const common = names(1).slice(0, 3);
  const deep = [...names(6), ...names(5)].slice(0, 3);
  return `<div><span class="reveal-label">MOST COMMON</span>${chips(common, 1)}</div>` +
    (deep.length ? `<div><span class="reveal-label">DEEPEST CUTS</span>${chips(deep, 6)}</div>` : "");
}

function record(result) {
  const q = curPrompt(); // grab it before saving moves Daily to the next prompt
  stopTimer();
  answered = true;
  curResults().push(result);
  if (run.mode === "daily") saveDaily();
  if (run.mode === "infinite" && !result.tier) run.lives--;
  if (run.mode === "party") run.roundAnswers.push({ player: curPlayer().name, answer: result.answer, tier: result.tier });

  $("answer").disabled = true;
  $("form").querySelector("button").disabled = true;
  $("skip").hidden = true;
  $("next").hidden = false;
  refreshHud();

  // In Party, the deepest cuts stay hidden until everyone has answered
  if (run.mode !== "party") {
    $("reveal").innerHTML = revealHtml(q);
    $("reveal").hidden = false;
  }

  let label = "NEXT ›", fire = false;
  if (run.mode === "daily" && run.results.length >= PER_DAY) { label = "FIRE ›"; fire = true; }
  if (run.mode === "infinite" && run.lives <= 0) { label = "OUT OF LIVES — FIRE ›"; fire = true; }
  if (run.mode === "party") {
    label = run.turn < run.players.length - 1
      ? `PASS TO ${run.players[run.order[run.turn + 1]].name.toUpperCase()} ›`
      : "ROUND RESULTS ›";
  }
  $("next").textContent = label;
  $("next").classList.toggle("pink", fire);
  $("next").focus();
}

function accept(match) {
  suggestion = null;
  // Party: someone already used this answer this round
  if (run.mode === "party" && run.taken.has(match.name)) {
    $("flash").className = "result-flash miss";
    $("flash").textContent = `${match.name} was taken by ${run.taken.get(match.name)} — try another`;
    $("form").classList.remove("shake"); void $("form").offsetWidth; $("form").classList.add("shake");
    $("answer").select();
    return;
  }
  const q = curPrompt();
  const tier = TIERS[match.tier];
  const color = TIER_COLORS[match.tier];
  if (run.mode === "party") run.taken.set(match.name, curPlayer().name);
  $("flash").className = "result-flash hit";
  $("flash").style.setProperty("--c", color);
  $("flash").innerHTML = `<span class="tier-name">${tier.name.toUpperCase()}</span><span class="tier-pts">+${tier.points}</span><span class="tier-answer">${escapeHtml(match.name)}</span>`;
  revealTier(match.tier);
  record({ prompt: q.prompt, answer: match.name, tier: match.tier });
  Scene.burst(fighterIndex(), match.tier, tier.points, chargePct(), tier.name.toUpperCase());
}

function miss(message, label) {
  $("flash").className = "result-flash miss";
  $("flash").textContent = message;
  Scene.fizzle(fighterIndex(), label);
  record({ prompt: curPrompt().prompt, answer: null, tier: 0 });
}

function showSuggestion(match, input) {
  suggestion = { ...match, input };
  const alts = match.alts || [];
  $("flash").className = "result-flash suggest";
  $("flash").innerHTML =
    `<span>Did you mean <button type="button" class="suggest-yes" id="suggest-yes">${escapeHtml(match.name)}</button>?</span>` +
    (alts.length ? `<span class="suggest-alts">or ${alts.map((a, i) => `<button type="button" class="suggest-alt" data-i="${i}">${escapeHtml(a.name)}</button>`).join(" · ")}</span>` : "") +
    `<span class="suggest-hint">press Enter to accept · <button type="button" class="suggest-no" id="suggest-no">no</button></span>`;
  $("suggest-yes").addEventListener("click", () => accept(suggestion));
  $("flash").querySelectorAll(".suggest-alt").forEach((b) =>
    b.addEventListener("click", () => accept(alts[Number(b.dataset.i)])));
  $("suggest-no").addEventListener("click", () => {
    suggestion = null;
    $("flash").innerHTML = "";
    $("answer").select();
    $("answer").focus();
  });
}

$("answer").addEventListener("input", () => {
  if (suggestion && $("answer").value.trim() !== suggestion.input) {
    suggestion = null;
    $("flash").innerHTML = "";
    $("flash").className = "result-flash";
  }
});

$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (answered || !run) return;
  const input = $("answer").value.trim();
  if (!input) return;
  if (suggestion && input === suggestion.input) return accept(suggestion);

  const match = checkAnswer(curPrompt(), input);
  if (match && match.type === "exact") return accept(match);
  if (match && match.type === "suggest") return showSuggestion(match, input);

  $("flash").className = "result-flash miss";
  $("flash").textContent = notFoundMessage(curPrompt(), input);
  $("form").classList.remove("shake"); void $("form").offsetWidth; $("form").classList.add("shake");
  $("answer").select();
});

// For title prompts, say when it's a real anime that just doesn't fit
function notFoundMessage(q, input) {
  if (q.catalog) {
    const found = findInCatalog(input);
    if (found) return `${found.name}${found.year ? ` (${found.year})` : ""} is an anime we know — but it doesn't fit this prompt`;
  }
  return "not on the list — try another";
}

$("skip").addEventListener("click", () => {
  if (answered || !run) return;
  suggestion = null;
  miss(run.mode === "infinite" ? "skipped — lost a life" : "skipped — no power this round", "SKIP");
});

$("next").addEventListener("click", () => {
  if (run.mode === "daily") {
    return run.results.length >= PER_DAY ? fireRun() : beginTurn();
  }
  if (run.mode === "infinite") {
    if (run.lives <= 0) return fireRun();
    run.prompt = run.next();
    return beginTurn();
  }
  // party
  if (run.turn < run.players.length - 1) { run.turn++; return showPass(); }
  showRoundSummary();
});

// ---------- Fire ----------

// The HUD says CHARGING… while the orb builds, then the label pops and
// the numbers count up for as long as the beam is flying.
function prepareFireHud(label) {
  setNumber($("fire-km"), 0, " km");
  setNumber($("fire-power"), 0);
  $("fire-ko").textContent = "0";
  $("fire-label").textContent = "CHARGING…";
  $("fire-label").dataset.fire = label;
}

function onBeamFired(power, ms) {
  const el = $("fire-label");
  el.textContent = el.dataset.fire;
  if (canAnimate()) el.animate([{ transform: "scale(.6)", opacity: 0 }, { transform: "scale(1.12)", opacity: 1, offset: 0.6 }, { transform: "none" }],
    { duration: 420, easing: "cubic-bezier(.19, 1, .22, 1)" });
  animateNumber($("fire-km"), power * KM_PER_POWER, ms, " km");
  animateNumber($("fire-power"), power, ms);
}

function onKill(kills) { $("fire-ko").textContent = kills; }

function endFire() {
  $("play").classList.remove("firing");
  $("fire-hud").hidden = true;
}

function fireRun() {
  stopTimer();
  show("play");
  $("play").classList.add("firing");
  $("fire-hud").hidden = false;
  prepareFireHud("KAMEHAME-HA!");
  const power = powerOf(run.results);
  Scene.finale(0, run.results.map((r) => r.tier || 0), (kills) => {
    setTimeout(() => { endFire(); showResults(true, kills); }, 400);
  }, onKill, false, (ms) => onBeamFired(power, ms));
}

// ---------- Results (Daily + Infinite) ----------

function showResults(animate, kills) {
  show("results");
  const isDaily = run.mode === "daily";
  const results = run.results;
  const power = powerOf(results);
  const km = power * KM_PER_POWER;
  const mobs = kills != null ? kills : mobCount(results);

  let newBest = false;
  if (!isDaily && power > getBest()) { setBest(power); newBest = true; }

  $("complete-label").textContent = isDaily
    ? `CHARGE #${dayNum} COMPLETE`
    : `INFINITE · ${results.length} PROMPTS${newBest ? " · NEW BEST!" : ` · BEST ${getBest()}`}`;
  if (animate) {
    $("final-power").dataset.value = 0; $("final-km").dataset.value = 0;
    animateNumber($("final-power"), power, 1200);
    animateNumber($("final-km"), km, 1200, " km");
  } else {
    setNumber($("final-power"), power);
    setNumber($("final-km"), km, " km");
  }
  $("landmark").textContent = LANDMARKS.filter(([min]) => km >= min).pop()[1];
  const form = Scene.formOf(power / MAX_POWER);
  $("mobs-line").innerHTML = `Final form: <b style="color:${form.color}">${form.name}</b> · 💀 ${mobs} mob${mobs === 1 ? "" : "s"} vaporized`;

  const shown = results.slice(-30);
  $("chart").innerHTML = shown.map((r, i) => {
    const h = r.tier ? TIERS[r.tier].points : 3;
    const label = r.tier ? `${r.answer} · ${TIERS[r.tier].name}` : "No answer";
    return `<div class="bar-col" title="${escapeHtml(label)}">
      <div class="bar" style="--h:${h}%;--c:${TIER_COLORS[r.tier]};--d:${Math.min(i, 12) * 70}ms"></div>
      <span>${results.length - shown.length + i + 1}</span></div>`;
  }).join("");

  $("log").innerHTML = "";
  results.forEach((r) => {
    const li = document.createElement("li");
    li.style.setProperty("--c", TIER_COLORS[r.tier]);
    li.innerHTML = `<span class="log-q"></span><span class="log-a"></span><span class="log-t"></span>`;
    li.querySelector(".log-q").textContent = r.prompt;
    li.querySelector(".log-a").textContent = r.answer || "—";
    li.querySelector(".log-t").textContent = r.tier ? `${TIERS[r.tier].name} +${TIERS[r.tier].points}` : "No answer";
    $("log").appendChild(li);
  });

  $("scale-block").hidden = !isDaily;
  if (isDaily) {
    $("scale").innerHTML = SCALE.map(([lo, hi, name, text], i) => {
      const you = power >= lo && power <= hi ? "you" : "";
      return `<li class="${you}" style="--c:${TIER_COLORS[Math.min(6, i + 2)]}"><span class="range">${lo}–${hi}</span><span class="rank">${name}</span><span class="desc">${text}</span></li>`;
    }).join("");
  }

  $("again-row").hidden = isDaily;
  $("next-charge").hidden = !isDaily;
  $("results-menu").hidden = !isDaily;
  if (isDaily) startCountdown();
}

function shareText() {
  const results = run.results;
  const power = powerOf(results);
  const km = (power * KM_PER_POWER).toLocaleString();
  const url = location.href.split("?")[0];
  if (run.mode === "daily") {
    const emojis = results.map((r) => (r.tier ? TIERS[r.tier].emoji : "❌")).join("");
    return `KAMEHAME-HA! #${dayNum}\n${emojis}\n⚡ ${power} power · 💥 ${km} km · 💀 ${mobCount(results)} mobs\n${url}`;
  }
  return `KAMEHAME-HA! ∞ Infinite\n${results.length} prompts · ⚡ ${power} power · 💀 ${mobCount(results)} mobs\n${url}`;
}

function toast(msg) {
  $("toast").textContent = msg;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => ($("toast").textContent = ""), 2500);
}

$("copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(shareText()); toast("copied — paste it anywhere"); }
  catch (e) { toast(shareText()); }
});
$("share").addEventListener("click", async () => {
  if (navigator.share) { try { await navigator.share({ text: shareText() }); } catch (e) {} }
  else $("copy").click();
});

function startCountdown() {
  const tick = () => {
    const now = new Date();
    const midnight = new Date(now); midnight.setHours(24, 0, 0, 0);
    const s = Math.max(0, Math.floor((midnight - now) / 1000));
    const pad = (n) => String(n).padStart(2, "0");
    $("countdown").textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
    if (s === 0) location.reload();
  };
  tick();
  clearInterval(startCountdown.t);
  startCountdown.t = setInterval(tick, 1000);
}

// ---------- Party setup ----------

let partyRounds = 5;

function renderPlayers(names) {
  $("players").innerHTML = names.map((n, i) => `
    <div class="player-row">
      <span class="pnum">${i + 1}</span>
      <input type="text" maxlength="14" placeholder="Player ${i + 1}" value="${escapeHtml(n)}" aria-label="Player ${i + 1} name">
      ${names.length > 2 ? `<button class="remove" data-i="${i}" aria-label="Remove player ${i + 1}">×</button>` : ""}
    </div>`).join("");
  $("add-player").hidden = names.length >= 6;
  $("players").querySelectorAll(".remove").forEach((b) => b.addEventListener("click", () => {
    const list = readPlayers(true);
    list.splice(Number(b.dataset.i), 1);
    renderPlayers(list);
  }));
}

function readPlayers(raw) {
  return [...$("players").querySelectorAll("input")].map((inp, i) =>
    raw ? inp.value : (inp.value.trim() || `Player ${i + 1}`));
}

$("party-btn").addEventListener("click", () => {
  show("party-setup");
  renderPlayers(lastPartyNames || ["", ""]);
  $("players").querySelector("input").focus();
});
$("add-player").addEventListener("click", () => {
  const list = readPlayers(true);
  if (list.length < 6) list.push("");
  renderPlayers(list);
  const inputs = $("players").querySelectorAll("input");
  inputs[inputs.length - 1].focus();
});
$("rounds").querySelectorAll(".pick").forEach((b) => b.addEventListener("click", () => {
  partyRounds = Number(b.dataset.rounds);
  $("rounds").querySelectorAll(".pick").forEach((x) => x.classList.toggle("active", x === b));
}));
$("party-back").addEventListener("click", goMenu);
$("party-start").addEventListener("click", () => {
  const names = readPlayers(false);
  // make duplicate names distinguishable
  const seen = {};
  const unique = names.map((n) => (seen[n] = (seen[n] || 0) + 1) > 1 ? `${n} ${seen[n]}` : n);
  startParty(unique, partyRounds);
});
$("pass-ready").addEventListener("click", beginTurn);
$("round-next").addEventListener("click", () => {
  if (run.round >= run.rounds - 1) return partyFinale();
  run.round++;
  startRound();
});
$("party-again").addEventListener("click", () => startParty(run.names, run.rounds));
$("party-menu").addEventListener("click", goMenu);

// ---------- Other buttons ----------

$("daily-btn").addEventListener("click", startDaily);
$("infinite-btn").addEventListener("click", startInfinite);
$("again").addEventListener("click", startInfinite);
$("to-menu").addEventListener("click", goMenu);
$("results-menu").addEventListener("click", goMenu);
$("logo").addEventListener("click", goMenu);

$("tier-table").innerHTML = Object.entries(TIERS).map(([t, v]) =>
  `<tr style="--c:${TIER_COLORS[t]}"><td><span class="dot"></span>${v.name}</td><td>+${v.points}</td></tr>`
).join("");
function openHelp() { $("help").showModal(); }
$("help-btn").addEventListener("click", openHelp);
$("start-help").addEventListener("click", openHelp);
$("help-close").addEventListener("click", () => $("help").close());
$("help").addEventListener("click", (e) => { if (e.target === $("help")) $("help").close(); });

// ---------- Boot ----------

Scene.init($("scene"));
$("day-label").textContent = `CHARGE #${dayNum}`;
goMenu();

// Pull this player's full history from Supabase so nothing they've seen comes back
function setSync(text, ok) {
  const el = $("sync-status");
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("ok", !!ok);
}
setSync("syncing…");
DB.pullSeen(loadSeen())
  .then((remote) => {
    mergeRemoteSeen(remote);
    const n = loadSeen().length;
    setSync(`☁ ${n} prompt${n === 1 ? "" : "s"} played · none will repeat`, true);
  })
  .catch(() => setSync("offline — history saved on this device"));
