---
name: daniele-summit-design
description: Use this skill to generate well-branded interfaces and assets for the Daniele Summit brand (an AI & Innovation event), either for production or throwaway prototypes/mocks. Futuristic dark theme with neon blue→purple gradients, Space Grotesk + Inter type, glass cards, and subtle motion. Contains design guidelines, tokens, fonts, assets, and a React UI kit.
user-invocable: true
---

# Daniele Summit — Design Skill

Read `README.md` first for the full system (content tone, visual foundations,
iconography). Then explore:

- `colors_and_type.css` — design tokens (CSS vars) for color, type, spacing, radius, shadow, motion.
- `ui_kits/landing/` — React/JSX recreations of the landing components (`Components.jsx` + `index.html`).
- `assets/` — brand imagery (`versus.png` editorial banner, `iso-ai.png` isometric illustration).
- `preview/` — visual reference cards for tokens and components.

## Quick rules
- **Background** dark (`#050818`); never light themes.
- **Accents** always the blue→purple gradient (`oklch(0.72 0.22 220)` → `oklch(0.72 0.22 290)`),
  optionally extended to magenta `#ff6af0` for headline keywords.
- **Type:** Space Grotesk (headings, tight tracking) + Inter (body).
- **Buttons/chips/badges:** pill radius (50px); primary button carries a neon glow shadow.
- **Cards:** translucent glass (`rgba(10,14,40,.7)`) + `backdrop-filter: blur(12px)` + cold border; lift on hover.
- **Motion:** subtle — scroll reveals (fade+rise), particle field, soft hover transitions. No heavy bounces.
- **Copy:** Portuguese, second person ("você"), confident and provocative; antitheses like
  `Estratégia > Ferramenta`. Sentence case; UPPERCASE eyebrows. Emoji sparingly (prefer Lucide icons).

## How to work
If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
produce static HTML files for the user to view. For production code, copy assets and apply
the rules above to become an expert in this brand.

If invoked without guidance, ask the user what they want to build, ask a few focused
questions, then act as an expert designer outputting HTML artifacts or production code.
