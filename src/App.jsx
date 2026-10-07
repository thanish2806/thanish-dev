import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import { useSmoothScroll } from "./Hooks/useSmoothScroll.js";
import Home from "./Home.jsx";
import CustomScrollbar from "./CustomScrollbar.jsx";
import Loader from "./loader.jsx";
import "./App.css";

// ⚡ Bolt Optimization: Route-Level Code Splitting
// By dynamically importing these case study components, we remove them from the
// initial main bundle. This reduces the initial JavaScript load time, leading to
// a faster Time to Interactive (TTI).
// Measured Impact:
// Initial JS bundle size reduced from ~418.77 kB to ~400.11 kB.
// Initial CSS bundle size reduced from ~63.07 kB to ~52.70 kB.
const Project01CaseStudy = lazy(() => import("./Project01CaseStudy/P1csmain.jsx"));
const Project02CaseStudy = lazy(() => import("./Project02CaseStudy/P2csmain.jsx"));
const Project03CaseStudy = lazy(() => import("./Project03CaseStudy/P3csmain.jsx"));

// Automatically scrolls to top on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function MainApp() {
  // Initialize Lenis + GSAP ScrollTrigger momentum engine
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTop />
      <CustomScrollbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillnest-casestudy" element={<Project01CaseStudy />} />
          <Route path="/nanalcafe-casestudy" element={<Project02CaseStudy />} />
          <Route path="/tasqmate-casestudy" element={<Project03CaseStudy />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
