# Menuar site — handoff for the next Claude Code session

_Last updated at the end of a working session. Read this top-to-bottom before making changes._

## What this project is

**Menuar** is a marketing/landing site for a product that turns a restaurant's QR code into a
premium digital menu: a fast, photographed, multilingual menu whose signature dishes appear in
photorealistic **3D/AR**. Positioning is deliberate: it's a **beautiful digital menu first**, with
AR as one standout feature — *not* an "AR company". Keep that framing in all copy.

- **Repo:** `C:\dev\menuar-site` (Windows, PowerShell primary shell; a Bash tool is also available).
- **Stack:** Vite + React 19 + React Router 7 + framer-motion. Plain CSS (no Tailwind) with CSS
  variables. `<model-viewer>` (Google web component) for 3D, loaded globally via a `<script>` in
  `index.html`.
- **Dev/build:** `npm run dev` (Vite, port 5173), `npm run build`, `npm run preview`.
- **Deploy target:** Vercel (analytics + speed-insights packages are installed).

## Git state

- **Current branch: `main`**, working tree **clean** — everything from the recent redesign is
  committed. `rebuild` was the working branch and has been merged into `main`
  (`0c38955 Merge branch 'rebuild'`).
- Recent commits tell the story of the last session (newest first):
  - `5c84add` Rework Inside the menu cards to statements plus 3-step card, new icons
  - `d275257` Add looping progress bar to demo video
  - `56bcb92` Rework mobile hero layout, remove QR caption
  - `abce8f7` Make hero pizza display-only rotating, remove drag caption and AR
  - `6666608` Update nav to Inside the menu, Try the menu, Pricing, Questions
  - `ae8f37b` Replace phone frame with looping demo video in Inside the menu
  - `ed368a3` Add Inside the menu section, remove How it works and Features
- **Committing:** the user commits themselves. Don't commit or push unless asked. If asked, this
  isn't the default branch's usual flow — confirm target branch first.

## The site that matters lives in `src/newsite/`

There is an **old site** in `src/App.jsx` + `src/data/**` (the original "Sufra AR" app). It is **not
rendered** and is out of scope. Do not edit it. `src/main.jsx` mounts only the new site:

- `/` → `NewSite.jsx`, `/about` → `AboutPage.jsx`, `/privacy` → `PrivacyPage.jsx`.

### Homepage section order (`src/newsite/NewSite.jsx`)

`Nav → Hero → InsideMenu → TryDemo → Pricing → Faq → Contact` (Contact.jsx also renders the
homepage footer). The old **HowItWorks** and **Features** sections were deleted this session and
replaced by **InsideMenu**.

### Files in `src/newsite/`

| Component | Stylesheet | Section id | Notes |
|---|---|---|---|
| `Nav.jsx` | `nav.css` | — | 4 links: `#inside-menu`, `#try-it`, `#pricing`, `#faq` + language switcher + "Talk to us" |
| `Hero.jsx` | `hero.css` | `#hero` | headline, sub, 2 buttons, QR, phone mockup + rotating 3D pizza |
| `InsideMenu.jsx` | `insidemenu.css` | `#inside-menu` | looping demo video + 6 cards |
| `TryDemo.jsx` | `trydemo.css` | `#try-it` | QR + "open demo menu" |
| `Pricing.jsx` | `pricing.css` | `#pricing` | 3 tiers (Essential/Signature/Bespoke); mobile = swipe carousel |
| `Faq.jsx` | `faq.css` | `#faq` | accordion, 11 Q&A (q1–q11) |
| `Contact.jsx` | `contact.css` | `#contact` | contact band + footer |
| `Footer.jsx` | (uses `contact.css`) | — | footer for About/Privacy pages only |
| `AboutPage.jsx`, `PrivacyPage.jsx`, `PageLayout.jsx` | `pages.css` | — | standalone routed pages |
| `LanguageSwitcher.jsx` | `languageswitcher.css` | — | flag + ENG/GEO/RUS dropdown |
| `tokens.css` | — | — | CSS variables (see below) |
| `i18n/translations.js`, `i18n/LanguageProvider.jsx` | — | — | translations + provider |

## Design tokens (`src/newsite/tokens.css`)

- `--ink #0F0D0B` (dark bg), `--stone #EFEAE2` (light bg), `--stone-light #F8F6F1`, `--card #FFFFFF`,
  `--border #D8D0C4`, `--text #111111`, `--text-muted #6F6A63`, `--text-on-dark #F5F1EA`,
  `--text-on-dark-muted #A8A099`, **`--accent #D97B45` (terracotta)**.
- Fonts: `--font-display: 'Noto Serif Georgian', 'Noto Serif', Georgia, serif` (headings);
  `--font-body: 'FiraGO', system-ui, sans-serif` (body).
- **Fonts detail:** FiraGO is **self-hosted** (`public/fonts/*.woff2`, Latin/Georgian/Cyrillic,
  weights 400/500; Latin preloaded in `index.html`). Noto Serif + Noto Serif Georgian come from
  Google Fonts. Noto Serif Georgian has **no Cyrillic**, so `Noto Serif` sits behind it in the
  display stack to cover Russian headings. Do not "simplify" the font stacks.

## Internationalization — read this before touching any copy

- **Three languages: `en`, `ka` (Georgian), `ru` (Russian).** Provider in
  `i18n/LanguageProvider.jsx`: detects browser language on first load, persists choice to
  `localStorage['menuar-site-language']`, sets `<html lang>`, exposes `useTranslation()` → `{ t, language, setLanguage }`.
- **Keys are FLAT and namespaced**, e.g. `'inside.f1'`, `'pricing.title'`, `'faq.q1.question'`.
  `t(key)` does a flat lookup and **falls back to English** if a key is missing/empty, returning the
  key string itself if missing everywhere (so gaps are visible, not blank).
