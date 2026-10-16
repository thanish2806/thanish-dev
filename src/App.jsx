import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import { useSmoothScroll } from "./Hooks/useSmoothScroll.js";
import CustomScrollbar from "./CustomScrollbar.jsx";
import "./App.css";

// ⚡ Bolt: Code Splitting Route Components to minimize initial bundle size and improve load times.
// Heavy routes like Case Studies are now lazy-loaded.
const Home = lazy(() => import("./Home.jsx"));
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
      <Suspense fallback={<div className="suspense-loader" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--bg-color)" }}><div className="loader-cover1 active"></div></div>}>
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
