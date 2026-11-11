// =========================================================
//  PAGE / UI
//  Start screen -> 7 timed prompts -> fire -> results
// =========================================================

const $ = (id) => document.getElementById(id);
const dateKey = todayKey();
const today = questionsFor(dateKey);
const dayNum = dayNumber(dateKey);
const SAVE_KEY = "kamehameha-progress";

let state = loadState();
let answered = false;
let suggestion = null; // { name, tier, input } while "Did you mean...?" is showing
let timer = null;      // { end, id }

// ---------- Save progress (survives refresh) ----------

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (saved && saved.date === dateKey) return saved;
  } catch (e) { /* storage blocked — start fresh */ }
  return { date: dateKey, results: [] };
}

function saveState() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ---------- Helpers ----------

function totalPower() {
  return state.results.reduce((sum, r) => sum + (r.tier ? TIERS[r.tier].points : 0), 0);
}

function bestTier() {
  return state.results.reduce((m, r) => Math.max(m, r.tier || 0), 0);
}

function show(id) {
  for (const s of ["start", "play", "results"]) $(s).hidden = s !== id;
  document.body.dataset.screen = id;
}

function animateNumber(el, to, ms = 900, suffix = "") {
  const from = Number(el.dataset.value || 0);
  const start = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - start) / ms);
    const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
    el.textContent = v.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  el.dataset.value = to;
  requestAnimationFrame(step);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderPips() {
  const current = state.results.length;
  $("pips").innerHTML = Array.from({ length: PER_DAY }, (_, i) => {
    const r = state.results[i];
    const cls = r ? (r.tier ? "done" : "skip") : i === current ? "now" : "";
    const style = r && r.tier ? `style="--c:${TIER_COLORS[r.tier]}"` : "";
    return `<span class="pip ${cls}" ${style}></span>`;
  }).join("");
}

function refreshHud() {
  animateNumber($("power"), totalPower(), 600);
  renderPips();
}

// ---------- Timer ----------

function startTimer() {
  stopTimer();
  const end = performance.now() + TIME_LIMIT * 1000;
  const tick = () => {
    const left = Math.max(0, end - performance.now());
    const pct = left / (TIME_LIMIT * 1000);
    $("timer-fill").style.width = pct * 100 + "%";
    $("timer-num").textContent = Math.ceil(left / 1000);
    const urgent = left <= 5000;
    $("timer-fill").classList.toggle("urgent", urgent);
    $("timer-num").classList.toggle("urgent", urgent);
    if (left <= 0) timeUp();
  };
  timer = { id: setInterval(tick, 100) };
  tick();
}

function stopTimer() {
  if (timer) clearInterval(timer.id);
  timer = null;
}

function timeUp() {
  stopTimer();
  if (answered) return;
  clearSuggestion();
  $("flash").className = "result-flash miss";
  $("flash").textContent = "TIME'S UP — no power this round";
  Scene.fizzle("TIME");
  finishQuestion({ prompt: today[state.results.length].prompt, answer: null, tier: 0 });
}

// ---------- Play ----------

function showQuestion() {
  const i = state.results.length;
  if (i >= PER_DAY) return fire();

  answered = false;
  clearSuggestion();
  show("play");
  $("prompt-label").textContent = `PROMPT ${i + 1} / ${PER_DAY}`;
  $("prompt").textContent = today[i].prompt;
  $("prompt").classList.remove("enter"); void $("prompt").offsetWidth; $("prompt").classList.add("enter");
  $("answer").value = "";
  $("answer").disabled = false;
  $("form").querySelector("button").disabled = false;
  $("flash").innerHTML = "";
  $("flash").className = "result-flash";
  $("reveal").hidden = true;
  $("skip").hidden = false;
  $("next").hidden = true;
  $("timer-fill").parentElement.classList.remove("stopped");
  refreshHud();
  startTimer();
  $("answer").focus();
}

