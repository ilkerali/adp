/* ============================================================
   ADP — Association for Digital Progress (ADP · KODEX)
   site.js — one place for shared data + shared components.

   WHAT YOU EDIT HERE:
     SITE       → name, address, e-mail, social links
     NAV        → the menu (changes appear on every page at once)
     BOARD      → the 7 people shown on governance.html
     DOCUMENTS  → the document registry shown on documents.html

   Pages only need three markers in the HTML:
     <div data-site-header></div>
     <div data-page-head data-code data-eyebrow data-title data-lede></div>
     <div data-site-footer></div>
   ============================================================ */

/* ---------- 1. Organisation details ------------------------ */
const SITE = {
  legalName: 'Association for Digital Progress ADP - KODEX',
  legalNameMk: 'Здружение за дигитален развој АДП - КОДЕКС',
  short: 'ADP',
  tagline: 'Digital progress, education and research in North Macedonia.',
  street: 'Brakja Ginovski St. 156',
  city: '1230 Gostivar',
  country: 'Republic of North Macedonia',
  email: 'info@adp.mk',
  website: 'www.adp.mk',
  founded: '2026',
};

/* ---------- 2. Navigation ---------------------------------- */
/* Add / remove / rename items here only. Sub-items are optional. */
const NAV = [
  {
    label: 'About', href: 'about.html', children: [
      { label: 'Who we are', href: 'about.html', note: 'Mission, vision, principles' },
      { label: 'Governance & Board', href: 'governance.html', note: 'Bodies, mandates, the seven-member Board' },
      { label: 'Documents & Policies', href: 'documents.html', note: 'Statute, codes, policies' },
    ]
  },
  {
    label: 'Our work', href: 'work.html', children: [
      { label: 'Areas of work', href: 'work.html', note: 'Six programme areas' },
      { label: 'Projects & partnerships', href: 'projects.html', note: 'Erasmus+, Horizon Europe, local work' },
      { label: 'Publications & journal', href: 'publications.html', note: 'Research output and the ADP Journal' },
    ]
  },
  { label: 'Membership', href: 'membership.html' },
  { label: 'News', href: 'news.html' },
  { label: 'Contact', href: 'contact.html' },
];

/* ---------- 3. Managing Board (7 members) ------------------ */
/* Replace name, bio and photo. Photos: put files in assets/img/
   and change `photo` to e.g. 'assets/img/president.jpg'.
   Portrait crop, ideally 800×800 px.                          */
const BOARD = [
  {
    name: 'Aybeyan Selim',
    role: 'President', // Başkan
    duty: 'Legal representative of the association',
    photo: 'assets/img/foto-aybeyan.webp', // Fotoğraf dosyası
    bio: 'Professor at International Vision University with 12 years of experience in education. Leads the Managing Board and represents ADP before national and international institutions.',
    focus: ['Strategy', 'Representation', 'Education'],
  },
  {
    name: 'İlker Ali', // Sizin adınız
    role: 'Vice-President', // Başkan Yardımcısı
    duty: 'Deputises for the President',
    photo: 'assets/img/ilker-ali.jpg', // Sizin fotoğrafınız
    bio: 'Assoc. Prof. Dr. | Microsoft Learn for Educators Program Advisor | Head of IT. Supports the President in strategic coordination and takes over representation duties in their absence.',
    focus: ['Coordination', 'Institutional relations', 'Digital Education'],
  },
  {
    name: 'Alican Ali',
    role: 'Board Member',
    duty: 'Projects & international cooperation',
    photo: 'assets/img/alican-ali.jpg', // Alican'ın fotoğrafı
    bio: 'Senior Software Engineer with extensive experience in the LAMP ecosystem, DevOps, and AWS. Develops project applications and consortium partnerships across EU programmes.',
    focus: ['EU programmes', 'Software Engineering', 'Consortia'],
  },
  {
    name: 'Dr. Fehmi Skender',
    role: 'Board Member',
    duty: 'Education & digital skills',
    photo: 'assets/img/foto-fehmi.png', // Fehmi'nin fotoğrafı
    bio: 'Assist.Prof.Dr. with a PhD in Informatic & Communication Technologies. Leads training programmes, digital literacy activities and cooperation with schools and universities.',
    focus: ['Training', 'Digital literacy', 'Research'],
  },
  {
    name: 'Arafat Useini',
    role: 'Board Member',
    duty: 'Research & publications',
    photo: 'assets/img/foto-arafat.webp', // Arafat'ın fotoğrafı
    bio: 'Assoc.Prof.Dr. and President of the Senate at International Vision University. Coordinates research activity, analytical reports and the editorial preparation of ADP publications.',
    focus: ['Research', 'Editorial', 'Academic Cooperation'],
  },
  {
    name: 'Ersoy H.',
    role: 'Board Member',
    duty: 'Digital ethics & artificial intelligence',
    photo: 'assets/img/foto-ersoy.jpeg', // Ersoy'un fotoğrafı
    bio: 'Senior Developer / Tech Lead with 15+ years of professional experience. Works on responsible technology use, data protection, ethical review, and software architecture.',
    focus: ['AI ethics', 'Data protection', 'Software Architecture'],
  },
  {
    name: 'Name Surname', // Burayı boş bıraktım, siz doldurun
    role: 'Board Member',
    duty: 'To be announced',
    photo: 'assets/img/avatar-7.svg',
    bio: 'This position will be filled soon.',
    focus: ['TBA'],
  },
];

