// ============================================================
// ADP — Association for Digital Progress
// script.js
// ============================================================

// ===== Mobile menu =====
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Hero network diagram (signature element) =====
// Draws in once, then drifts gently and reacts to the mouse (nodes ease
// away from the cursor, like a soft magnetic field). Disabled for
// prefers-reduced-motion beyond the initial draw-in.
(function () {
  const svg = document.getElementById('heroNet');
  if (!svg) return;
  const heroSection = svg.closest('.hero');
  const ns = 'http://www.w3.org/2000/svg';
  const w = 1200, h = 640;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Four "pillar" nodes plus satellite nodes, echoing the four hero pillars
  const pillarSeed = [
    { x: 860, y: 140 }, { x: 1080, y: 260 }, { x: 960, y: 420 }, { x: 760, y: 500 }
  ];
  const satelliteSeed = [
    { x: 1020, y: 90 }, { x: 1160, y: 180 }, { x: 1140, y: 380 },
    { x: 1000, y: 560 }, { x: 840, y: 560 }, { x: 700, y: 380 },
    { x: 640, y: 220 }, { x: 780, y: 60 }
  ];

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  // Live node objects: baseX/baseY = resting position, x/y = current
  // (animated) position. Everything downstream reads x/y.
  const allNodes = pillarSeed.concat(satelliteSeed).map((n, i) => ({
    baseX: n.x, baseY: n.y,
    x: n.x, y: n.y,
    isPillar: i < pillarSeed.length,
    phase: Math.random() * Math.PI * 2,
    speed: 0.35 + Math.random() * 0.3
  }));
  const pillarNodes = allNodes.filter(n => n.isPillar);
  const satelliteNodes = allNodes.filter(n => !n.isPillar);

  // connect each satellite to its nearest pillar, and connect pillars to each other
  const lines = [];
  satelliteNodes.forEach(s => {
    let nearest = pillarNodes[0], best = Infinity;
    pillarNodes.forEach(p => {
      const d = dist({ x: s.baseX, y: s.baseY }, { x: p.baseX, y: p.baseY });
      if (d < best) { best = d; nearest = p; }
    });
    lines.push([s, nearest]);
  });
  for (let i = 0; i < pillarNodes.length; i++) {
    for (let j = i + 1; j < pillarNodes.length; j++) {
      lines.push([pillarNodes[i], pillarNodes[j]]);
    }
  }

  const lineEls = lines.map((pair, idx) => {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', pair[0].x); line.setAttribute('y1', pair[0].y);
    line.setAttribute('x2', pair[1].x); line.setAttribute('y2', pair[1].y);
    if (!reduceMotion) {
      const len = dist(pair[0], pair[1]);
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
      line.style.transition = `stroke-dashoffset 1.4s ease ${0.4 + idx * 0.05}s`;
    }
    svg.appendChild(line);
    return line;
  });

  const circleEls = allNodes.map((n, idx) => {
    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
    c.setAttribute('r', n.isPillar ? 4.5 : 2.6);
    c.setAttribute('class', n.isPillar ? '' : 'node-dim');
    if (!reduceMotion) {
      c.style.opacity = 0;
      c.style.transition = `opacity .6s ease ${0.9 + idx * 0.04}s`;
    }
    svg.appendChild(c);
    return c;
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      lineEls.forEach(l => l.style.strokeDashoffset = 0);
      circleEls.forEach(c => c.style.opacity = 1);
    });
  });

  // Respect reduced-motion: keep the static draw-in, skip continuous animation.
  if (reduceMotion || !heroSection) return;

  // ---- Continuous idle drift + mouse-reactive field ----
  const mouse = { x: w / 2, y: h / 2, active: false };
  const REPEL_RADIUS = 220;
  const REPEL_STRENGTH = 46;
  const DRIFT_AMOUNT = 6;
  let t = 0;

  function toSvgCoords(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (w / rect.width),
      y: (clientY - rect.top) * (h / rect.height)
    };
  }

  heroSection.addEventListener('mousemove', (e) => {
    const p = toSvgCoords(e.clientX, e.clientY);
    mouse.x = p.x; mouse.y = p.y; mouse.active = true;
  });
  heroSection.addEventListener('mouseleave', () => { mouse.active = false; });

  function tick() {
    t += 0.016;
    allNodes.forEach(n => {
      // gentle idle drift, unique phase/speed per node so it never looks mechanical
      let targetX = n.baseX + Math.sin(t * n.speed + n.phase) * DRIFT_AMOUNT;
      let targetY = n.baseY + Math.cos(t * n.speed * 0.8 + n.phase) * DRIFT_AMOUNT;

      // soft repel field around the cursor
      if (mouse.active) {
        const dx = targetX - mouse.x, dy = targetY - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < REPEL_RADIUS && d > 0.001) {
          const force = (1 - d / REPEL_RADIUS) * REPEL_STRENGTH;
          targetX += (dx / d) * force;
          targetY += (dy / d) * force;
        }
      }

      // ease current position toward target (keeps motion smooth, not jumpy)
      n.x += (targetX - n.x) * 0.08;
      n.y += (targetY - n.y) * 0.08;
    });

    circleEls.forEach((c, i) => {
      c.setAttribute('cx', allNodes[i].x);
      c.setAttribute('cy', allNodes[i].y);
    });
    lineEls.forEach((l, i) => {
      l.setAttribute('x1', lines[i][0].x); l.setAttribute('y1', lines[i][0].y);
      l.setAttribute('x2', lines[i][1].x); l.setAttribute('y2', lines[i][1].y);
    });

    requestAnimationFrame(tick);
  }

  // start the idle/interactive loop once the draw-in has finished
  setTimeout(() => requestAnimationFrame(tick), 1500);
})();

// ===== Contact form (demo — no backend) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formNote').classList.add('show');
  });
}
