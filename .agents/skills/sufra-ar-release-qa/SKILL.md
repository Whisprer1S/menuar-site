---
name: sufra-ar-release-qa
description: Release and QA workflow for Sufra AR. Use for staging/main safety, Vercel deployment readiness, PR preparation, build checks, route smoke tests, and manual QA before client or production review.
---

# Sufra AR Release QA

## Scope

Use this skill for staging/main safety, Vercel deployment readiness, PR preparation, release checks, build validation, and manual QA planning.

## Branch Safety

1. Check `git status --short`.
2. Check `git branch --show-current`.
3. Work on `staging` unless the user explicitly instructs production/main work.
4. Never switch branches, reset, stage, commit, or push unless the user asks.
5. Do not overwrite unrelated working tree changes.

## Build Validation

- Run `npm.cmd run build` for code, config, translation, route, AR, or docs changes where build relevance is plausible.
- If the first build fails from the known Windows sandbox/esbuild access issue, rerun with approved escalation.
- Treat a second failure as a real project issue and report the error.

## Route Smoke Checklist

Check affected routes first, then core routes:

- `/`
- `/pricing`
- `/about`
- `/privacy`
- `/menu/demo`
- `/menu/demo-cafe`
- `/sufra-old-town` legacy redirect behavior when routing changes are touched
- viewer query routes such as `/menu/demo?dish=pizza&view=viewer&lang=en`

## Manual QA Areas

- Homepage QR demo section and pricing scroll behavior.
- Guest menu header/footer separation.
- Category sticky pills, search, Veg filter, list/grid controls.
- Dish Details to viewer flow.
- Photo/3D toggle.
- Saved selection localStorage behavior.
- Light/dark theme toggle and saved preferences.
- EN/KA/RU language switching.
- AR launch for model-backed dishes on mobile when AR code/config changes.

## Vercel/Deployment Safety

- Confirm the app remains static frontend-only.
- Confirm `vercel.json` route rewrites are not broken.
- Do not add environment-variable dependencies unless explicitly requested.
- Do not add runtime network dependencies for core menu behavior.
- Do not change app code, assets, package files, routes, or deployment config while doing QA unless the task explicitly asks for a fix.
- Preserve EN/KA/RU support, GEL-only pricing, WebAR/model-viewer behavior, and mobile-first guest menu behavior.

## Final Report

Include:

- current branch
- changed files
- build result
- manual checks performed or still needed
- risks
- suggested commit message
- explicit confirmation that no assets/backend/payments/admin changes were made when relevant
