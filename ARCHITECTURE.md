# System Architecture: Thanish Portfolio & Product Ecosystem

> **Project**: Thanish Developer Portfolio & Interactive Product Suite  
> **Core Stack**: React 19, Vite 6, Tailwind CSS v4, Lucide Icons, EmailJS Browser  
> **Host / Infrastructure**: Netlify Edge, Global CDN, Git-Triggered CI/CD  
> **Architecture Paradigm**: Component-Driven SPA with Zero-Refresh Micro-Routing & Token-Driven Styling  

---

## 1. High-Level Architectural Topology

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                             Client Browser (Viewport)                         │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │ HTTP/2 / TLS 1.3
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│                      Netlify Edge CDN / Static Hosting                        │
│             (Asset Caching, Gzip/Brotli Compression, SPA Rewrites)            │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │ Serves Bundles
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│                               React 19 Runtime                                │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                    App.jsx (Root Orchestrator)                          │  │
│  │  - Dual Theme State ('dark' | 'light')                                  │  │
│  │  - Single-Page Micro-Router ('home' | 'skillnest' | 'nanalcafe')        │  │
│  │  - Global Modal Bus (Contact, Resume/CV, Notnix Sandbox)                │  │
│  │  - Global Toast Notification Bus (Clipboard & Form Dispatch)            │  │
│  └────────────────────────────────────┬────────────────────────────────────┘  │
│                                       │                                       │
│          ┌────────────────────────────┼────────────────────────────┐          │
│          ▼                            ▼                            ▼          │
│  ┌───────────────┐            ┌───────────────┐            ┌───────────────┐  │
│  │   Home View   │            │  Case Study 1 │            │  Case Study 2 │  │
│  │ (Hero, Bento, │            │ (Skill Nest   │            │ (Nanal Cafe   │  │
│  │  Stack, Open  │            │  Curriculum,  │            │  Ordering,    │  │
│  │  Source, Lab) │            │  Metrics)     │            │  Booking)     │  │
│  └───────────────┘            └───────────────┘            └───────────────┘  │
│          │                                                                    │
│          ▼                                                                    │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                     Interactive UI Lab Bento Grid                       │  │
│  │  - Orbital Preloader Physics Simulation                                 │  │
│  │  - Table Reservation State Machine                                      │  │
│  │  - Micro-Interaction Mode Toggle                                        │  │
│  │  - Live Dynamic Type Specimen Tester                                    │  │
│  │  - Interactive Color Harmonics Swatch Engine                            │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                    Design System & Token Foundation                     │  │
│  │  - Obsidian Photon Tokens (src/design-system/tokens.json)               │  │
│  │  - CSS Custom Properties (src/design-system/tokens.css, App.css)        │  │
│  │  - Tailwind CSS v4 Engine (@tailwindcss/vite)                           │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │ External Telemetry & APIs
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│                           External Cloud Services                             │
│  - EmailJS API (Direct browser-to-inbox dispatch with fallback keys)          │
│  - GitHub API / Open Source Repositories (External links & stars)             │
│  - Google Fonts CDN (Syne, Plus Jakarta Sans, JetBrains Mono)                 │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Directory & Module Structure

```
c:\REACT PROJECTS\portfolio\
├── index.html                        # Application entry point, SEO tags, canonical URL
├── vite.config.js                    # Vite 6 config with @tailwindcss/vite plugin
├── package.json                      # Dependencies: React 19, Lucide, EmailJS, Tailwind v4
├── DESIGN_SYSTEM.md                  # Comprehensive design system manual & token spec
├── ARCHITECTURE.md                   # System architecture documentation (this file)
│
├── public/                           # Static assets
│   ├── my-logo-icon.png              # High-res brand favicon
│   ├── robots.txt                    # Search engine crawling rules
│   ├── sitemap.xml                   # XML sitemap for SEO discovery
│   └── fonts/                        # Local brand webfonts (Aqua, Spartan, etc.)
│
├── src/
│   ├── main.jsx                      # React 19 DOM bootstrap
│   ├── App.jsx                       # Primary application orchestrator & views
│   ├── App.css                       # Global styles, Tailwind v4 import, font faces
│   │
│   ├── design-system/                # Obsidian Photon Design System
│   │   ├── tokens.json               # W3C DTCG format machine-readable tokens
│   │   ├── tokens.css                # Production CSS variables & utility classes
│   │   └── index.js                  # JavaScript ES module token exports
│   │
│   ├── Project01CaseStudy/           # Skill Nest case study legacy components
│   │   ├── P1csmain.jsx
│   │   ├── CsProjectAnalysisSec.jsx
│   │   └── CsProjectHeroContent.jsx
│   │
│   ├── Project02CaseStudy/           # Nanal Cafe case study legacy components
│   │   ├── P2csmain.jsx
│   │   ├── CsProjectAnalysisSecp2.jsx
│   │   └── CsProjectHeroContentp2.jsx
│   │
│   ├── HeroSection.jsx / .css        # Standalone Hero module
│   ├── Navbar.jsx / .css             # Standalone responsive Navbar module
│   ├── OpenSourceSection.jsx / .css  # GitHub projects showcase
│   ├── projects.jsx / .css           # Project grid module
│   ├── footer.jsx / .css             # Footer with live status & social links
│   └── ThemeContext.jsx              # React context for theme persistence
```

