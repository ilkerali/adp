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
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
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
(function () {
  const svg = document.getElementById('heroNet');
  if (!svg) return;
  const ns = 'http://www.w3.org/2000/svg';
  const w = 1200, h = 640;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Four "pillar" nodes plus satellite nodes, echoing the four hero pillars
  const pillars = [
    { x: 860, y: 140 }, { x: 1080, y: 260 }, { x: 960, y: 420 }, { x: 760, y: 500 }
  ];
  const satellites = [
    { x: 1020, y: 90 }, { x: 1160, y: 180 }, { x: 1140, y: 380 },
    { x: 1000, y: 560 }, { x: 840, y: 560 }, { x: 700, y: 380 },
    { x: 640, y: 220 }, { x: 780, y: 60 }
  ];
  const allNodes = pillars.concat(satellites);

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  // connect each satellite to nearest pillar, and connect pillars to each other
  const lines = [];
  satellites.forEach(s => {
    let nearest = pillars[0], best = Infinity;
    pillars.forEach(p => { const d = dist(s, p); if (d < best) { best = d; nearest = p; } });
    lines.push([s, nearest]);
  });
  for (let i = 0; i < pillars.length; i++) {
    for (let j = i + 1; j < pillars.length; j++) {
      lines.push([pillars[i], pillars[j]]);
    }
  }

  lines.forEach((pair, idx) => {
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
  });

  allNodes.forEach((n, idx) => {
    const isPillar = idx < pillars.length;
    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
    c.setAttribute('r', isPillar ? 4.5 : 2.6);
    c.setAttribute('class', isPillar ? '' : 'node-dim');
    if (!reduceMotion) {
      c.style.opacity = 0;
      c.style.transition = `opacity .6s ease ${0.9 + idx * 0.04}s`;
    }
    svg.appendChild(c);
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      svg.querySelectorAll('line').forEach(l => l.style.strokeDashoffset = 0);
      svg.querySelectorAll('circle').forEach(c => c.style.opacity = 1);
    });
  });
})();

// ===== Contact form (demo — no backend) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formNote').classList.add('show');
  });
}
