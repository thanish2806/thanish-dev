## 2023-10-24 - Route Code Splitting
**Learning:** This codebase imports large case study components statically in App.jsx. This was a significant frontend performance bottleneck because the initial JS and CSS bundle downloaded on the homepage contained all case studies.
**Action:** Always check React Router setup in `App.jsx` or similar entry points for static imports of heavy route components. Use React.lazy and Suspense to dynamically import them and reduce initial load times.
