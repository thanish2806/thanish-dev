import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import { useSmoothScroll } from "./Hooks/useSmoothScroll.js";
import { Suspense, lazy } from "react";
import Home from "./Home.jsx";
import CustomScrollbar from "./CustomScrollbar.jsx";
import "./App.css";

// ⚡ Bolt: Lazy load case study routes to reduce initial bundle size
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
      <Suspense fallback={<div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-color, #fff)" }}>Loading...</div>}>
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