function revealAnswers(question) {
  const names = (tier) => (question.answers[tier] || []).map((e) => e.split("|")[0]);
  const common = names(1).slice(0, 3);
  const deep = [...names(6), ...names(5)].slice(0, 3);
  const chips = (list, tier) => list.map((n) => `<span class="chip" style="--c:${TIER_COLORS[tier]}">${escapeHtml(n)}</span>`).join("");
  $("reveal").innerHTML =
    `<div><span class="reveal-label">MOST COMMON</span>${chips(common, 1)}</div>` +
    (deep.length ? `<div><span class="reveal-label">DEEPEST CUTS</span>${chips(deep, 6)}</div>` : "");
  $("reveal").hidden = false;
}

function finishQuestion(result) {
  stopTimer();
  $("timer-fill").parentElement.classList.add("stopped");
  state.results.push(result);
  saveState();
  refreshHud();
  answered = true;
  $("answer").disabled = true;
  $("form").querySelector("button").disabled = true;
  $("skip").hidden = true;
  $("next").hidden = false;
  $("next").textContent = state.results.length >= PER_DAY ? "FIRE! ›" : "NEXT ›";
  $("next").classList.toggle("pink", state.results.length >= PER_DAY);
  revealAnswers(today[state.results.length - 1]);
  $("next").focus();
}

function accept(match) {
  clearSuggestion();
  const question = today[state.results.length];
  const tier = TIERS[match.tier];
  const color = TIER_COLORS[match.tier];
  $("flash").className = "result-flash hit";
  $("flash").style.setProperty("--c", color);
  $("flash").innerHTML = `<span class="tier-name">${tier.name.toUpperCase()}</span><span class="tier-pts">+${tier.points}</span><span class="tier-answer">${escapeHtml(match.name)}</span>`;
  finishQuestion({ prompt: question.prompt, answer: match.name, tier: match.tier });
  // The fighter charges up — bigger the rarer the answer
  Scene.burst(match.tier, tier.points, totalPower() / MAX_POWER, color, tier.name.toUpperCase(), TIER_COLORS[Math.max(2, bestTier())]);
}

// ---------- "Did you mean...?" ----------

function showSuggestion(match, input) {
  suggestion = { ...match, input };
  $("flash").className = "result-flash suggest";
  $("flash").innerHTML =
    `<span>Did you mean <button type="button" class="suggest-yes" id="suggest-yes">${escapeHtml(match.name)}</button>?</span>` +
    `<span class="suggest-hint">press Enter to accept · <button type="button" class="suggest-no" id="suggest-no">no</button></span>`;
  $("suggest-yes").addEventListener("click", () => accept(suggestion));
  $("suggest-no").addEventListener("click", () => {
    clearSuggestion();
    $("flash").innerHTML = "";
    $("answer").select();
    $("answer").focus();
  });
}

function clearSuggestion() {
  suggestion = null;
}

// Typing something new cancels the suggestion
$("answer").addEventListener("input", () => {
  if (suggestion && $("answer").value.trim() !== suggestion.input) {
    clearSuggestion();
    $("flash").innerHTML = "";
    $("flash").className = "result-flash";
  }
});

$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (answered) return;
  const input = $("answer").value.trim();
  if (!input) return;

  // Second Enter on the same text = "yes, that's what I meant"
  if (suggestion && input === suggestion.input) return accept(suggestion);

  const match = checkAnswer(today[state.results.length], input);
  if (match && match.type === "exact") return accept(match);
  if (match && match.type === "suggest") return showSuggestion(match, input);

  $("flash").className = "result-flash miss";
  $("flash").textContent = "not on the list — try another";
  $("form").classList.remove("shake"); void $("form").offsetWidth; $("form").classList.add("shake");
  $("answer").select();
});

$("skip").addEventListener("click", () => {
  if (answered) return;
  clearSuggestion();
  $("flash").className = "result-flash miss";
  $("flash").textContent = "skipped — no power this round";
  Scene.fizzle("SKIP");
  finishQuestion({ prompt: today[state.results.length].prompt, answer: null, tier: 0 });
});

