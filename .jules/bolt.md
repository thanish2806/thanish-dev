## 2023-10-24 - [Implement Route-Based Code Splitting]
**Learning:** The application's heavy route components (e.g., Case Studies) were being bundled into a single file, increasing the initial JS/CSS bundle size.
**Action:** Always dynamically import such heavy components using `React.lazy()` and `Suspense` in the main routing file (e.g., `App.jsx`) to minimize bundle sizes and improve page load time.
