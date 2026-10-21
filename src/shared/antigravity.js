/* SHARED: ANTIGRAVITY - zero-g dust field, cursor repulsion, levitating cards, shockwave clicks, gravity toggle */
(function () {
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var cv = document.createElement('canvas'); cv.id = 'ag-canvas'; document.body.appendChild(cv);
  var ctx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2), W, H;
  var mouse = { x: -9999, y: -9999 }, gravity = false, scrollV = 0, lastY = scrollY;
  var P = [], rings = [], shooters = [], T = 0, N = innerWidth < 768 ? 60 : 140;
  var COL = ['#ffffff', '#a5f3fc', '#bfdbfe', '#60a5fa'];

  function mk(x, y, burst) {
    var cross = !burst && Math.random() < .12;
    return { x: x, y: y, cross: cross || (burst && Math.random() < .4),
      r: cross ? Math.random() * 3 + 3.5 : Math.random() * 1.4 + .7,
      c: Math.random() < .12 ? '#00ff87' : COL[Math.floor(Math.random() * 4)],
      ph: Math.random() * 6.28, sp: Math.random() * 1.8 + .8, rot: 0, vr: (Math.random() - .5) * .02,
      vx: burst ? (Math.random() - .5) * 8 : (Math.random() - .5) * .25,
      vy: burst ? -Math.random() * 6 - 1.5 : -(Math.random() * .3 + .05), life: burst ? 1 : null };
  }
  function star(r) {   /* 4-point sparkle path */
    ctx.beginPath(); ctx.moveTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.quadraticCurveTo(0, 0, 0, r);
    ctx.quadraticCurveTo(0, 0, -r, 0); ctx.quadraticCurveTo(0, 0, 0, -r); ctx.fill();
  }
  function resize() {
    W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener('resize', resize); resize();
  for (var i = 0; i < N; i++) P.push(mk(Math.random() * W, Math.random() * H));

  addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  addEventListener('mouseout', function () { mouse.x = mouse.y = -9999; });
  addEventListener('mousedown', function (e) {
    for (var k = 0; k < 22; k++) P.push(mk(e.clientX, e.clientY, true));
    rings.push({ x: e.clientX, y: e.clientY, r: 4, a: .8 });
    P.forEach(function (p) { var dx = p.x - e.clientX, dy = p.y - e.clientY, d = Math.hypot(dx, dy) || 1;
      if (d < 260) { p.vx += dx / d * 5; p.vy += dy / d * 5; } });   /* shockwave */
  });
  addEventListener('scroll', function () { scrollV += (scrollY - lastY) * .15; lastY = scrollY; }, { passive: true });

  /* levitating cards: float, rise-in on scroll, drift away from cursor */
  var els = [].slice.call(document.querySelectorAll('.gsap-tilt-card,.event-card,.gallery-item'));
  els.forEach(function (el, i) {
    el.classList.add('ag-float', 'ag-pre');
    el.style.setProperty('--d', (i % 7) * -.8 + 's'); el.style.setProperty('--amp', (6 + i % 4 * 3) + 'px');
    el._o = { x: 0, y: 0 };
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { e.target._vis = e.isIntersecting;
      if (e.isIntersecting) { e.target.classList.remove('ag-pre'); e.target.classList.add('ag-in'); } });
  }, { threshold: .1 });
  els.forEach(function (el) { io.observe(el); });

  /* gravity HUD toggle */
  var hud = document.createElement('button'); hud.id = 'ag-hud'; hud.setAttribute('aria-label', 'Toggle gravity');
  function label() { hud.innerHTML = '<i></i>' + (gravity ? '$ gravity --restore <b>&#9608;</b>' : '$ gravity --set 0 <b>&#9608;</b>'); }
  hud.onclick = function (e) { e.stopPropagation(); gravity = !gravity; document.body.classList.toggle('ag-grounded', gravity); label(); };
  label(); document.body.appendChild(hud);

  function tick() {
    ctx.clearRect(0, 0, W, H); scrollV *= .9;
    for (var i = P.length - 1; i >= 0; i--) {
      var p = P[i], dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 22500) { var d = Math.sqrt(d2) || 1, f = (150 - d) / 150; p.vx += dx / d * f * 1.2; p.vy += dy / d * f * 1.2; }
      p.vy += gravity ? .12 : -.004; p.vy -= scrollV * .02; p.vx *= .985; p.vy *= .985;
      p.x += p.vx; p.y += p.vy;
      if (gravity && p.y > H - 4) { p.y = H - 4; p.vy *= -.3; p.vx *= .9; }
      else { if (p.y < -30) p.y = H + 30; if (p.y > H + 30) p.y = -30; }
      if (p.x < -80) p.x = W + 60; if (p.x > W + 80) p.x = -60;
      if (p.life !== null) { p.life -= .005; if (p.life <= 0) { P.splice(i, 1); continue; } }
      var tw = .35 + .65 * Math.abs(Math.sin(T * p.sp + p.ph));   /* twinkle */
      ctx.globalAlpha = (p.life === null ? 1 : p.life) * tw; ctx.fillStyle = p.c;
      ctx.shadowBlur = p.cross ? 12 : 7; ctx.shadowColor = p.c;
      if (p.cross) { p.rot += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); star(p.r * (.8 + tw * .5)); ctx.restore(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (.7 + tw * .5), 0, 6.2832); ctx.fill(); }
    }
    T += .016;
    if (Math.random() < .006 && shooters.length < 2) shooters.push({ x: Math.random() * W * 1.1, y: -20, vx: -9 - Math.random() * 5, vy: 5 + Math.random() * 3, a: 1 });
    for (var q = shooters.length - 1; q >= 0; q--) {      /* shooting stars */
      var m = shooters[q]; m.x += m.vx; m.y += m.vy; m.a -= .012;
      if (m.a <= 0 || m.y > H + 40) { shooters.splice(q, 1); continue; }
      var gr = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 9, m.y - m.vy * 9);
      gr.addColorStop(0, 'rgba(255,255,255,' + m.a + ')'); gr.addColorStop(1, 'rgba(96,165,250,0)');
      ctx.globalAlpha = 1; ctx.shadowBlur = 10; ctx.shadowColor = '#60a5fa'; ctx.strokeStyle = gr; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 9, m.y - m.vy * 9); ctx.stroke();
    }
    ctx.shadowBlur = 0; ctx.lineWidth = 1.5;
    for (var r = rings.length - 1; r >= 0; r--) {
      var g = rings[r]; g.r += 7; g.a -= .022; if (g.a <= 0) { rings.splice(r, 1); continue; }
      ctx.globalAlpha = g.a; ctx.strokeStyle = '#00ff87'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(g.x, g.y, g.r, 0, 6.2832); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    els.forEach(function (el) {                      /* cards repelled by cursor */
      if (!el._vis) return;
      var rc = el.getBoundingClientRect(), cx = rc.left + rc.width / 2 - mouse.x, cy = rc.top + rc.height / 2 - mouse.y,
          dist = Math.hypot(cx, cy) || 1, tx = 0, ty = 0;
      if (dist < 280) { var s = (280 - dist) / 280; tx = cx / dist * s * 16; ty = cy / dist * s * 16; }
      el._o.x += (tx - el._o.x) * .1; el._o.y += (ty - el._o.y) * .1;
      el.style.setProperty('--rx', el._o.x.toFixed(1) + 'px'); el.style.setProperty('--ry', el._o.y.toFixed(1) + 'px');
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
