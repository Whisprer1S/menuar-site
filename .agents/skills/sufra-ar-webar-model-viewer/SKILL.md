---
name: sufra-ar-webar-model-viewer
description: WebAR and model-viewer workflow for Sufra AR. Use for AR, 3D viewer, GLB assets, model scale, iOS Quick Look, Android Scene Viewer/WebXR, camera orbit, AR launch, and model compatibility tasks.
---

# Sufra AR WebAR Model Viewer

## Scope

Use this skill for:

- `<model-viewer>` rendering and attributes
- Photo/3D viewer behavior
- GLB model path and compatibility investigation
- AR launch issues
- iOS Quick Look behavior
- Android Scene Viewer/WebXR behavior
- model scale, orbit, placement, and viewer performance

Treat AR/model-viewer changes as high risk. Prefer investigation and config comparison before changing shared viewer logic.

## Required AR Invariants

- Preserve `ar`.
- Preserve iOS `ar-modes="quick-look"`.
- Preserve Android `ar-modes="scene-viewer webxr"` unless explicitly asked to test another order.
- Preserve default/fallback `ar-modes="scene-viewer webxr quick-look"`.
- Preserve `ar-scale="fixed"`.
- Preserve `disable-zoom`, `camera-controls`, and existing camera orbit behavior unless directly scoped.
- Preserve `arScale: '1 1 1'` as the default dish config scale.
- Do not add global Android scale multipliers.
- Do not duplicate iOS/Android GLB files.
- Do not edit, rename, move, compress, or delete model/image assets unless explicitly requested.
- Do not change routes, pricing, translations, theme, saved selection, or general UI from this skill unless directly required.
- Do not add backend, database, CMS, login, admin, dashboard, payments, or new dependencies.

## Workflow

1. Inspect `ModelViewerPage`, `hasDishModel`, scale helpers, and relevant dish config before editing.
2. Confirm whether the issue is code, dish config, asset path, or GLB export/compatibility.
3. Compare working and broken dishes before changing shared AR behavior.
4. Keep one shared GLB per dish.
5. Apply changes to shared viewer logic only when the behavior should affect all model-backed dishes.
6. Apply per-dish config changes only when the task explicitly requests per-dish calibration.
7. Avoid rendering `<model-viewer>` in dish cards or menu lists.
8. Run `npm.cmd run build` after code/config changes.
9. Report exact AR attributes/config touched, platform impact, validation result, remaining device-test risks, and a suggested commit message.

## GLB Investigation Checklist

- Confirm exact config `model` path and asset filename/casing.
- Confirm `hasModel` is true only for dishes with a real model.
- Compare file sizes between working and broken models.
- Check whether textures, materials, transparency, origin, bounds, or scale may explain the issue.
- Prefer re-exporting/fixing the GLB over code hacks when a single asset is broken.
- If a placeholder test is needed, recommend it clearly before editing.

## Platform Notes

- iOS Quick Look may use dimensions baked into the USDZ/GLB conversion path.
- Android currently prioritizes Scene Viewer before WebXR because testing showed better placement.
- Desktop should remain a normal 3D preview path.
- AR behavior must be verified on real devices when platform placement or launch behavior changes.