/* ---------- 4. Document registry --------------------------- */
/* `page` = the HTML reading version, `pdf` = the signed download.
   Leave a field empty ('') and the button disappears.          */
const DOCUMENTS = [
  {
    group: 'Founding documents',
    items: [
      {
        code: 'ADP-01', title: 'Statute of the Association', lang: 'EN',
        status: 'In force',
        summary: 'The constitutive act: name, seat, objectives, membership, governing bodies, finances, transparency and dissolution. Twelve chapters, 100+ articles.',
        page: 'doc-statute.html', pdf: 'files/ADP-01-statute-en.pdf', source: 'ADP_Statut_Tuzuk.docx',
      },
      {
        code: 'ADP-02', title: 'Статут на здружението (Macedonian)', lang: 'MK',
        status: 'In force',
        summary: 'The Macedonian-language statute as registered with the Central Register of the Republic of North Macedonia. This version prevails in all legal matters.',
        page: '', pdf: 'files/ADP-02-statut-mk.pdf', source: 'ADP_Statut_MK_Draft.docx',
      },
    ]
  },
  {
    group: 'Ethics & integrity',
    items: [
      {
        code: 'ADP-03', title: 'Code of Ethics', lang: 'EN',
        status: 'In force',
        summary: 'Standards of conduct for members, staff, volunteers and partners: honesty, respect, non-discrimination, conflict of interest and reporting procedures.',
        page: '', pdf: 'files/ADP-03-code-of-ethics-en.pdf', source: 'ADP_Code_of_Ethics.docx',
      },
      {
        code: 'ADP-04', title: 'Етички кодекс, интегритет и професионалност', lang: 'MK',
        status: 'In force',
        summary: 'Macedonian version of the code of ethics, covering integrity, professionalism and the disciplinary procedure.',
        page: '', pdf: 'files/ADP-04-eticki-kodeks-mk.pdf', source: 'ADP_Eticki_Kodeks_Integritet_Profesionalno.docx',
      },
      {
        code: 'ADP-05', title: 'Anti-Corruption and Anti-Bribery Policy', lang: 'EN',
        status: 'In force',
        summary: 'Zero-tolerance rules on bribery, facilitation payments, gifts and hospitality, plus due diligence on partners and a confidential reporting channel.',
        page: '', pdf: 'files/ADP-05-anti-corruption-en.pdf', source: 'ADP_Anti-Corruption_and_Anti-Bribery_Policy.docx',
      },
    ]
  },
  {
    group: 'Protection & compliance',
    items: [
      {
        code: 'ADP-06', title: 'Data Protection & Privacy Policy (GDPR)', lang: 'EN',
        status: 'In force',
        summary: 'How ADP collects, stores and processes personal data, the lawful bases used, retention periods and how data subjects exercise their rights.',
        page: '', pdf: 'files/ADP-06-data-protection-gdpr-en.pdf', source: 'ADP_Data_Protection_Privacy_Policy_(GDPR).docx',
      },
      {
        code: 'ADP-07', title: 'Safeguarding & Protection Policy', lang: 'EN',
        status: 'In force',
        summary: 'Protection of children, young people and adults at risk in all ADP activities, including recruitment checks, conduct rules and incident response.',
        page: '', pdf: 'files/ADP-07-safeguarding-en.pdf', source: 'ADP_Safeguarding_Protection_Policy.docx',
      },
      {
        code: 'ADP-08', title: 'Responsible Artificial Intelligence Policy', lang: 'EN',
        status: 'In force',
        summary: 'Principles for developing and using AI in ADP projects: human oversight, transparency, fairness, data governance and ethical review by the AI Commission.',
        page: '', pdf: 'files/ADP-08-responsible-ai-en.pdf', source: 'ADP_Responsible_Artificial_Intelligence-AI_Policy.docx',
      },
    ]
  },
  {
    group: 'Membership documents',
    items: [
      {
        code: 'ADP-09', title: 'Membership cards & identification rules', lang: 'EN / MK',
        status: 'In force',
        summary: 'Design, issuing, validity and withdrawal of ADP membership and identification cards, including the digital card format.',
        page: '', pdf: 'files/ADP-09-membership-cards.pdf', source: 'kimlik kartlari adp.docx',
      },
    ]
  },
];

