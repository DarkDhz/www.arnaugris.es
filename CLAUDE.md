# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio/CV website for Arnau Gris Garcia. Pure static HTML/CSS/JS — no build step, no package manager, no backend.

## Running the site

Open `index.html` directly in a browser, or serve it with any static HTTP server:

```bash
python -m http.server 8000
# or
npx http-server
```

## Architecture

Single `index.html` file with anchor-based section navigation (`#about`, `#skills`, `#languages`, `#experience`, `#education`, `#portfolio`). Note: `#languages` exists in the DOM but is **not** in the header nav — add it there if you want it scroll-spied. All third-party libraries are vendored locally (no CDN for JS/CSS, except Google Fonts).

**Vendored libraries:**
- `css/mdb.min.css` + `scripts/mdb.min.js` — Material Design Bootstrap (grid, components)
- `css/aos.css` + `scripts/aos.js` — Animate On Scroll (scroll-triggered fade-ins)
- `css/font-awesome/` — Font Awesome 6 icons

**Custom code:**
- `scripts/main.js` — three IIFEs: (1) AOS init, (2) scroll-spy that adds `.active` to the matching nav link (tracked IDs hardcoded: `['about', 'skills', 'experience', 'education', 'portfolio']` — update if sections change), (3) language switcher with a `translations` object (EN/CA/ES) and a `setLanguage(lang)` function that updates all `[data-i18n]` elements, `document.title`, and `<html lang>`. Language persists in `localStorage`; auto-detected from `navigator.language` on first visit.
- `css/main.css` — sticky header (with `box-shadow`), timeline layout, skill/language badge layout, `.lang-btn` / `.lang-switcher` styles, responsive breakpoints, and print/PDF styles.

**Skills & Languages sections:** Skills uses MDB `badge rounded-pill` tags grouped into three columns (Programming / Systems & Security / Soft Skills). Languages uses the same badge style. There are no progress bars — the `.progress-bar` CSS rule in `main.css` is vestigial and can be removed.

## Key details

**Asset versioning:** Cache-busting via query strings (e.g., `?ver=1.2.3`). Current version is `1.2.3` — bump all seven asset `<link>`/`<script>` tags (4 in `<head>`, 3 at end of `<body>`) whenever changing CSS or JS files.

**i18n:** All user-visible text in `index.html` carries a `data-i18n="key"` attribute. To add or change translated text, update the matching key in all three language objects (`en`, `ca`, `es`) inside the language-switcher IIFE in `scripts/main.js`. For elements that mix text with child HTML (e.g. a link inside a `<li>`), the text node is wrapped in a `<span data-i18n="...">` so the link is preserved. The EN/CA/ES switcher buttons live in the header nav as the last `<li>`.

**Print/PDF output:** `css/main.css` has `@media print` rules for PDF CV generation. The `d-print-none` class hides the header nav, portfolio section social links. The `.page-break` class forces a page break (`page-break-before: always`) for PDF layout. Do not break these when editing layout.

**Mobile:** AOS animations are disabled on mobile via CSS (`@media (max-width: 767px)`) — not in JS. The `.portfolio-reverse` class reverses column order so images appear below text on small screens.

**Timeline colors:** `.timeline-card-info` (blue, work experience), `.timeline-card-success` (teal, education). Color is set via a `::before` pseudo-element using Bootstrap CSS variables (`--bs-info`, `--bs-teal`).

## SEO surface area

When personal info changes, update all of these locations:

| What | Where |
|---|---|
| Name, job title, employer, skills | Schema.org JSON-LD in `<head>` of `index.html` |
| Page title, meta description | `<title>` and `<meta name="description">` in `<head>` |
| Open Graph / Twitter Card | `<meta property="og:*">` and `<meta name="twitter:*">` in `<head>` |
| Geo location | `geo.region`, `geo.placename`, `geo.position`, `ICBM` meta tags |
| Social profiles | `sameAs` array in Schema.org JSON-LD |
| AI-readable summary | `llms.txt` in root |
| Last modified date | `<lastmod>` in `sitemap.xml` |

**`llms.txt`** — root-level file for AI crawlers (GPTBot, ClaudeBot, etc.) following the llmstxt.org spec. Keep it in sync with the actual content of `index.html`.
