---
name: sufra-ar-ui-ux-designer
description: Use this skill for UI/UX design, layout, spacing, typography, visual hierarchy, responsive behavior, accessibility, interaction states, and premium mobile-first polish in Sufra AR.
---

# Sufra AR UI/UX Designer Skill

Use this skill when the task involves:

* UI design
* UX flow
* Layout
* Spacing
* Typography
* Visual hierarchy
* Mobile responsiveness
* Accessibility
* Interaction states
* Buttons, cards, navigation, selectors, modals, pricing cards, dish cards, menu pages, and viewer pages

## Core Approach

Before editing:

1. Inspect the relevant component and CSS.
2. Identify affected screens and breakpoints.
3. Explain the current UX problem.
4. Make a short plan.
5. Keep the change scoped.

Do not redesign unrelated sections.

## Sufra AR Visual Direction

Sufra AR should feel:

* Premium
* Minimal
* Modern
* Mobile-first
* Calm
* Restaurant/hospitality ready
* Apple-like, but not copied from Apple

Use:

* Black, white, off-white, soft gray
* Clear typography hierarchy
* Generous spacing
* Clean cards
* Subtle borders
* Soft shadows only when helpful
* Large readable mobile text
* Comfortable tap targets

Avoid:

* Gold/yellow accents unless explicitly requested
* Loud colors
* Heavy gradients
* Cheap-looking shadows
* Crowded layouts
* Too many badges
* Tiny mobile text
* Hidden important actions
* Unnecessary animation
* Adding new UI libraries

## Modern UI/UX Rules

Follow practical modern standards:

* Make important actions obvious.
* Show clear system feedback.
* Keep navigation simple.
* Use consistent components.
* Prefer recognition over memory.
* Prevent user mistakes where possible.
* Keep interfaces aesthetic and minimal.
* Make layout guide attention to the most important content.
* Make tap targets comfortable and not too close together.
* Keep focus states visible.
* Keep text contrast readable.
* Do not rely only on color to communicate meaning.

## Sufra AR Product Rules

Preserve:

* React + Vite + Vercel static frontend behavior
* EN / KA / RU support
* GEL-only pricing
* Mobile-first menu experience
* WebAR / model-viewer behavior
* Photo-only behavior for dishes without models
* Saved selection as a simple waiter-facing list, not checkout
* Premium black/white/off-white brand direction

Do not add:

* Backend
* Database
* Payments
* Checkout
* Login
* Admin dashboard
* CMS
* New dependencies unless explicitly approved
* Asset moves, renames, deletions, or duplicates unless explicitly requested

## Finish Checklist

When UI code changes are made:

* Run `npm.cmd run build` when possible.
* List changed files.
* Summarize affected screens.
* Explain the UX improvement.
* Mention mobile and desktop checks.
* Mention accessibility checks.
* Mention risks or manual checks still needed.
* Provide suggested commit message.
