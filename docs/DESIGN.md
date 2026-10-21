---
name: Obsidian Blueprint
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393e'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e8'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e4e1e8'
  inverse-on-surface: '#303035'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#f5fff3'
  on-secondary: '#003919'
  secondary-container: '#34ff8c'
  on-secondary-container: '#007239'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#0f69dc'
  on-tertiary-container: '#edf0ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#60ff98'
  secondary-fixed-dim: '#00e478'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#131317'
  on-background: '#e4e1e8'
  surface-variant: '#353439'
typography:
  display-2xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-2xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an Awwwards-caliber creative engineering and design collective identity where strict architectural discipline collides with bold digital disruption. Built for elite creative developers, generative artists, interactive directors, and systems architects, the visual atmosphere communicates raw algorithmic power, high-performance web craftsmanship, and refined editorial elegance.

The design movement blends **Brutalism** and **Technical Editorial Minimalism**. Surfaces discard generic corporate gradients and fuzzy neo-skeuomorphic shadows. Instead, the interface relies on structural hairline coordinates, authentic terminal telemetry, and high-contrast typographic collisions. Space is treated like an architectural blueprint: hairline grids, crosshair markers (`+`), and monospaced syntax accents (`{ d }`, `[ 01 // ARCH ]`, `0xDEV`) frame high-contrast grotesque typography. The emotional impact is cold, precise, electric, and unapologetically avant-garde.

## Colors

The palette operates on strict functional stratification within a pure dark-mode environment:

- **Void Background (`#08080C`)**: The foundational canvas, providing infinite optical depth, zero reflection, and high visual contrast.
- **Surface Tier 1 (`#0D0E15`) & Tier 2 (`#151824`)**: Dark carbon and elevated slate tones reserved for structured interactive blocks, modal panes, and telemetry readouts.
- **Structural Blueprint Stroke (`#1E2333`) & Grid Hairlines (`rgba(255, 255, 255, 0.06)`)**: Architectural boundary definitions that organize content without heavy visual bulk.
- **Electric Royal Blue (`#2563EB`) & Ion Blue (`#3B82F6`)**: The primary interactive channel, powering call-to-actions, focus halos, brand glyph highlights, and active state indicators.
- **Cyber Neon Green (`#00FF87`) & Emerald (`#10B981`)**: Disruption accents used sparingly for live status telemetry, active nodes, verified tags, and terminal cursor pulses.
- **High-Contrast Typography (`#FFFFFF`, `#F1F5F9`, `#94A3B8`, `#64748B`)**: Stark editorial white for monolithic headers down to muted steel and titanium grays for data metadata and line numbers.

## Typography

Typographic tension is established through a strict dichotomy: aggressive, tight-tracked grotesque editorial headlines paired with ultra-precise, monospaced computational syntax and utilitarian body copy.

- **Display & Headlines (`Space Grotesk`)**: Formulated with aggressive negative tracking (`-0.02em` to `-0.04em`) to forge a dense typographic block. Used for manifestos, disruptive headlines, project titles, and section coordinates.
- **Body & Longform (`Inter`)**: Engineered for effortless legibility against deep dark surfaces. Kept to a line length ceiling of 65 characters to preserve fast scan speeds.
- **System Telemetry & Metadata (`JetBrains Mono`)**: Formatted in uppercase with extended positive tracking (`+0.08em` to `+0.1em`). Used exclusively for bracket notations (`{ ... }`), matrix coordinates (`[ 01 // ARCH ]`), timestamp stamps, commit hashes, and system metrics.

## Layout & Spacing

The layout model uses a **12-column fluid architectural grid** framed by a maximum content width of 1440px. The structural grid is exposed visually through `rgba(255, 255, 255, 0.06)` hairline boundaries and coordinate intersections.

- **Macro Cadence**: Sections transition with wide exponential breathing room (96px to 128px on desktop, scaling to 48px to 64px on mobile) to produce museum-grade, editorial showcase pacing.
- **Micro Telemetry Density**: Internal cards, telemetry blocks, and command strips maintain compact, dense spacing (`space-xs` through `space-md`) to emulate code editors, audio mixers, and CAD interfaces.
- **Breakpoints & Adaptation**:
  - `Desktop (>= 1024px)`: Full 12-column matrix with continuous vertical dividers, interactive cursor tracking, and split-screen editorial balances.
  - `Tablet (768px - 1023px)`: 6-column reflow; side-by-side modules collapse to 2 columns with visible divider borders.
  - `Mobile (< 768px)`: 4-column single-stream stack with persistent 16px screen margins (`margin-sm`), where hairline dividers translate to bottom borders (`border-b border-[#1E2333]`).

## Elevation & Depth