/* ============================================================
   Components — you normally do not need to edit below this line
   ============================================================ */

const currentPage = () => document.body.dataset.page || '';
const isActive = (href) => href.replace('.html', '') === currentPage();

function navDesktop() {
  return NAV.map((item) => {
    const active = isActive(item.href) || (item.children || []).some((c) => isActive(c.href));
    if (!item.children) {
      return `<a href="${item.href}" data-active="${active}"
        class="nav-link relative text-[14px] font-medium text-white/75 transition hover:text-white ${active ? '!text-white' : ''}">${item.label}</a>`;
    }
    return `<div class="nav-item relative">
      <a href="${item.href}" data-active="${active}"
        class="nav-link relative flex items-center gap-1.5 text-[14px] font-medium text-white/75 transition hover:text-white ${active ? '!text-white' : ''}">
        ${item.label}
        <svg class="h-3 w-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </a>
      <div class="nav-panel absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 pt-5">
        <div class="overflow-hidden rounded-xl border border-mist bg-card p-2 shadow-lift">
          ${item.children.map((c) => `
            <a href="${c.href}" class="block rounded-lg px-3.5 py-3 transition hover:bg-paper ${isActive(c.href) ? 'bg-paper' : ''}">
              <span class="block text-[14px] font-semibold text-ink">${c.label}</span>
              <span class="mt-0.5 block text-[12.5px] leading-snug text-ink/55">${c.note}</span>
            </a>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function navMobile() {
  return NAV.map((item) => {
    const kids = item.children || [{ label: item.label, href: item.href, note: '' }];
    return `<div class="border-b border-white/10 py-5">
      <p class="code-chip mb-3 text-amber">${item.label}</p>
      ${kids.map((c) => `<a href="${c.href}" class="block py-2 font-display text-[26px] font-semibold tracking-tight ${isActive(c.href) ? 'text-amber' : 'text-white'}">${c.label}</a>`).join('')}
    </div>`;
  }).join('');
}

function renderHeader(mount) {
  mount.outerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">Skip to content</a>

  <div class="hidden bg-ink-900 text-white/55 lg:block">
    <div class="mx-auto flex max-w-content items-center justify-between px-8 py-2">
      <p class="code-chip">${SITE.legalName}</p>
      <p class="code-chip">${SITE.city} · North Macedonia — <a class="text-amber hover:underline" href="mailto:${SITE.email}">${SITE.email}</a></p>
    </div>
  </div>

  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-md">
    <div class="mx-auto max-w-content px-5 lg:px-8">
      <div class="flex h-[68px] items-center justify-between gap-8 lg:h-[76px]">

        <a href="index.html" class="flex shrink-0 items-center gap-3">
          <span class="grid h-11 w-11 place-items-center rounded-[13px] bg-amber font-mono text-[13px] font-semibold tracking-tight text-ink">ADP</span>
          <span class="hidden leading-[1.15] sm:block">
            <span class="block font-display text-[16px] font-bold tracking-tight text-white">Association for Digital&nbsp;Progress</span>
            <span class="code-chip block text-white/45">ADP · KODEX</span>
          </span>
        </a>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Main">${navDesktop()}</nav>

        <div class="flex items-center gap-3">
          <a href="contact.html" class="hidden rounded-full bg-amber px-5 py-2.5 text-[13.5px] font-semibold text-ink transition hover:bg-white lg:inline-block">Partner with us</a>
          <button id="menuBtn" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu"
            class="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div id="mobileMenu" class="fixed inset-0 z-50 hidden bg-ink lg:hidden">
    <div class="flex h-[68px] items-center justify-between border-b border-white/10 px-5">
      <span class="code-chip text-white/50">Menu</span>
      <button id="menuClose" aria-label="Close menu" class="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
    <div class="h-[calc(100%-68px)] overflow-y-auto px-5 pb-16">
      ${navMobile()}
      <a href="contact.html" class="mt-8 block rounded-full bg-amber px-6 py-4 text-center font-semibold text-ink">Partner with us</a>
      <p class="mt-8 text-[13px] leading-relaxed text-white/45">${SITE.street}<br>${SITE.city}, ${SITE.country}<br><a class="text-amber" href="mailto:${SITE.email}">${SITE.email}</a></p>
    </div>
  </div>`;
}

function renderFooter(mount) {
  const col = (title, links) => `
    <div>
      <p class="code-chip mb-5 text-amber">${title}</p>
      <ul class="space-y-3">
        ${links.map((l) => `<li><a href="${l[1]}" class="text-[14.5px] text-white/65 transition hover:text-white">${l[0]}</a></li>`).join('')}
      </ul>
    </div>`;

  mount.outerHTML = `
  <footer class="bg-ink-900 text-white">
    <div class="mx-auto max-w-content px-5 lg:px-8">

      <div class="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.3fr_2fr] lg:py-20">
        <div>
          <div class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-[13px] bg-amber font-mono text-[13px] font-semibold text-ink">ADP</span>
            <span class="font-display text-[17px] font-bold leading-tight tracking-tight">Association for<br>Digital Progress</span>
          </div>
          <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">A voluntary, independent, non-partisan and non-profit citizens' association working for digital development, education, science and sustainable growth.</p>
          <a href="contact.html" class="mt-7 inline-flex items-center gap-2 border-b border-amber pb-1 font-display text-[17px] font-semibold text-amber">
            Start a conversation
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>

        <div class="grid gap-10 sm:grid-cols-3">
          ${col('Organisation', [['Who we are', 'about.html'], ['Governance & Board', 'governance.html'], ['Membership', 'membership.html'], ['News & events', 'news.html']])}
          ${col('Work', [['Areas of work', 'work.html'], ['Projects & partnerships', 'projects.html'], ['Publications & journal', 'publications.html'], ['Contact', 'contact.html']])}
          ${col('Transparency', [['Document registry', 'documents.html'], ['Statute', 'doc-statute.html'], ['Code of ethics', 'documents.html#ethics'], ['Data protection', 'documents.html#compliance']])}
        </div>
      </div>

      <div class="grid gap-8 border-b border-white/10 py-10 sm:grid-cols-3">
        <div>
          <p class="code-chip mb-3 text-white/40">Registered seat</p>
          <p class="text-[14.5px] leading-relaxed text-white/70">${SITE.street}<br>${SITE.city}<br>${SITE.country}</p>
        </div>
        <div>
          <p class="code-chip mb-3 text-white/40">Contact</p>
          <p class="text-[14.5px] leading-relaxed text-white/70">
            <a href="mailto:${SITE.email}" class="transition hover:text-amber">${SITE.email}</a><br>
            <a href="https://${SITE.website}" class="transition hover:text-amber">${SITE.website}</a>
          </p>
        </div>
        <div>
          <p class="code-chip mb-3 text-white/40">Legal name</p>
          <p class="text-[14.5px] leading-relaxed text-white/70">${SITE.legalNameMk}<br><span class="text-white/45">${SITE.legalName}</span></p>
        </div>
      </div>

      <div class="flex flex-col gap-3 py-8 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© <span data-year>${new Date().getFullYear()}</span> ${SITE.legalName}. All rights reserved.</p>
        <p class="code-chip">Non-profit · Registered in North Macedonia</p>
      </div>
    </div>
  </footer>`;
}

function renderPageHead(mount) {
  const d = mount.dataset;
  mount.outerHTML = `
  <section class="relative overflow-hidden bg-ink text-white">
    <div class="grid-blueprint absolute inset-0" aria-hidden="true"></div>
    <div class="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-content px-5 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
      <div class="flex items-center gap-4">
        <span class="code-chip rounded-full border border-amber/40 px-3 py-1 text-amber">${d.code || 'ADP'}</span>
        <span class="code-chip text-white/45">${d.eyebrow || ''}</span>
      </div>
      <h1 class="headline mt-7 max-w-4xl text-[40px] sm:text-[52px] lg:text-[64px]">${d.title || ''}</h1>
      ${d.lede ? `<p class="mt-7 max-w-2xl text-[17px] leading-relaxed text-white/65 lg:text-[19px]">${d.lede}</p>` : ''}
    </div>
  </section>`;
}

/* ---------- Bootstrap -------------------------------------- */
(function init() {
  const h = document.querySelector('[data-site-header]');
  if (h) renderHeader(h);
  const p = document.querySelector('[data-page-head]');
  if (p) renderPageHead(p);
  const f = document.querySelector('[data-site-footer]');
  if (f) renderFooter(f);

  /* Mobile menu */
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('menuClose');
  const toggle = (open) => {
    menu.classList.toggle('hidden', !open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  if (btn && menu) {
    btn.addEventListener('click', () => toggle(true));
    close.addEventListener('click', () => toggle(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
  }

  /* Scroll reveal */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* Hero word rotator */
  const rot = document.querySelector('[data-rotator]');
  if (rot) {
    const words = rot.querySelectorAll('span');
    let i = 0;
    words[0].classList.add('on');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && words.length > 1) {
      setInterval(() => {
        words[i].classList.remove('on');
        i = (i + 1) % words.length;
        words[i].classList.add('on');
      }, 2600);
    }
  }

  /* Board members */
  const board = document.querySelector('[data-board]');
  if (board) {
    board.innerHTML = BOARD.map((m, idx) => `
      <article class="reveal group overflow-hidden rounded-2xl border border-mist bg-card shadow-card transition hover:shadow-lift">
        <div class="relative aspect-[4/5] overflow-hidden bg-paper">
          <img src="${m.photo}" alt="Portrait of ${m.name}, ${m.role}" loading="lazy"
               class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">
          <span class="code-chip absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-white">${String(idx + 1).padStart(2, '0')}</span>
        </div>
        <div class="p-6">
          <p class="code-chip text-amber-dark">${m.role}</p>
          <h3 class="mt-2 font-display text-[22px] font-bold tracking-tight text-ink">${m.name}</h3>
          <p class="mt-1 text-[14px] font-medium text-ink/55">${m.duty}</p>
          <p class="mt-4 text-[14.5px] leading-relaxed text-ink/70">${m.bio}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            ${m.focus.map((f) => `<span class="rounded-full bg-paper px-3 py-1 text-[12px] font-medium text-ink/60">${f}</span>`).join('')}
          </div>
        </div>
      </article>`).join('');
    document.querySelectorAll('[data-board] .reveal').forEach((el) => io.observe(el));
  }

  /* Document registry */
  const reg = document.querySelector('[data-documents]');
  if (reg) {
    reg.innerHTML = DOCUMENTS.map((g) => `
      <section id="${g.group.split(' ')[0].toLowerCase().replace('&', '')}" class="scroll-mt-28">
        <div class="mb-6 flex items-baseline gap-4 border-b border-mist pb-4">
          <h2 class="font-display text-[26px] font-bold tracking-tight text-ink">${g.group}</h2>
          <span class="code-chip text-ink/40">${g.items.length} document${g.items.length > 1 ? 's' : ''}</span>
        </div>
        <div class="mb-16 grid gap-4">
          ${g.items.map((d) => `
            <article class="reveal grid gap-6 rounded-2xl border border-mist bg-card p-6 shadow-card transition hover:border-ink/20 lg:grid-cols-[130px_1fr_auto] lg:items-start lg:p-7">
              <div>
                <p class="code-chip text-amber-dark">${d.code}</p>
                <p class="code-chip mt-2 text-ink/40">${d.lang}</p>
              </div>
              <div>
                <h3 class="font-display text-[20px] font-bold tracking-tight text-ink">${d.title}</h3>
                <p class="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink/65">${d.summary}</p>
                <p class="code-chip mt-4 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-teal-dark">
                  <span class="h-1.5 w-1.5 rounded-full bg-teal"></span>${d.status}
                </p>
              </div>
              <div class="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
                ${d.page ? `<a href="${d.page}" class="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-center text-[13.5px] font-semibold text-white transition hover:bg-ink-600">Read online</a>` : ''}
                ${d.pdf ? `<a href="${d.pdf}" class="whitespace-nowrap rounded-full border border-ink/15 px-5 py-2.5 text-center text-[13.5px] font-semibold text-ink transition hover:border-ink/40">Download PDF</a>` : ''}
              </div>
            </article>`).join('')}
        </div>
      </section>`).join('');
    document.querySelectorAll('[data-documents] .reveal').forEach((el) => io.observe(el));
  }

  /* Demo contact form */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('formNote').classList.remove('hidden');
    });
  }
})();