$("next").addEventListener("click", showQuestion);

// ---------- Fire + results ----------

function fire() {
  stopTimer();
  show("play");
  $("play").classList.add("firing");
  const power = totalPower();
  $("fire-hud").hidden = false;
  $("fire-km").dataset.value = 0;
  $("fire-power").dataset.value = 0;
  animateNumber($("fire-km"), power * KM_PER_POWER, 1600, " km");
  animateNumber($("fire-power"), power, 1600);
  Scene.fire(power / MAX_POWER, () => {
    setTimeout(() => {
      $("play").classList.remove("firing");
      $("fire-hud").hidden = true;
      showResults(true);
    }, 900);
  });
}

function showResults(animate) {
  show("results");
  const power = totalPower();
  const km = power * KM_PER_POWER;

  $("complete-label").textContent = `CHARGE #${dayNum} COMPLETE`;
  if (animate) {
    animateNumber($("final-power"), power, 1200);
    animateNumber($("final-km"), km, 1200, " km");
  } else {
    $("final-power").textContent = power;
    $("final-km").textContent = km.toLocaleString() + " km";
  }
  $("landmark").textContent = LANDMARKS.filter(([min]) => km >= min).pop()[1];

  $("chart").innerHTML = state.results.map((r, i) => {
    const h = r.tier ? TIERS[r.tier].points : 3;
    const label = r.tier ? `${r.answer} · ${TIERS[r.tier].name}` : "No answer";
    return `<div class="bar-col" title="${escapeHtml(label)}">
      <div class="bar" style="--h:${h}%;--c:${TIER_COLORS[r.tier]};--d:${i * 80}ms"></div>
      <span>${i + 1}</span></div>`;
  }).join("");

  $("log").innerHTML = "";
  state.results.forEach((r) => {
    const li = document.createElement("li");
    li.style.setProperty("--c", TIER_COLORS[r.tier]);
    li.innerHTML = `<span class="log-q"></span><span class="log-a"></span><span class="log-t"></span>`;
    li.querySelector(".log-q").textContent = r.prompt;
    li.querySelector(".log-a").textContent = r.answer || "—";
    li.querySelector(".log-t").textContent = r.tier ? `${TIERS[r.tier].name} +${TIERS[r.tier].points}` : "No answer";
    $("log").appendChild(li);
  });

  $("scale").innerHTML = SCALE.map(([lo, hi, name, text], i) => {
    const you = power >= lo && power <= hi ? "you" : "";
    const c = TIER_COLORS[Math.min(6, i + 2)];
    return `<li class="${you}" style="--c:${c}"><span class="range">${lo}–${hi}</span><span class="rank">${name}</span><span class="desc">${text}</span></li>`;
  }).join("");

  startCountdown();
}

function shareText() {
  const emojis = state.results.map((r) => (r.tier ? TIERS[r.tier].emoji : "❌")).join("");
  const km = (totalPower() * KM_PER_POWER).toLocaleString();
  return `KAMEHAME-HA! #${dayNum}\n${emojis}\n⚡ ${totalPower()} power · 💥 ${km} km\n${location.href.split("?")[0]}`;
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
  if (navigator.share) {
    try { await navigator.share({ text: shareText() }); } catch (e) {}
  } else {
    $("copy").click();
  }
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

// ---------- Help dialog ----------

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
const startColor = TIER_COLORS[Math.max(2, bestTier())];

if (state.results.length >= PER_DAY) {
  Scene.setCharge(totalPower() / MAX_POWER, startColor);
  Scene.fire(totalPower() / MAX_POWER, null, true);
  showResults(false);
} else {
  if (state.results.length > 0) $("start-btn").textContent = "RESUME CHARGE";
  Scene.setCharge(totalPower() / MAX_POWER, startColor);
  show("start");
}

$("start-btn").addEventListener("click", showQuestion);