This system avoids blurred drop shadows and heavy skeuomorphic shading, relying instead on **low-contrast outlines, architectural hairline borders, and targeted luminescent glow states**:

- **Layer 0 (Canvas)**: Background `#08080C` overlaid with technical 64px grid matrix guidelines.
- **Layer 1 (Card & Module Slabs)**: Surface `#0D0E15` bounded by a 1px border in `#1E2333`. Corner boundaries feature subtle crosshair tick marks (`+`).
- **Layer 2 (Overlays & Flyouts)**: Elevated Slate `#151824` with backdrop blur (`backdrop-blur-md` over 85% opacity) and a razor-thin 1px highlight stroke of `rgba(255, 255, 255, 0.08)`.
- **Interactive Luminescence**: Depth during interaction is communicated via localized luminescence. Primary CTAs cast a controlled electric aura (`box-shadow: 0 0 24px rgba(37, 99, 235, 0.35)`), while active radar indicators pulse a pure cyber-green halo (`box-shadow: 0 0 12px rgba(0, 255, 135, 0.45)`).

## Shapes

The shape system is deliberately sharp, crisp, and industrial. It adopts soft architectural chamfers (`roundedness: 1`), keeping corner radiuses between 2px (`rounded-xs`) and 6px (`rounded-md`). Bubbly radii are strictly avoided.

- **Inputs, Buttons, and Data Blocks**: Styled with 2px to 4px radiuses (`rounded-xs` / `rounded-sm`) to emulate physical scientific instruments and technical terminals.
- **Large Cards & Panels**: Clipped to 6px maximum (`rounded-md`), bounded by crisp 1px strokes.
- **Pills**: Reserved exclusively for live status chips, category micro-tags, and interactive cursor indicators (`rounded-full`).

## Components

### Buttons
- **Primary CTA**: Solid Electric Royal Blue (`#2563EB`) fill with `#FFFFFF` text in `Space Grotesk` medium. Crisp 4px corners (`rounded-sm`). On hover, smoothly transitions to `#3B82F6` accompanied by an electric blue luminescent aura (`box-shadow: 0 0 20px rgba(37, 99, 235, 0.4)`).
- **Secondary Ghost Action**: Deep Carbon (`#0D0E15`) surface, 1px perimeter border in `#1E2333`, typography in `#F1F5F9`. On hover, the border snaps to `#00FF87` or `#2563EB` with text turning stark white.
- **Terminal Syntax Action**: Pure monospace trigger enclosed in bracket syntax: `[ RUN_EXPLORE -> ]` rendered in `JetBrains Mono` 12px with micro architectural corner ticks.

### Chips & Status Badges
- **Live Node Badge**: Pill container with a semi-opaque `#0D0E15` fill, 1px border (`#1E2333`), and a 6px pulsating `#00FF87` dot on the left. Text is set in uppercase `label-tech` (`SYSTEM_ONLINE // 2026`).
- **Category Filter**: Rectangular 2px radius chip in `#151824` with `#94A3B8` monospace copy, transforming to electric blue outline and stark white text when selected.

### Input Fields & Controls
- **Text Inputs**: Recessed `#08080C` foundation with a 1px `#1E2333` boundary. Text in `Inter` 14px or `JetBrains Mono` 13px. On focus, the border transitions immediately to `#2563EB` with a tight 2px outer aura (`rgba(37, 99, 235, 0.25)`). Labels sit above fields with syntax notation (e.g., `cmd:terminal_input *`).
- **Checkboxes & Radios**: 16px square or circular structural boxes with a 1px `#1E2333` stroke. Checked state illuminates in `#2563EB` or `#00FF87` with high-contrast glyph indicators.

### Cards & Project Showcases
- **Structure**: Surface `#0D0E15`, framed in 1px `#1E2333`, internal padding of 24px (`space-lg`) to 32px (`space-xl`).
- **Architectural Accents**: Subtle coordinate labels in the upper header (`[ 01 // INTERACTIVE ]`), hairline division lines between preview media and metadata, and hairline crosshair indicators (`+`) fixed at the top-right corner.

### Navigation & Command Dock
- **Architecture**: Floating or top-anchored architectural bar. Composed of translucent `#08080C` (85% opacity) with `backdrop-blur-md` and a 1px bottom border in `rgba(255, 255, 255, 0.08)`.
- **Identity Lockup**: Monolithic grotesque brand mark locked with electric brackets `{ d }` or `[ DEVIGN // LAB ]`.
- **Links**: Monospaced uppercase links with hover indicator lines sliding in from the left in `#2563EB`.

### Custom Interactive Cursor (Desktop)
- Dual-layer pointer: A precision 4px neon green center dot coupled with a 32px lagging wireframe ring rendered with `mix-blend-mode: difference`, expanding and snapping to clickable targets on hover.