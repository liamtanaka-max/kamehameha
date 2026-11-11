// =========================================================
//  KAMEHAME-HA! game logic
//  1. Pick today's 7 questions (same for everyone on the same day)
//  2. Check each answer against the tiered list
//  3. Add power, then "fire" at the end
// =========================================================

const PER_DAY = 7;
const MAX_POWER = PER_DAY * TIERS[6].points; // 700
const KM_PER_POWER = 10;

const LANDMARKS = [
  [0, "Still on the training grounds"],
  [500, "Over the mountains"],
  [1500, "Across the ocean"],
  [3000, "Through the clouds"],
  [4500, "It hit the Moon!"],
  [6000, "Beyond the solar system!!"]
];

// ---------- Matching ----------

// "Howl's Moving Castle!" -> "howlsmovingcastle"
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // é -> e
    .replace(/^the\s+/, "")
    .replace(/[^a-z0-9]/g, "");
}

// How many single-letter edits to turn a into b (for typo forgiveness)
function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

// Returns { name, tier } or null if the answer isn't on the list
function checkAnswer(question, input) {
  const guess = normalize(input);
  if (!guess) return null;

  let best = null;
  for (const [tier, list] of Object.entries(question.answers)) {
    for (const entry of list) {
      const names = entry.split("|");
      for (const name of names) {
        const target = normalize(name);
        const dist = editDistance(guess, target);
        // allow 1 typo for 5+ letters, 2 typos for 9+ letters
        const allowed = target.length >= 9 ? 2 : target.length >= 5 ? 1 : 0;
        if (dist <= allowed && (!best || dist < best.dist)) {
          best = { name: names[0], tier: Number(tier), dist };
        }
      }
    }
  }
  return best;
}

// ---------- Daily puzzle ----------

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Simple seeded random so everyone gets the same order on the same day
function seededRandom(seed) {
  return function () {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

function questionsFor(dateKey) {
  const seed = Number(dateKey.replace(/-/g, ""));
  const rand = seededRandom(seed);
  const order = QUESTIONS.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.slice(0, PER_DAY).map((i) => QUESTIONS[i]);
}

// ---------- Save progress (survives refresh) ----------

const SAVE_KEY = "kamehameha-progress";

function loadState(dateKey) {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (saved && saved.date === dateKey) return saved;
  } catch (e) { /* storage blocked — just start fresh */ }
  return { date: dateKey, results: [] };
}

function saveState() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ---------- UI ----------

const $ = (id) => document.getElementById(id);
const dateKey = todayKey();
const today = questionsFor(dateKey);
const state = loadState(dateKey);
let answered = false; // has the current question been finished?

function totalPower() {
  return state.results.reduce((sum, r) => sum + (r.tier ? TIERS[r.tier].points : 0), 0);
}

function updateCharge() {
  const power = totalPower();
  const pct = power / MAX_POWER;
  $("score").textContent = power;
  $("fill").style.width = pct * 100 + "%";
  const size = 20 + pct * 40; // orb grows from 20px to 60px
  $("orb").style.width = $("orb").style.height = size + "px";
  $("orb").style.boxShadow = `0 0 ${8 + pct * 30}px var(--accent)`;
}

function showQuestion() {
  const i = state.results.length;
  if (i >= PER_DAY) return showResults();

  answered = false;
  $("progress").textContent = `Question ${i + 1} / ${PER_DAY}`;
  $("prompt").textContent = today[i].prompt;
  $("answer").value = "";
  $("answer").disabled = false;
  $("form").querySelector("button").disabled = false;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("reveal").hidden = true;
  $("skip").hidden = false;
  $("next").hidden = true;
  $("answer").focus();
}

// After a question is done, show a few common answers and the deep cuts
function revealAnswers(question) {
  const first = (tier) => (question.answers[tier] || []).map((e) => e.split("|")[0]);
  const common = first(1).slice(0, 3).join(", ");
  const deep = [...first(6), ...first(5)].slice(0, 3).join(", ");
  $("reveal").innerHTML =
    `Most common: <b>${common}</b>` + (deep ? `<br>Deepest cuts: <b>${deep}</b>` : "");
  $("reveal").hidden = false;
}

function finishQuestion(result) {
  state.results.push(result);
  saveState();
  updateCharge();
  answered = true;
  $("answer").disabled = true;
  $("form").querySelector("button").disabled = true;
  $("skip").hidden = true;
  $("next").hidden = false;
  $("next").textContent = state.results.length >= PER_DAY ? "FIRE! 🔥" : "Next →";
  revealAnswers(today[state.results.length - 1]);
  $("next").focus();
}

$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (answered) return;
  const question = today[state.results.length];
  const input = $("answer").value.trim();
  const match = checkAnswer(question, input);

  if (!match) {
    $("feedback").textContent = `"${input}" isn't on our list — try another answer.`;
    $("feedback").className = "feedback bad";
    $("answer").select();
    return;
  }

  const tier = TIERS[match.tier];
  $("feedback").textContent = `${tier.emoji} ${match.name} — ${tier.name}! +${tier.points} power`;
  finishQuestion({ prompt: question.prompt, answer: match.name, tier: match.tier });
});

$("skip").addEventListener("click", () => {
  const question = today[state.results.length];
  $("feedback").textContent = "Skipped — no power this round.";
  finishQuestion({ prompt: question.prompt, answer: null, tier: 0 });
});

$("next").addEventListener("click", showQuestion);

function showResults() {
  $("play").hidden = true;
  $("results").hidden = false;

  const power = totalPower();
  const km = power * KM_PER_POWER;
  const landmark = LANDMARKS.filter(([min]) => km >= min).pop()[1];

  $("km").textContent = km.toLocaleString();
  $("landmark").textContent = landmark;
  // small delay so the beam animates outward
  setTimeout(() => { $("beam").style.width = Math.max(2, (power / MAX_POWER) * 100) + "%"; }, 100);

  $("summary").innerHTML = state.results.map((r) => {
    const label = r.tier ? `${TIERS[r.tier].emoji} ${r.answer} (${TIERS[r.tier].name})` : "❌ Skipped";
    return `<li><span class="q">${r.prompt}</span>${label}</li>`;
  }).join("");
}

$("share").addEventListener("click", async () => {
  const emojis = state.results.map((r) => (r.tier ? TIERS[r.tier].emoji : "❌")).join("");
  const km = (totalPower() * KM_PER_POWER).toLocaleString();
  const text = `KAMEHAME-HA! ${dateKey}\n${emojis}\n💥 ${km} km`;
  try {
    await navigator.clipboard.writeText(text);
    $("copied").textContent = "Copied! Paste it anywhere.";
  } catch (e) {
    $("copied").textContent = text; // fallback: show it so they can copy by hand
  }
});

updateCharge();
showQuestion();
