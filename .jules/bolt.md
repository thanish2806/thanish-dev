## 2024-10-17 - React Route Code Splitting
**Learning:** Heavy route components (e.g., Case Studies) in this React + Vite architecture should be dynamically imported using React.lazy() and Suspense to minimize initial JS and CSS bundle sizes, significantly improving the initial load time of the Home page.
**Action:** Always prefer lazy loading for large route components that are not needed on the initial render path.
