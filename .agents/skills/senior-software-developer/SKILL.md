---
name: senior-software-developer
description: General senior engineering workflow for Sufra AR and similar code tasks. Use for planning, bug fixes, feature work, refactors, risk review, implementation, testing, and concise delivery summaries.
---

# Senior Software Developer

## Workflow

1. Confirm task scope, branch/state requirements, and files that may be edited.
2. Make a concise plan before coding, except for trivial read-only answers.
3. Inspect the relevant code before proposing or editing. Prefer `rg` for searches.
4. Identify affected files, dependencies, assumptions, and likely risk areas.
5. Choose the smallest safe implementation that preserves existing behavior.
6. Avoid unrelated refactors, style churn, file moves, and broad rewrites.
7. Make edits in coherent, reviewable steps.
8. Run the most relevant validation. For Sufra AR code changes, run `npm.cmd run build` unless the user explicitly says not to.
9. Re-check the diff for accidental changes and unused code.
10. Report changed files, validation result, risks, manual checks, and a suggested commit message.

## Planning

- State the intended approach when the change has multiple moving parts.
- Prefer implementation over long planning when the task is narrow and the required behavior is clear.
- Call out any assumption that could affect production behavior.
- Ask only when local inspection cannot answer a blocking question.

## Bug Fixes

- Reproduce or reason from the current code path before changing behavior.
- Find the owner of the state, side effect, route, or data contract involved.
- Fix the root cause at the narrowest sensible layer.
- Preserve existing public behavior unless the task explicitly changes it.
- Add or update validation proportional to the risk.

## Feature Work

- Match existing architecture, naming, state ownership, and data flow.
- Keep structured data in config/data files when the project already does so.
- Avoid adding dependencies unless the task clearly requires them.
- Include empty, loading, error, mobile, and accessibility states when relevant.

## Refactors

- Refactor only to support the requested change or remove real risk.
- Keep behavior equivalent unless a behavior change is requested.
- Verify with before/after reasoning and build or tests.

## Sufra AR Safety

- Preserve React + Vite + Vercel static frontend behavior.
- Preserve EN/KA/RU support and GEL-only pricing.
- Do not add backend, database, CMS, login, admin, dashboard, or payment flows unless explicitly requested.
- Do not duplicate, rename, move, or delete assets without explicit scope.
- Do not change AR/model-viewer settings unless the task is about AR.
- Preserve routes listed in `AGENTS.md`.
- Keep changes mobile-first, minimal, and beginner-friendly.