- All three language objects must keep **identical key sets** (currently **162 keys each**).
- **NEVER invent, translate, or "fix" Georgian/Russian copy.** The user supplies translations
  verbatim. When they paste copy, insert it exactly — watch for intentional punctuation (e.g. a
  Georgian ` — ` em-dash, an English ` - `, apostrophes). For byte-exact insertion, the reliable
  pattern used repeatedly this session: write the pasted copy to a scratch `.mjs` module, then run a
  small Node merge script that inserts/replaces keys and re-verifies parity — rather than hand-editing.
- Things deliberately **hardcoded** (not translated): the "Menuar" wordmark, phone number
  `+995 598 11 99 81`, prices `₾99/₾149/₾199` and the lari symbol, the tier names
  Essential/Signature/Bespoke.

## Section-specific state (what happened this session)

- **Inside the menu (`InsideMenu.jsx`) — most recently changed.**
  - Left column: the looping demo video `public/menu-demo.mp4` at its natural aspect (portrait
    720×1264), wrapped in `.inside__video-frame` (rounded 28px, overflow hidden). It has a thin
    **YouTube-style progress bar** pinned to the bottom (`.inside__progress` / `-fill`), driven by a
    `timeupdate` listener that sets fill width = `currentTime/duration`; resets on loop; the bar is
    `pointer-events:none`, display-only. Video stays `autoPlay loop muted playsInline`, no controls.
  - Right column: **six cards in a 2-col × 3-row grid**. Cards 1–5 are **single statements**
    (`inside.f1`–`f5`) in the display font (`.inside__card-text`, ~17px). **Card 6** (`--steps`) is a
    small heading (`inside.f6Title`) + a **numbered `<ol>`** of `inside.f6Step1/2/3` rendered via CSS
    counters (terracotta number circles, `list-style:none`, no bullets/dashes). Rows are equal-height
    (`align-items: stretch`); statement cards use `justify-content:center` so card 5 stays balanced
    next to the taller card 6. Six inline SVG line icons (accent): lightning, clipboard, eye, globe,
    sparkle, 3D cube. Mobile (≤860px) stacks cards to one column.
- **Hero (`Hero.jsx` / `hero.css`).**
  - The 3D pizza is **display-only**: `auto-rotate` (rotation-per-second 20deg, delay 0),
    `interaction-prompt="none"`, `pointer-events:none`. **No** `camera-controls`, **no** `ar`/AR modes,
    no orbit limits. Don't re-add interactivity or AR.
  - Mobile was reworked into a compact single-column stack (heading, sub, buttons, QR, then the
    phone+pizza as one overlapping pairing). Desktop is a 2-col grid. The "Drag to rotate" caption
    and the QR caption were both removed.
- **Nav (`Nav.jsx`).** Has a **mobile hamburger + drawer** (links + CTA) at ≤767px; language switcher
  stays in the bar. Desktop unchanged.
- **Pricing.** Mobile is a **scroll-snap swipe carousel** opening on the middle (Signature) card,
  with dot indicators. The three "Talk to us" buttons open WhatsApp (`https://wa.me/995598119981`)
  in a new tab. Known minor issue below.
- **FAQ.** Accordion, single-open, 11 items (q1–q11) rendered by looping `Array.from({length: 11})`.
  Was 12; q11 ("which venues") was removed and q12 renumbered to q11.

## Known quirks / gotchas (verify before relying on these)

- **Double-extension asset filename:** `public/images/qr-demo.svg.svg` — referenced (correctly) as
  `/images/qr-demo.svg.svg` in `Hero.jsx` and `TryDemo.jsx`. Renaming the file requires updating both
  refs. (Other earlier double-extension files like `logo.svg.svg` / `favicon-192x192.png.png` have
  since been cleaned up.)
- **Stale URLs still say "sufraar":** `og:url` in `index.html` is `https://sufraar.com/`, and the
  Hero demo button links to `https://menu.sufraar.com/m/demo`. These were left as-is because the real
  Menuar domain wasn't confirmed — check with the user before changing.
- **Pricing mobile carousel** uses full-bleed negative margins that can add ~23px of horizontal page
  scroll at very narrow widths (~360px). Pre-existing, out of scope so far; fix only if asked.
- **Footer links to dead anchors:** the footers still link to `/#how-it-works` and `/#the-menu`
  (deleted sections). Repoint to `#inside-menu` / `#try-it` if you touch the footer.
- **`AGENTS.md`** exists at the repo root (older "Sufra AR" agent notes) — not authoritative for the
  new site. There is no `CLAUDE.md`.

## Working-environment note (important for verification)

Throughout the last session the in-app **Browser preview pane would not composite/display**, so
`screenshot` timed out and WebGL (`<model-viewer>`) didn't paint. Layout was verified via **precise
DOM geometry measurements** (`getBoundingClientRect`, computed styles) through
`mcp__Claude_Browser__javascript_tool`, neutralizing framer-motion transforms when needed — not via
visual screenshots. If you make visual changes, try to get a real screenshot or ask the user to eyeball
it; don't assume the pane will render. To run the preview you may need to create `.claude/launch.json`
(name `menuar-dev`, `npm run dev`, port 5173, `autoPort: true`) and call `preview_start`; remove it when done.

## House rules for copy (the user is strict about these)

- No dashes of any kind used as punctuation, **unless** the user's pasted copy intentionally includes
  one (they'll say so) — then keep it exactly.
- The final sentence of a text block often intentionally has **no full stop**. Don't "correct" it.
- Match existing conventions: centered section headers (eyebrow = 14px uppercase terracotta label,
  then display-font heading, then muted sub), 1200px inner max-width, inline SVG icons.
