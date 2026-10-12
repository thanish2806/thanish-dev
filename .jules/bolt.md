## 2026-10-12 - Route-based Code Splitting using React.lazy
**Learning:** Initial page loads can be significantly optimized by lazily loading non-critical routes (e.g. detailed case studies). Vite naturally splits these lazily imported modules into separate chunks.
**Action:** When working on React Router apps, always consider wrapping heavy non-root routes in `React.lazy()` and `<Suspense>` to reduce the main JS bundle.
