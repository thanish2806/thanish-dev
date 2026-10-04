---
name: Obsidian Photon
colors:
  surface: '#0B0C10'
  surface-dim: '#07080B'
  surface-bright: '#1C1D25'
  surface-container-lowest: '#050508'
  surface-container-low: '#0B0C10'
  surface-container: '#14161F'
  surface-container-high: '#1C1D25'
  surface-container-highest: '#232530'
  on-surface: '#F8FAFC'
  on-surface-variant: '#94A3B8'
  inverse-surface: '#F8FAFC'
  inverse-on-surface: '#0F172A'
  outline: '#64748B'
  outline-variant: 'rgba(255, 255, 255, 0.08)'
  surface-tint: '#0016F9'
  primary: '#0016F9'
  on-primary: '#FFFFFF'
  primary-container: '#3B82F6'
  on-primary-container: '#00083B'
  inverse-primary: '#93C5FD'
  secondary: '#D10D04'
  on-secondary: '#FFFFFF'
  secondary-container: '#EF4444'
  on-secondary-container: '#3A0301'
  tertiary: '#10B981'
  on-tertiary: '#052E16'
  tertiary-container: '#34D399'
  on-tertiary-container: '#064E3B'
  error: '#EF4444'
  on-error: '#FFFFFF'
  error-container: '#7F1D1D'
  on-error-container: '#FEE2E2'
  background: '#0B0C10'
  on-background: '#F8FAFC'
  surface-variant: '#14161F'
  brand-gradient-start: '#0016F9'
  brand-gradient-mid: '#6D28D9'
  brand-gradient-end: '#D10D04'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sharp: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

# Product Design System: Obsidian Photon

**Obsidian Photon** is the design language, token architecture, and component specification powering Thanish's developer portfolio, product ecosystem (Skill Nest, Nanal Cafe, Notnix), and interactive UI Lab Bento.

---

## 1. Core Philosophy & Design Principles

1. **Precision & Engineering Rigor**: Interfaces are treated like high-performance optical instruments. Layouts are mathematically aligned to an 8px grid with 4px sub-intervals. Monospace tokens maintain zero layout jitter.
2. **Dual-Spectrum Ergonomics**: Native Obsidian Dark (`#0B0C10`) minimizes optical fatigue; Paper Light (`#F8FAFC`) delivers high-contrast readability without glare.
3. **Chromatic Energy**: The signature brand gradient (`#0016F9` Electric Cobalt $\to$ `#6D28D9` Royal Violet $\to$ `#D10D04` Laser Crimson) creates directional momentum and focal priority.
4. **Deliberate Physics**: Tactile micro-interactions (160ms cubic-bezier transitions, micro-scale button depressions, and dynamic pill indicators) give UI components mechanical responsiveness.
5. **Zero-Fluff Accessibility (WCAG 2.1 AA)**: 4.5:1+ contrast on body text, 3:1+ on UI controls, visible focus rings on keyboard navigation, and full screen-reader semantic landmarks.

---

## 2. Color Foundations & Palette Tokens

### 2.1 Theme Modes

#### Dark Mode (Default Canvas: `#0B0C10`)
* **Canvas Ground (`--bg-canvas`)**: `#0B0C10` (99.2% light absorption)
* **Tier 1 Surface (`--bg-elevated`)**: `#14161F` (Structural toolbars, side rails, nested headers)
* **Tier 2 Surface (`--bg-card`)**: `#1C1D25` (Interactive cards, Bento tiles, code containers)
* **Tier 3 Hover (`--bg-card-hover`)**: `#232530` (Active states, lifted cards)
* **Glass Veil (`--bg-glass`)**: `rgba(20, 22, 31, 0.78)` with `backdrop-filter: blur(16px)`

#### Light Mode (Inverted Canvas: `#F8FAFC`)
* **Canvas Ground (`--bg-canvas`)**: `#F8FAFC` (Clean slate paper)
* **Tier 1 Surface (`--bg-elevated`)**: `#F1F5F9` (Subtle recessed container ground)
* **Tier 2 Surface (`--bg-card`)**: `#FFFFFF` (Elevated card planes)
* **Tier 3 Hover (`--bg-card-hover`)**: `#F8FAFC`
* **Glass Veil (`--bg-glass`)**: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)`

### 2.2 Text Hierarchy
| Token | Dark Mode Value | Light Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#F8FAFC` | `#0F172A` | Headings, active values, high-contrast labels |
| `--text-secondary` | `#94A3B8` | `#475569` | Body paragraphs, secondary navigation, descriptions |
| `--text-muted` | `#64748B` | `#64748B` | Timestamps, counters, folio numbering, code annotations |

