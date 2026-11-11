// =========================================================
//  PIXEL SCENE — background canvas
//  Night sky, mountains, and an (original) pixel fighter.
//
//  Every answer triggers a charge-up sized by how niche it was:
//    Common   -> small pulse, gauge ticks up a little
//    Deep Cut -> energy pillar, shockwave, big shake, gauge jumps
//  At the end he fires the beam across the screen.
//
//  Public API:
//    Scene.init(canvas)
//    Scene.setCharge(pct, color)      set total power (0..1) silently
//    Scene.burst(tier, points, pct, color)  play a charge-up for one answer
//    Scene.fizzle(label)              play a dud (skip / time out)
//    Scene.fire(pct, onDone, instant)
// =========================================================

const Scene = (() => {
  // Fighter sprites. "#" = body, "H" = hands (where the orb sits)
  const CHARGE = [
    "........####........",
    ".......######.......",
    ".......######.......",
    ".......#####........",
    "........###.........",
    "......#######.......",
    ".....#########......",
    "....###.#####.##....",
    "...###..#####..##...",
    "..###...#####...#...",
    ".HH#....#####.......",
    ".HH.....#####.......",
    "........######......",
    ".......###..###.....",
    "......###....###....",
    ".....###......###...",
    "....###........###..",
    "...###..........###.",
    "..####..........####"
  ];
  const FIRE = [
    "........####........",
    ".......######.......",
    ".......######.......",
    "........#####.......",
    ".........###........",
    ".......#######......",
    "......##########HH..",
    "......#########.HH..",
    ".......#####........",
    ".......#####........",
    ".......#####........",
    ".......#####........",
    ".......######.......",
    "......###..###......",
    ".....###....###.....",
    "....###......###....",
    "...###........###...",
    "..###..........###..",
    ".####..........####."
  ];
  const GAUGE_SEGMENTS = 14; // 700 power / 50 per segment

  let canvas, ctx, W, H, px, horizon, small;
  let stars = [], ridgeFar = [], ridgeNear = [], rocks = [], sparks = [];
  let charge = 0, shown = 0, gauge = 0, color = "#48d6ff";
  let bursts = [], floaters = [], rings = [];
  let dimUntil = 0;
  let firing = null;
  let shake = 0;

  // ---------- Layout ----------

  function layout() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    small = W < 600;
    px = small ? 4 : 7;
    horizon = Math.round(H * (small ? 0.86 : 0.8));

    stars = Array.from({ length: Math.round(W * H / 6000) }, () => ({
      x: Math.random() * W, y: Math.random() * horizon * 0.85,
      s: Math.random() < 0.15 ? 2 : 1, t: Math.random() * 6
    }));
    ridgeFar = makeRidge(0.22, 14);
    ridgeNear = makeRidge(0.12, 8);
    rocks = Array.from({ length: Math.round(W / 40) }, () => ({
      x: Math.random() * W, y: horizon + 6 + Math.random() * (H - horizon - 10),
      w: (1 + Math.floor(Math.random() * 3)) * 2
    }));
  }

  function makeRidge(heightRatio, step) {
    const pts = [];
    let y = horizon - H * heightRatio * 0.5;
    for (let x = 0; x <= W + step; x += step) {
      y += (Math.random() - 0.5) * step * 1.6;
      y = Math.max(horizon - H * heightRatio, Math.min(horizon - 4, y));
      pts.push([x, Math.round(y / 2) * 2]);
    }
    return pts;
  }

  // ---------- Helpers ----------

  function handsPos(sprite) {
    for (let y = 0; y < sprite.length; y++) {
      const x = sprite[y].indexOf("H");
      if (x >= 0) return { x: x + 1, y: y + 1 };
    }
  }

  function fighterOrigin(sprite) {
    const w = sprite[0].length * px, h = sprite.length * px;
    const x = Math.max(12, Math.min(W * 0.1, W - w - 12));
    return { x, y: horizon - h + px, w, h };
  }

  function drawSprite(sprite, ox, oy, fill) {
    ctx.fillStyle = fill;
    for (let y = 0; y < sprite.length; y++)
      for (let x = 0; x < sprite[y].length; x++)
        if (sprite[y][x] !== ".") ctx.fillRect(ox + x * px, oy + y * px, px, px);
  }

  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function glowCircle(x, y, r, core, edge) {
    if (!(r > 0)) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "#ffffff");
    g.addColorStop(0.35, core);
    g.addColorStop(1, edge);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function segColor(i) {
    const t = i / (GAUGE_SEGMENTS - 1);
    if (t < 0.45) return "#48d6ff";
    if (t < 0.75) return "#ffd23f";
    return "#ff4f8b";
  }

  // ---------- Main loop ----------

  // Keep animating even if one frame throws, so the game can never freeze
  function frame() {
    try { draw(); }
    catch (e) { console.warn("scene frame error", e); ctx.restore(); }
    // A finished beam must always report back, even if drawing failed
    if (firing && !firing.done && performance.now() - firing.start > 1700) {
      firing.done = true;
      firing.onDone && firing.onDone();
    }
    requestAnimationFrame(frame);
  }

  function draw() {
    const now = performance.now();
    const time = now / 1000;
    shown += (charge - shown) * 0.05;
    gauge += (charge - gauge) * 0.04; // gauge climbs visibly after each answer

    ctx.save();
    if (shake > 0) {
      ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
      shake *= 0.9;
      if (shake < 0.3) shake = 0;
    }

    drawBackground(time);

    const sprite = firing ? FIRE : CHARGE;
    const o = fighterOrigin(sprite);
    const hp = handsPos(sprite);
    const hx = o.x + hp.x * px, hy = o.y + hp.y * px;
    const power = firing ? firing.pct : shown;
    const dimmed = now < dimUntil;

    // Active charge-up bursts
    let swell = 0, flare = 0;
    bursts = bursts.filter((b) => {
      const p = (now - b.start) / b.dur;
      if (p >= 1) return false;
      const wave = Math.sin(Math.PI * p);
      swell = Math.max(swell, wave * b.tier * (small ? 4 : 7));
      flare = Math.max(flare, wave * b.tier / 6);
      if (b.tier >= 3) drawPillar(o, b, p);
      return true;
    });

    // Aura behind the fighter (stronger during a burst)
    const aura = Math.min(1, power + flare * 0.8);
    if (aura > 0.02 && !dimmed) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 10 + aura * 50 + Math.sin(time * 12) * 4;
      ctx.globalAlpha = 0.3 + aura * 0.6;
      drawSprite(sprite, o.x, o.y, color);
      ctx.restore();
    }
    drawSprite(sprite, o.x - 1, o.y - 1, "#2a3a6b");
    drawSprite(sprite, o.x, o.y, "#02040a");

    // Ambient sparks rise from the ground when charged
    if (!dimmed && power > 0.05 && Math.random() < power * 0.8) {
      sparks.push(spark(o, 0.5 + Math.random() * 2 * power, color));
    }
    drawSparks();
    drawRings(hx, hy, now);

    if (firing) drawBeam(hx, hy, time);
    else drawOrb(hx, hy, power, swell, time, dimmed);

    if (!firing) drawGauge(o, time);
    drawFloaters(o, now);

    ctx.restore();
  }

  function drawBackground(time) {
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#050a14");
    sky.addColorStop(1, "#121a33");
    ctx.fillStyle = sky;
    ctx.fillRect(-20, -20, W + 40, H + 40);

    for (const s of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(time * 0.8 + s.t));
      ctx.fillStyle = `rgba(200,220,255,${a})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.s, s.s);
    }

    drawRidge(ridgeFar, "#0d1428");
    drawRidge(ridgeNear, "#0a1020");

    ctx.fillStyle = "#070b17";
    ctx.fillRect(-20, horizon, W + 40, H - horizon + 20);
    ctx.fillStyle = "#1a2445";
    ctx.fillRect(-20, horizon, W + 40, 2);
    ctx.fillStyle = "#111933";
    for (const r of rocks) ctx.fillRect(Math.round(r.x), Math.round(r.y), r.w, 2);
  }

  function drawRidge(pts, fill) {
    ctx.fillStyle = fill;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x, y] = pts[i];
      ctx.fillRect(x, y, pts[i + 1][0] - x + 1, horizon - y + 1);
    }
  }

  function spark(o, v, c) {
    return { x: o.x + Math.random() * o.w, y: horizon, v, life: 1, c };
  }

  function drawSparks() {
    sparks = sparks.filter((s) => {
      s.y -= s.v; s.life -= 0.012;
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.fillStyle = s.c;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), 2, 2);
      return s.life > 0;
    });
    ctx.globalAlpha = 1;
  }

  // Column of light shooting up from the fighter (Rare and above)
  function drawPillar(o, b, p) {
    // On phones the text sits above the fighter, so keep the pillar shorter
    const maxH = horizon * (small ? 0.12 + (b.tier - 3) * 0.08 : 0.25 + (b.tier - 3) * 0.22);
    const h = maxH * Math.min(1, p * 3);
    const w = o.w * (0.4 + b.tier * 0.12) * (1 - p * 0.5);
    const cx = o.x + o.w / 2;
    ctx.save();
    ctx.globalAlpha = 0.55 * (1 - p);
    ctx.shadowColor = b.color;
    ctx.shadowBlur = 30;
    ctx.fillStyle = b.color;
    ctx.fillRect(cx - w / 2, horizon - h, w, h);
    ctx.globalAlpha = 0.8 * (1 - p);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(cx - w / 8, horizon - h, w / 4, h);
    ctx.restore();
  }

  function drawRings(x, y, now) {
    rings = rings.filter((r) => {
      const p = (now - r.start) / r.dur;
      if (p >= 1) return false;
      if (p < 0) return true; // delayed ring hasn't started yet
      ctx.save();
      ctx.globalAlpha = 1 - p;
      ctx.strokeStyle = r.color;
      ctx.lineWidth = 2 + r.tier;
      ctx.shadowColor = r.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(x, y, r.max * (1 - Math.pow(1 - p, 3)), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      return true;
    });
  }

  function drawOrb(x, y, power, swell, time, dimmed) {
    const base = 3 + power * (small ? 26 : 44);
    const r = base + swell + Math.sin(time * 15) * (1 + power * 2);
    const c = dimmed ? "#4a5578" : color;
    glowCircle(x, y, r * 2.2, hexA(c, 0.25), hexA(c, 0));
    glowCircle(x, y, r, c, hexA(c, 0));
  }

  // Segmented power gauge standing next to the fighter
  function drawGauge(o, time) {
    const segH = small ? 6 : 9, gap = 2;
    const w = small ? 10 : 14;
    const x = o.x + o.w + (small ? 8 : 14);
    const filled = gauge * GAUGE_SEGMENTS;
    for (let i = 0; i < GAUGE_SEGMENTS; i++) {
      const y = horizon - (i + 1) * (segH + gap);
      ctx.fillStyle = "#121a33";
      ctx.fillRect(x, y, w, segH);
      const f = Math.max(0, Math.min(1, filled - i));
      if (f > 0) {
        const c = segColor(i);
        ctx.save();
        ctx.shadowColor = c;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.6 + 0.4 * f;
        ctx.fillStyle = c;
        ctx.fillRect(x, y + segH * (1 - f), w, segH * f);
        ctx.restore();
      }
    }
  }

  function drawFloaters(o, now) {
    floaters = floaters.filter((f) => {
      const p = (now - f.start) / f.dur;
      if (p >= 1) return false;
      const y = o.y - 14 - p * 70;
      ctx.save();
      ctx.globalAlpha = p < 0.15 ? p / 0.15 : 1 - Math.max(0, (p - 0.6) / 0.4);
      ctx.textAlign = "left";
      ctx.fillStyle = f.color;
      ctx.shadowColor = f.color;
      ctx.shadowBlur = 10;
      ctx.font = `${f.size}px "Press Start 2P", monospace`;
      ctx.fillText(f.text, o.x, y);
      if (f.sub) {
        ctx.font = `${Math.round(f.size * 0.55)}px "Press Start 2P", monospace`;
        ctx.fillText(f.sub, o.x, y + f.size * 0.9);
      }
      ctx.restore();
      return true;
    });
  }

  function drawBeam(x, y, time) {
    const p = Math.min(1, (performance.now() - firing.start) / 1600);
    const ease = 1 - Math.pow(1 - p, 3);
    const reach = 40 + firing.pct * (W - x + 60);
    const len = reach * ease;
    const thick = 6 + firing.pct * (small ? 34 : 56) + Math.sin(time * 30) * 2;

    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 30;
    ctx.fillStyle = hexA(color, 0.55);
    ctx.fillRect(x, y - thick / 2, len, thick);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y - thick / 5, len, thick / 2.5);
    ctx.restore();
    glowCircle(x + len, y, thick * 0.9, color, hexA(color, 0));
    glowCircle(x, y, thick * 0.8, color, hexA(color, 0));

    if (p < 1) shake = Math.max(shake, 2 + firing.pct * 8);
    if (p >= 1 && !firing.done) { firing.done = true; firing.onDone && firing.onDone(); }
  }

  // ---------- Public ----------

  return {
    init(c) {
      canvas = c; ctx = c.getContext("2d");
      layout();
      window.addEventListener("resize", layout);
      requestAnimationFrame(frame);
    },

    setCharge(pct, c) {
      if (c) color = c;
      charge = pct;
    },

    // One answer's charge-up. Bigger tier = bigger everything.
    burst(tier, points, pct, c, label, auraColor) {
      const now = performance.now();
      color = auraColor || c; // aura keeps your best tier's color
      charge = pct;
      bursts.push({ start: now, tier, color: c, dur: 500 + tier * 280 });
      rings.push({ start: now, tier, color: c, dur: 500 + tier * 150, max: 18 + tier * (small ? 18 : 32) });
      if (tier >= 5) rings.push({ start: now + 180, tier, color: "#ffffff", dur: 700, max: 30 + tier * 24 });
      shake = Math.max(shake, tier * tier * 0.6);
      const o = fighterOrigin(CHARGE);
      for (let i = 0; i < tier * tier * 4; i++) sparks.push(spark(o, 1 + Math.random() * tier, c));
      floaters.push({ start: now, dur: 1600, text: `+${points}`, sub: label, color: c, size: small ? 12 + tier * 2 : 14 + tier * 3 });
    },

    fizzle(label) {
      const now = performance.now();
      dimUntil = now + 900;
      floaters.push({ start: now, dur: 1400, text: "+0", sub: label, color: "#7d88ad", size: small ? 12 : 14 });
      const o = fighterOrigin(CHARGE);
      for (let i = 0; i < 10; i++) sparks.push(spark(o, 0.4 + Math.random(), "#4a5578"));
    },

    fire(pct, onDone, instant) {
      bursts = []; floaters = []; rings = [];
      firing = { start: instant ? performance.now() - 5000 : performance.now(), pct, onDone, done: !!instant };
    }
  };
})();
