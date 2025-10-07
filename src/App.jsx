import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import Project01CaseStudy from "./Project01CaseStudy/P1csmain.jsx";
import "./App.css";
import Project02CaseStudy from "./Project02CaseStudy/P2csmain.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillnest-casestudy" element={<Project01CaseStudy />} />
          <Route path="/nanalcafe-casestudy" element={<Project02CaseStudy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
