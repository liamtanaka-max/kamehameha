// =========================================================
//  GAME LOGIC (no page code here)
//  - checkAnswer: is the answer on the list, and what tier?
//  - questionsFor: today's 7 prompts (same for everyone)
// =========================================================

const PER_DAY = 7;
const MAX_POWER = PER_DAY * TIERS[6].points; // 700
const KM_PER_POWER = 10;
const LAUNCH_DATE = "2026-11-11"; // Charge #1

const TIER_COLORS = {
  0: "#4a5578",
  1: "#9aa4c4",
  2: "#48d6ff",
  3: "#5dff9b",
  4: "#b86bff",
  5: "#ffd23f",
  6: "#ff4f8b"
};

// Total power -> where the blast landed
const LANDMARKS = [
  [0, "It fizzled on the training grounds."],
  [500, "It cleared the mountains."],
  [1500, "It crossed the ocean."],
  [3000, "It punched through the clouds."],
  [4500, "It hit the Moon."],
  [6000, "It left the solar system."]
];

// Total power -> rank shown on the power scale
const SCALE = [
  [0, 150, "SPARK", "Barely a flicker. Warm hands."],
  [151, 300, "CHARGED", "You felt that one."],
  [301, 450, "OVERCHARGED", "The ground is starting to crack."],
  [451, 600, "PLANET BUSTER", "Visible from orbit."],
  [601, 700, "BEYOND", "The universe noticed."]
];

// "Howl's Moving Castle!" -> "howlsmovingcastle"
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/^the\s+/, "")
    .replace(/[^a-z0-9]/g, "");
}

// Number of single-letter edits between two strings (typo forgiveness)
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
        const allowed = target.length >= 9 ? 2 : target.length >= 5 ? 1 : 0;
        if (dist <= allowed && (!best || dist < best.dist)) {
          best = { name: names[0], tier: Number(tier), dist };
        }
      }
    }
  }
  return best;
}

function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function dayNumber(dateKey) {
  const ms = new Date(dateKey + "T00:00:00") - new Date(LAUNCH_DATE + "T00:00:00");
  return Math.max(1, Math.round(ms / 86400000) + 1);
}

// Seeded random so everyone gets the same order on the same day
function seededRandom(seed) {
  return function () {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

function questionsFor(dateKey) {
  const rand = seededRandom(Number(dateKey.replace(/-/g, "")));
  const order = QUESTIONS.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.slice(0, PER_DAY).map((i) => QUESTIONS[i]);
}

if (typeof module !== "undefined") {
  module.exports = { normalize, checkAnswer, questionsFor, dayNumber, todayKey };
}
