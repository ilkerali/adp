# ADP — Association for Digital Progress (ADP · KODEX)

Multi-page website built with Tailwind CSS. No build step, no framework, no server needed —
open `index.html` in a browser and it works.

---

## 1. File structure

```
index.html            Home
about.html            Who we are — mission, objectives, legal identity
governance.html       Bodies + the 7-member Managing Board
work.html             Six programme areas
projects.html         Projects & partnerships
publications.html     Publications & the ADP Journal
documents.html        Public document registry (all 9 documents)
membership.html       Membership categories and how to join
news.html             News & events
contact.html          Contact details + form
doc-statute.html      Example of a document reading page (ADP-01)
doc-template.html     Copy this to create the other document pages
404.html              Not-found page

assets/
  head.js             The shared <head> (fonts + Tailwind + stylesheet)
  tailwind.config.js  Colours, fonts, shadows — the whole theme
  site.js             Site data + header + footer + interactions
  styles.css          The few styles Tailwind can't express
  img/                Placeholder portraits + favicon

files/                Put your PDF exports here
```

---

## 2. No repeated code — where to edit what

Each page contains only its own content. Everything shared lives in three places:

| You want to change… | Edit this |
|---|---|
| The menu (add/remove/rename a link) | `NAV` in `assets/site.js` |
| Header or footer layout | `renderHeader()` / `renderFooter()` in `assets/site.js` |
| Address, e-mail, legal name | `SITE` in `assets/site.js` |
| The 7 board members | `BOARD` in `assets/site.js` |
| The document list | `DOCUMENTS` in `assets/site.js` |
| Colours, fonts | `assets/tailwind.config.js` |
| Fonts loaded / stylesheets | `assets/head.js` |

A change in any of these appears on **every page at once**.

Each page only needs these markers:

```html
<head> … <script src="assets/head.js"></script> </head>
<body data-page="about">
  <div data-site-header></div>
  <div data-page-head data-code="§ 01" data-eyebrow="…" data-title="…" data-lede="…"></div>
  <main id="main"> … page content … </main>
  <div data-site-footer></div>
  <script src="assets/site.js"></script>
</body>
```

`data-page` on `<body>` is what highlights the active menu item. Use the file name without `.html`.

---

## 3. Adding a new page

1. Copy any page (e.g. `about.html`) to `newpage.html`.
2. Change `<title>`, the meta description, `data-page="newpage"` and the `data-page-head` attributes.
3. Replace the `<main>` content.
4. Add it to `NAV` in `assets/site.js`.

---

## 4. Replacing the board photos

The seven portraits are placeholder SVGs in `assets/img/`.

1. Save your photos as `assets/img/president.jpg`, `assets/img/secretary.jpg`, etc.
   Square or portrait crop; roughly 800 × 1000 px is ideal.
2. In `assets/site.js`, in the `BOARD` list, change `name`, `role`, `duty`, `bio`, `focus`
   and `photo` for each person.

The layout is a 3-column grid, so 7 cards sit as 3 / 3 / 1. If you later have 6 or 9 members
it will still balance.

---

## 5. The documents: HTML or PDF?

**Do both — and that is what this site is already set up for.**

| | HTML page (`doc-*.html`) | PDF (`files/*.pdf`) |
|---|---|---|
| Reads well on a phone | yes | poorly — pinch and zoom |
| Found by Google | yes, every heading indexed | weakly |
| Can be linked to a specific article | yes (`doc-statute.html#ch5`) | no |
| Browser translation (MK ↔ EN ↔ SQ) | yes | no |
| Accessible to screen readers | yes | usually not |
| Carries a signature and stamp | no | yes |
| What a funder attaches to a file | no | yes |

So: publish the readable version as HTML, and offer the signed PDF as a download on the same page.
Each card in the registry already has both buttons — `Read online` and `Download PDF`.

**To finish the setup:**

1. Export each Word document to PDF and put it in `files/` with the file name shown in
   `DOCUMENTS` in `assets/site.js` (e.g. `files/ADP-03-code-of-ethics-en.pdf`).
2. For the ones you want readable online, copy `doc-template.html`, paste the text in,
   and set that document's `page` field in `DOCUMENTS`.
3. If a document should be PDF-only, leave `page: ''` and the "Read online" button disappears
   by itself.

Priority for HTML versions, if you do not want to convert all nine at once:
**Statute → Code of Ethics → Data Protection (GDPR) → Responsible AI → Safeguarding.**
These are the ones partners, funders and participants actually look for.

---

## 6. Going live

The site is plain static files — it can be hosted anywhere: GitHub Pages, Netlify, Cloudflare
Pages, or ordinary shared hosting. Upload the whole folder.

**One production note:** the site currently loads Tailwind from the CDN
(`cdn.tailwindcss.com`), which compiles the CSS in the browser. That is perfect while you are
building, but for the public site it is faster to compile the CSS once:

```bash
npm install -D tailwindcss
npx tailwindcss -i input.css -o assets/tailwind.css --minify
```

Then in `assets/head.js`, remove the two `cdn.tailwindcss.com` / `tailwind.config.js` lines and
add `<link rel="stylesheet" href="assets/tailwind.css">`. Nothing else changes.

---

## 7. The contact form

`contact.html` has a working front-end form that currently shows a message instead of sending.
To make it send, either:

- point it at a form service (Formspree, Web3Forms, Netlify Forms) by adding an `action` to the
  `<form>` tag, or
- host a small mail script and post to it.

The handler lives at the bottom of `assets/site.js`.

---

## 8. Colours

All colours live in one place: the `colors` block of `assets/tailwind.config.js`.

| Token | Value | Where it appears |
|---|---|---|
| `ink` | `#0B1B33` | Header, hero, footer, dark cards, body text |
| `ink-900` | `#061224` | Footer background, top strip |
| `ink-600` | `#1D4477` | Hover state of dark buttons |
| `paper` | `#EDF1F7` | Page background |
| `mist` | `#D5DEEA` | Every border, rule and divider |
| `card` | `#FFFFFF` | Card surfaces |
| `brand` | `#1F5FD1` | Filled buttons, logo mark, bullets — always with white text |
| `brand-light` | `#8CB6F5` | Accent **text** on dark navy backgrounds |
| `brand-dark` | `#16408F` | Accent **text** on white or paper backgrounds |
| `brand-soft` | `#E4ECFB` | Tinted backgrounds: icon tiles, note boxes |
| `accent` | `#0E7C8A` | Secondary accent, used sparingly for status pills |

The accent exists in four tones for one reason: a single blue cannot be readable on both a
white card and a navy panel. `brand-light` is for dark backgrounds, `brand-dark` for light ones.
If you change `brand`, change these two to a lighter and a darker version of the same hue.

Four values are hard-coded outside Tailwind and need editing by hand:

- `assets/styles.css` line 10 — text selection colour
- `assets/styles.css` line 14 — keyboard focus ring
- `assets/styles.css` line 81 — the menu underline (uses `brand-light`, it sits on navy)
- `assets/head.js` line 17 — `theme-color`, the mobile browser bar

The logo mark in `assets/img/favicon.svg` uses the same two colours.

After editing, refresh with **Ctrl+F5**. Tailwind recompiles in the browser, so there is no
build step while you work.

## 9. Design notes

- **Type:** Bricolage Grotesque (display), Public Sans (body), IBM Plex Mono (registry codes).
- **The recurring device** is the registry code — `§ 01`, `ADP-03` — a nod to the association's
  own name, KODEX, and to the fact that everything here is on the record.
- Responsive to 360 px, keyboard-navigable, respects `prefers-reduced-motion`, and document
  pages print cleanly.
