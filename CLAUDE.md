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

Single `index.html` file with anchor-based section navigation. All third-party libraries are vendored locally (no CDN for JS/CSS, except Google Fonts).

**Vendored libraries in the repo:**
- `css/mdb.min.css` + `scripts/mdb.min.js` — Material Design Bootstrap (grid, components)
- `css/aos.css` + `scripts/aos.js` — Animate On Scroll (scroll-triggered fade-ins)
- `css/font-awesome/` — Font Awesome 6 icons

**Custom code:**
- `scripts/main.js` — only initializes AOS (`AOS.init({ anchorPlacement: ..., duration: 1000 })`)
- `css/main.css` — timeline layout, responsive breakpoints, and print/PDF styles

## Key details

- Cache-busting via query strings on asset URLs (e.g., `?v=1.2.1`) — bump these when changing CSS/JS files
- `css/main.css` includes `@media print` rules for PDF CV generation; keep print styles intact when editing layout
- Schema.org JSON-LD and Open Graph meta tags are in `<head>` — update them if personal info changes
