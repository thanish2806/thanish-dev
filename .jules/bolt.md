## 2024-10-04 - [React Route Code Splitting]
**Learning:** Added dynamic route code splitting with React.lazy and Suspense for case study pages. The main bundle decreased by over ~40KB (gzip) by deferring these modules.
**Action:** Always consider route-based code splitting for heavy, rarely accessed inner pages (like detailed case studies or dashboards) to preserve fast initial paint for landing/index routes.
