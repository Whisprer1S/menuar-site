---
name: sufra-ar-documentation-sync
description: Documentation synchronization workflow for Sufra AR. Use when behavior, routes, config fields, AR rules, pricing, setup, deployment, assets, or client menu structure changes need docs updates.
---

# Sufra AR Documentation Sync

## Scope

Use this skill when a change affects:

- routes or route behavior
- restaurant/client config shape
- dish fields, asset paths, or model rules
- AR/model-viewer behavior
- pricing plans, setup notes, or visible commercial content
- theme, language, menu UX, or saved selection behavior
- deployment/build instructions
- footer/contact/privacy/marketing behavior

## Workflow

1. Inspect the actual code/config change first.
2. Search docs for old behavior using `rg`.
3. Update only sections that are stale because of the change.
4. Keep docs factual and concise.
5. Do not rewrite unrelated sections.
6. Keep route lists, file lists, and known asset lists current when they are directly affected.
7. Avoid documenting temporary experiments as permanent product behavior.
8. Run build only if code changed or the user asks; docs-only changes usually do not need build.
9. Report docs changed, sections updated, and any intentionally unchanged docs.

## Primary Docs

- `AGENTS.md` for operational rules and guardrails.
- `PROJECT_DOCUMENTATION.md` for architecture, routes, data, AR, and product behavior.
- `README.md` for compact project setup and common workflow notes.

## Sufra AR Documentation Rules

- Keep the app described as frontend-only/static unless that actually changes.
- Preserve React + Vite + Vercel project framing.
- Do not describe backend, payment, login, dashboard, or admin features unless implemented by explicit request.
- Do not change app code, routes, assets, package files, or product behavior from this skill.
- Keep AR rules aligned with code: iOS Quick Look, Android Scene Viewer before WebXR, fixed AR scale, one shared GLB per dish.
- Keep menu routes and guest-facing shell behavior accurate.
- Keep current demo dish/category/asset information accurate only when docs already list those details.
- Keep Georgian/Russian copy references intact when visible copy changes.

## Final Report

Include:

- docs files changed
- stale references removed or corrected
- behavior/config now documented
- build result if run
- risks or manual checks
- suggested commit message
