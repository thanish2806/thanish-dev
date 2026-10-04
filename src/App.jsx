import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import { useSmoothScroll } from "./Hooks/useSmoothScroll.js";
import Home from "./Home.jsx";
import Project01CaseStudy from "./Project01CaseStudy/P1csmain.jsx";
import Project02CaseStudy from "./Project02CaseStudy/P2csmain.jsx";
import Project03CaseStudy from "./Project03CaseStudy/P3csmain.jsx";
import CustomScrollbar from "./CustomScrollbar.jsx";
import "./App.css";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skillnest-casestudy" element={<Project01CaseStudy />} />
        <Route path="/nanalcafe-casestudy" element={<Project02CaseStudy />} />
        <Route path="/tasqmate-casestudy" element={<Project03CaseStudy />} />
        {/* Catch-all fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
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
