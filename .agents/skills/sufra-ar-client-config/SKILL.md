---
name: sufra-ar-client-config
description: Client restaurant configuration workflow for Sufra AR. Use for restaurant slugs, menu categories, dish data, translated client content, image/model asset paths, calories, ingredients, and onboarding or updating client menu configs.
---

# Sufra AR Client Config

## Scope

Use this skill for:

- creating or updating restaurant config files
- adding or removing categories and dishes
- changing slugs, names, subtitles, map links, or menu metadata
- updating translated dish/category content
- wiring images and GLB model paths
- setting photo-only versus AR-capable dishes
- checking client menu route compatibility

## Workflow

1. Inspect `src/data/restaurants/index.js` and the target restaurant config.
2. Confirm the public route/slug and whether legacy routes must remain.
3. Check existing category ids and dish ids before adding or removing data.
4. Keep all restaurant/menu data in config files, not components.
5. Add translated fields for `en`, `ka`, and `ru` wherever the field is user-facing.
6. Verify exact asset filenames and casing in `public/images/dishes` and `public/models/dishes`.
7. Do not duplicate, move, rename, or delete assets unless explicitly requested.
8. Keep `hasModel: false` and `model: ''` for photo-only dishes.
9. Keep model-backed dishes on safe defaults unless the task requests calibration.
10. Run `npm.cmd run build` for config changes that affect app rendering.

## Dish Data Rules

Each active dish should include the fields expected by `AGENTS.md`, including:

- `id`
- `categoryId`
- translated `name`
- translated `description`
- `priceGEL`
- numeric `calories` when available
- `image`
- `model`
- `hasModel`
- `ingredients`
- `arScale`
- `arPlacement`
- `cameraOrbit`
- `fieldOfView`

Use `arScale: '1 1 1'` by default. Omit `platformScale` unless platform-specific testing proves it is needed.

## Category and Filter Rules

- Food categories use All / Veg filters.
- Meat is not shown as a filter or badge in the demo UI.
- Drinks, if added for a future menu, should use drink filters and remain photo-only.
- Category pills should continue to scroll to sections; do not reintroduce one-category-only filtering unless explicitly requested.

## Asset Checks

- Confirm every configured image path exists.
- Confirm every configured model path exists for `hasModel: true`.
- Confirm no removed dish remains in saved-selection-sensitive data paths; generic missing-dish filtering should handle old localStorage ids.
- Report unused-looking assets instead of deleting them unless asset cleanup is explicitly approved.

## Preserve / Do Not Change

- Preserve the static multi-restaurant config architecture.
- Preserve EN/KA/RU translated client content and GEL-only prices.
- Do not hardcode client data in components.
- Do not change shared menu rendering, routes, AR/model-viewer behavior, or CSS unless the config task explicitly requires it.
- Do not add backend, database, CMS, login, admin, dashboard, payments, checkout, or new dependencies.

## Final Report

Include:

- restaurant config files changed
- final categories and dishes
- asset paths used
- translated fields added/changed
- build result
- risks and manual checks
- suggested commit message