### 2.3 Brand & Semantic Tokens
* **Electric Cobalt (Primary Accent)**: `#0016F9` (Light focus: `#2563EB`, Dark focus: `#3B82F6`)
* **Laser Crimson (Secondary Accent)**: `#D10D04` (Highlight: `#EF4444`)
* **Signal Emerald (Success / Verify)**: `#10B981` (Surface: `rgba(16, 185, 129, 0.12)`)
* **Amber Core (Warning / In-Progress)**: `#F59E0B` (Surface: `rgba(245, 158, 11, 0.12)`)
* **Photon Cyan (Telemetry / Code)**: `#22D3EE` (Surface: `rgba(34, 211, 238, 0.12)`)
* **Brand Gradient**: `linear-gradient(135deg, #0016F9 0%, #6D28D9 52%, #D10D04 100%)`
* **Subtle Brand Tint**: `linear-gradient(135deg, rgba(0, 22, 249, 0.12) 0%, rgba(109, 40, 217, 0.10) 50%, rgba(209, 13, 4, 0.12) 100%)`

---

## 3. Typography Hierarchy

### 3.1 Typeface Roles
* **Display & Brand Authority**: `Syne` (weights 700, 800) paired with `League Spartan` (weights 600, 700). Characterized by geometric flair, sharp vertices, and tight negative tracking (`-0.03em`).
* **Product Interface & Prose**: `Plus Jakarta Sans` / `Inter` (weights 400, 500, 600, 700). High x-height, open apertures, optimized for high legibility at 12px–16px.
* **Technical Chrome & Code**: `JetBrains Mono` (weights 400, 500, 600). Tabular figures prevent layout shifting during runtime counter/speed updates.

### 3.2 Typographic Scale
| Scale Key | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | `Syne` | 56px | 800 | 64px | -0.03em |
| `display-hero-mobile` | `Syne` | 36px | 800 | 44px | -0.025em |
| `headline-lg` | `Syne` | 32px | 700 | 40px | -0.02em |
| `headline-md` | `Syne` | 24px | 600 | 32px | -0.015em |
| `headline-sm` | `Plus Jakarta Sans` | 18px | 600 | 26px | -0.01em |
| `body-lg` | `Plus Jakarta Sans` | 16px | 400 / 500 | 24px | -0.005em |
| `body-md` | `Plus Jakarta Sans` | 14px | 400 / 500 | 22px | 0em |
| `body-sm` | `Plus Jakarta Sans` | 13px | 400 | 18px | 0em |
| `code-inline` | `JetBrains Mono` | 13px | 500 | 18px | 0em |
| `label-code-md` | `JetBrains Mono` | 12px | 600 | 16px | 0.04em |
| `label-code-sm` | `JetBrains Mono` | 11px | 600 | 14px | 0.06em |

---

## 4. Spacing, Grid & Layout Cadence

### 4.1 Modular Scale (Base: 4px / 8px)
* `space-xs`: `0.25rem` (4px) — Micro-gaps between status dot and text.
* `space-sm`: `0.5rem` (8px) — Pill button padding, tag gaps, inline icon spacers.
* `space-md`: `1.0rem` (16px) — Card internal padding, form input spacing.
* `space-lg`: `1.5rem` (24px) — Bento grid gap, card section separations.
* `space-xl`: `2.5rem` (40px) — Major section header margins.
* `space-2xl`: `4.0rem` (64px) — Page-level vertical rhythm.

### 4.2 Grid Breakpoints & Max Measures
* **Mobile (< 768px)**: 4-column single-stack flow. Outer margin `1.25rem` (20px), gutter `1.0rem` (16px).
* **Tablet (768px — 1024px)**: 8-column layout. Outer margin `2.0rem` (32px), gutter `1.5rem` (24px).
* **Desktop (> 1024px)**: 12-column Bento and asymmetric layout. Max content constraint `1280px`. Outer margin `3.0rem` (48px), gutter `2.0rem` (32px).
* **Reading Measure**: Long-form paragraph lines are clamped to `max-w-3xl` (68–75 characters) to ensure optimal reading velocity.

---

## 5. Elevation, Depth & Edge Illumination

