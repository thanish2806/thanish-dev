## 2023-10-25 - React Router Code Splitting
**Learning:** The application bundles all routes (case studies) into a single main payload. By dynamically importing sub-routes, the initial payload size drops significantly, improving TTI on the root path without degrading UX.
**Action:** Always verify if large route components in SPAs are statically imported, and convert them to use React.lazy() / Suspense when they are not strictly needed on the initial page load.
