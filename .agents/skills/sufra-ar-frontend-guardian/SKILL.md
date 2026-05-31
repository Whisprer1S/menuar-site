---
name: sufra-ar-frontend-guardian
description: Frontend guardrail workflow for Sufra AR UI, styling, routes, translations, pricing, theme behavior, and responsive guest menu UX. Use for website/menu visual changes and frontend behavior cleanup.
---

# Sufra AR Frontend Guardian

## Scope

Use this skill for changes involving:

- React UI in `src/App.jsx`
- Styling in `src/styles.css`
- routes and layout shells
- translations in `src/data/translations.js`
- pricing display using `src/data/plans.js`
- site/menu theme behavior
- responsive menu UX, category pills, search, filters, saved selection, and footer/header behavior

## Workflow

1. Read `AGENTS.md` and inspect the current UI code path before editing.
2. Identify whether the change belongs to marketing pages, guest menu routes, viewer pages, or shared UI.
3. Confirm the allowed files and avoid app-wide refactors.
4. Update visible text through the translation system for `en`, `ka`, and `ru`.
5. Preserve route behavior for `/`, `/pricing`, `/about`, `/privacy`, `/menu/demo`, `/menu/demo-cafe`, and legacy redirects.
6. Keep CSS scoped to existing class patterns and avoid heavy visual effects.
7. Run `npm.cmd run build` for code or translation changes.
8. Report changed files, affected routes, validation, risks, manual checks, and a suggested commit message.

## UI Rules

- Keep the design premium, minimal, mobile-first, and black/white.
- Preserve React + Vite + Vercel static frontend behavior.
- Preserve EN/KA/RU support and GEL-only pricing.
- Do not use gold/yellow accents.
- Do not crowd the guest menu header.
- Guest-facing menu routes should not show the full marketing header/footer.
- Marketing pages should keep the full marketing shell unless explicitly changed.
- Category pills should stay horizontal, swipeable, sticky when expected, and tappable.
- Search, Veg filter, saved selection, Details, and language/theme controls must keep working.
- Avoid overlays or gradients that cover text, cards, badges, buttons, or AR controls.

## Translation Rules

- Add or update all visible copy in English, Georgian, and Russian.
- Keep `Sufra AR`, `WebAR`, `3D/AR`, `GEL`, emails, URLs, and social handles unchanged.
- Do not hardcode multilingual strings in JSX when `translations.js` is the established source.

## Pricing Rules

- Use existing plan data and translation keys.
- Do not add payment logic or imply checkout.
- Keep Basic, Pro, and Custom behavior unless the task explicitly changes pricing.

## Theme Rules

- Preserve separate global site theme and menu theme state.
- Preserve saved preferences unless the task explicitly changes persistence.
- Verify both light and dark mode for menu UI changes.

## AR Boundary

- Do not change `<model-viewer>`, AR modes, scale, camera, model paths, GLB files, or AR launch behavior from this skill unless the task explicitly moves into AR scope.
- Do not add backend, database, CMS, login, admin, dashboard, payments, checkout, or new dependencies unless explicitly requested.
