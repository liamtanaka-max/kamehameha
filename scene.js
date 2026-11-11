// =========================================================
//  PIXEL SCENE — background canvas
//  A night sky, mountains, and an (original) pixel fighter.
//  The energy orb in his hands grows with your power,
//  and at the end he fires the beam across the screen.
//
//  Public API:
//    Scene.init(canvas)
//    Scene.setCharge(pct, color)   pct 0..1
//    Scene.fire(pct, onDone)
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

  let canvas, ctx, W, H, px, horizon;
  let stars = [], ridgeFar = [], ridgeNear = [], rocks = [], sparks = [];
  let charge = 0, shown = 0, color = "#48d6ff";
  let firing = null; // { start, pct, done }
  let shake = 0;

  function handsPos(sprite) {
    for (let y = 0; y < sprite.length; y++) {
      const x = sprite[y].indexOf("H");
      if (x >= 0) return { x: x + 1, y: y + 1 };
    }
  }

  function layout() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    px = W < 600 ? 4 : 7;
    horizon = Math.round(H * (W < 600 ? 0.86 : 0.8));

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

  // Blocky mountain line
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

  function fighterOrigin(sprite) {
    const w = sprite[0].length * px, h = sprite.length * px;
    const x = Math.max(12, Math.min(W * 0.1, W - w - 12));
    return { x, y: horizon - h + px };
  }

  function drawSprite(sprite, ox, oy, fill) {
    ctx.fillStyle = fill;
    for (let y = 0; y < sprite.length; y++)
      for (let x = 0; x < sprite[y].length; x++)
        if (sprite[y][x] !== ".") ctx.fillRect(ox + x * px, oy + y * px, px, px);
  }

  function frame(t) {
    const time = t / 1000;
    shown += (charge - shown) * 0.06; // ease the orb size

    ctx.save();
    if (shake > 0) {
      ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
      shake *= 0.92;
      if (shake < 0.3) shake = 0;
    }

    // Sky
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#050a14");
    sky.addColorStop(1, "#121a33");
    ctx.fillStyle = sky;
    ctx.fillRect(-20, -20, W + 40, H + 40);

    // Stars (twinkle)
    for (const s of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(time * 0.8 + s.t));
      ctx.fillStyle = `rgba(200,220,255,${a})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.s, s.s);
    }

    // Mountains
    drawRidge(ridgeFar, "#0d1428");
    drawRidge(ridgeNear, "#0a1020");

    // Ground
    ctx.fillStyle = "#070b17";
    ctx.fillRect(-20, horizon, W + 40, H - horizon + 20);
    ctx.fillStyle = "#1a2445";
    ctx.fillRect(-20, horizon, W + 40, 2);
    ctx.fillStyle = "#111933";
    for (const r of rocks) ctx.fillRect(Math.round(r.x), Math.round(r.y), r.w, 2);

    const sprite = firing ? FIRE : CHARGE;
    const o = fighterOrigin(sprite);
    const hp = handsPos(sprite);
    const hx = o.x + hp.x * px, hy = o.y + hp.y * px;
    const power = firing ? firing.pct : shown;

    // Aura behind the fighter
    if (power > 0.02) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 10 + power * 40 + Math.sin(time * 12) * 4;
      ctx.globalAlpha = 0.35 + power * 0.5;
      drawSprite(sprite, o.x, o.y, color);
      ctx.restore();
    }
    // Faint rim light so the silhouette reads against the mountains
    drawSprite(sprite, o.x - 1, o.y - 1, "#2a3a6b");
    drawSprite(sprite, o.x, o.y, "#02040a");

    // Rising sparks when charged
    if (power > 0.05 && Math.random() < power * 0.8) {
      sparks.push({ x: o.x + Math.random() * sprite[0].length * px, y: horizon, v: 0.5 + Math.random() * 2 * power, life: 1 });
    }
    ctx.fillStyle = color;
    sparks = sparks.filter((s) => {
      s.y -= s.v; s.life -= 0.012;
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.fillRect(Math.round(s.x), Math.round(s.y), 2, 2);
      return s.life > 0;
    });
    ctx.globalAlpha = 1;

    if (firing) drawBeam(hx, hy, time);
    else drawOrb(hx, hy, power, time);

    ctx.restore();
    requestAnimationFrame(frame);
  }

  function drawRidge(pts, fill) {
    ctx.fillStyle = fill;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x, y] = pts[i];
      ctx.fillRect(x, y, pts[i + 1][0] - x + 1, horizon - y + 1);
    }
  }

  function glowCircle(x, y, r, core, edge) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "#ffffff");
    g.addColorStop(0.35, core);
    g.addColorStop(1, edge);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawOrb(x, y, power, time) {
    const r = 3 + power * (W < 600 ? 26 : 44) + Math.sin(time * 15) * (1 + power * 2);
    glowCircle(x, y, r * 2.2, hexA(color, 0.25), hexA(color, 0));
    glowCircle(x, y, r, color, hexA(color, 0));
  }

  function drawBeam(x, y, time) {
    const p = Math.min(1, (performance.now() - firing.start) / 1400);
    const ease = 1 - Math.pow(1 - p, 3);
    const reach = 40 + firing.pct * (W - x + 60);
    const len = reach * ease;
    const thick = 6 + firing.pct * (W < 600 ? 34 : 56) + Math.sin(time * 30) * 2;

    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 30;
    ctx.fillStyle = hexA(color, 0.55);
    ctx.fillRect(x, y - thick / 2, len, thick);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y - thick / 5, len, thick / 2.5);
    ctx.restore();
    // Head of the beam
    glowCircle(x + len, y, thick * 0.9, color, hexA(color, 0));
    glowCircle(x, y, thick * 0.8, color, hexA(color, 0));

    if (p < 1) shake = Math.max(shake, 2 + firing.pct * 8);
    if (p >= 1 && !firing.done) { firing.done = true; firing.onDone && firing.onDone(); }
  }

  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  return {
    init(c) {
      canvas = c; ctx = c.getContext("2d");
      layout();
      window.addEventListener("resize", layout);
      requestAnimationFrame(frame);
    },
    setCharge(pct, c) {
      if (c) color = c;
      if (pct > charge) shake = 3 + (pct - charge) * 20; // little jolt per answer
      charge = pct;
    },
    fire(pct, onDone, instant) {
      firing = { start: instant ? performance.now() - 5000 : performance.now(), pct, onDone, done: false };
      if (instant) firing.done = true;
    }
  };
})();
