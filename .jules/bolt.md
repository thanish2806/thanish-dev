## 2026-10-11 - Lazy Loading Route Components
**Learning:** Found an opportunity to dynamically import heavy React components (like the case study pages) on this SPA because all routes were eagerly loaded initially.
**Action:** Used `React.lazy()` and `Suspense` in `App.jsx` to achieve code splitting and improve initial load time.
