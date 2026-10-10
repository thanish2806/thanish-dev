## 2026-10-10 - [Implement Route-Level Code Splitting]
**Learning:** Initial application bundle is unnecessarily large due to heavy case study components being bundled in the main entry point despite only being used on specific routes.
**Action:** Use React.lazy() and Suspense to lazily load route components and improve initial page load performance.