---

## 3. Core Subsystems

### 3.1 Orchestration & State Flow (`src/App.jsx`)
`App.jsx` acts as the single source of truth for all runtime state:
1. **Theme Controller**: Toggles between `'dark'` (`#0B0C10` Obsidian) and `'light'` (`#F8FAFC` Paper). Controls the root class (`theme-dark` vs `theme-light`) which shifts all CSS Custom Properties instantaneously with zero re-rendering overhead.
2. **Micro-Router**: Zero-latency internal router that handles switching between `'home'`, `'skillnest-casestudy'`, and `'nanalcafe-casestudy'` views while preserving scroll positions and navigation history.
3. **Modal Bus**: Manages modal states (`isContactOpen`, `isResumeOpen`, `isNotnixModalOpen`) with global accessibility hooks (such as closing on `Escape` key press and background body lock).
4. **Toast Notification Bus**: Transient alert system that confirms clipboard copy events (hex codes, email, commands) and form submissions with a 2800ms auto-dismiss lifecycle.

### 3.2 UI Lab Bento Grid Subsystem
The UI Lab is an interactive micro-component sandbox showcasing design engineering prowess:
* **Orbital Preloader Physics**: Simulates animated orbital SVG tracks with dynamic speed controls (`0.5x`, `1x`, `2x`) and variant toggle (`orbital` vs `pulse`).
* **Reservation Engine**: Multi-step state machine (`idle` $\to$ `selecting` $\to$ `confirmed`) with dynamic guest selector and time slots.
* **Authentication Mode Switcher**: Micro-switch demonstrating physics-based slider animations between login and signup modes.
* **Live Type Specimen**: Real-time font-weight manipulator adjusting typography specimen rendered in `Syne` and `Plus Jakarta Sans`.
* **Color Harmonics Swatch Engine**: Click-to-copy color token showcase featuring dynamic hex copy with instant toast confirmation.

### 3.3 Contact & Lead Generation Pipeline
* **Engine**: Integrated via `@emailjs/browser`.
* **Validation**: Pre-dispatch client-side validation ensuring `name`, `email`, and `message` are non-empty.
* **Resilience**: Configured with fallback environment keys (`VITE_EMAILJS_*`) and a graceful fallback simulation to guarantee the user is never left in an unhandled error state.

---

## 4. Performance & Bundle Metrics

| Attribute | Implementation | Metric |
| :--- | :--- | :--- |
| **JS Bundle Size** | Vite 6 ESBuild tree-shaking & rollup chunking | `299.8 kB` raw (`83.2 kB` gzipped) |
| **CSS Bundle Size**| Tailwind CSS v4 JIT compiler + CSS variables | `41.5 kB` raw (`7.7 kB` gzipped) |
| **Font Delivery**  | `@import` Google Fonts with `font-display: swap` | Zero layout shift (CLS < 0.01) |
| **First Contentful Paint** | Zero blocking artificial delays | `< 0.8s` on 4G fast network |
| **Accessibility Score** | Semantic landmarks, ARIA labels, focus outlines | `99/100` Lighthouse target |

---

## 5. Security & Accessibility Architecture

1. **Accessibility (WCAG 2.1 AA)**:
   * High-contrast focus indicators (`:focus-visible` with `2px solid var(--accent-blue-bright)`).
   * Modals equipped with `role="dialog"`, `aria-modal="true"`, and `Escape` key event listeners.
   * `prefers-reduced-motion` media queries that collapse transitions to `0.01ms` for motion-sensitive users.
2. **Content Security & Safety**:
   * All external links enforce `rel="noopener noreferrer"`.
   * Form inputs sanitized and validated prior to dispatch.
   * Zero sensitive keys in client source; all third-party IDs managed via environment variables.

---

## 6. Continuous Deployment & Pipeline

```
Local Workspace (Developer)
  ├── git commit & push
  ▼
GitHub Repository (thanish2806/portfolio)
  ├── Webhook trigger on branch: main
  ▼
Netlify CI/CD Pipeline
  ├── Environment: Node.js 20+
  ├── Command: npm run build
  │   ├── ESLint check (eslint .)
  │   ├── Tailwind CSS v4 processing
  │   └── Vite 6 production roll-up
  ▼
Netlify Global CDN Edge
  ├── Deploy to: https://thanishdev.netlify.app/
  └── Automated cache invalidation & SSL provisioning
```