Rather than heavy, opaque drop shadows, **Obsidian Photon** creates atmospheric hierarchy through **progressive surface luminance** and **hairline edge refraction**:

### 5.1 Hairline Borders
* `--border-subtle`: `rgba(255, 255, 255, 0.08)` in dark mode / `rgba(15, 23, 42, 0.09)` in light mode.
* `--border-strong`: `rgba(255, 255, 255, 0.16)` in dark mode / `rgba(15, 23, 42, 0.18)` in light mode.

### 5.2 Atmospheric Shadows & Glows
* **Resting Bento Card**: `0 4px 20px -2px rgba(0, 0, 0, 0.25), 0 0 0 1px var(--border-subtle)`
* **Elevated / Modal Tier**: `0 24px 48px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px var(--border-strong)`
* **Radial Focus Luminescence**:
  `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 22, 249, 0.06), transparent 40%)`

---

## 6. Shapes & Corner Radii

* `rounded-none` (`0px`): Strict terminal blocks and divider rules.
* `rounded-xs` (`4px`): Code inline badges, microscopic tags, status indicator squares.
* `rounded-sm` (`8px`): Compact action buttons, toolbars, input field controls.
* `rounded-md` (`12px`): Primary action buttons, dropdowns, nested sub-panels.
* `rounded-lg` (`16px`): Standard Bento cards, interactive demo containers.
* `rounded-xl` (`20px`): Primary case study hero panels and modal windows.
* `rounded-full` (`9999px`): Filter pills, status chips, floating avatar badges, theme toggles.

---

## 7. Component Library Specifications

### 7.1 Buttons
* **Brand Primary**: Background `var(--brand-gradient)`, text `#FFFFFF`, font `Plus Jakarta Sans` / `JetBrains Mono` 13px weight 600. Radius 12px. Padding 12px 20px. Hover: scales `1.02`, glow intensity +15%. Active: `scale(0.98)`.
* **Elevated Surface (Secondary)**: Background `var(--bg-elevated)`, border `1px solid var(--border-subtle)`, text `var(--text-primary)`. Hover: background `var(--bg-card-hover)`, border `var(--border-strong)`.
* **Ghost / Monospace Tool**: Transparent background, text `var(--text-secondary)`, border `1px solid transparent`. Hover: text `var(--text-primary)`, background `rgba(255, 255, 255, 0.05)`.

### 7.2 Badges & Pills
* **Metric Chip**: JetBrains Mono 11px uppercase, letter-spacing `0.06em`, padding 4px 10px, radius 9999px.
* **Verification Tag**: Background `rgba(16, 185, 129, 0.12)`, text `#10B981`, border `1px solid rgba(16, 185, 129, 0.25)`.
* **Archival Folio**: JetBrains Mono 11px, color `var(--text-muted)`. Example: `01 // ARCHITECTURE`.

### 7.3 Bento Grid Tile
* Structure: Multi-span CSS grid (`grid-cols-1 md:grid-cols-12`).
* Shell: `background-color: var(--bg-card)`, `border: 1px solid var(--border-subtle)`, `border-radius: 1.25rem` (20px), padding `1.5rem` (24px).
* Hover: `transform: translateY(-2px)`, border transitions to `var(--border-strong)` over 200ms.

### 7.4 Form Fields & Searchwells
* Height: 44px (touch-target compliant).
* Background: `var(--bg-elevated)`.
* Border: `1px solid var(--border-subtle)`, focus transitions to `2px solid var(--accent-blue-bright)`.
* Text: `var(--text-primary)`, placeholder: `var(--text-muted)`.

### 7.5 Modals & Overlays
* Backdrop: `rgba(0, 0, 0, 0.70)` with `backdrop-filter: blur(12px)`.
* Container: `max-w-2xl` or `max-w-4xl`, centered, radius 24px, border `1px solid var(--border-strong)`.
* Keyboard: `Escape` key dismissal, initial focus trap, aria-modal="true".

---

## 8. Motion & Kinetics

* **Standard Micro-Interaction**: `160ms cubic-bezier(0.16, 1, 0.3, 1)`
* **Theme & Layout Transition**: `350ms cubic-bezier(0.16, 1, 0.3, 1)`
* **Scale-Down Depress (Active State)**: `transform: scale(0.97)`
* **Hover Elevation**: `transform: translateY(-2px) scale(1.008)`
* **Reduced Motion**: All transitions and animations collapse to `0.01ms` when `@media (prefers-reduced-motion: reduce)` is asserted.
