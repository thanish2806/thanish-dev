import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

import Home from "./Home";
// import Project01CaseStudy from "./project-01-casestudy";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project-01-casestudy" element={<Project01CaseStudy />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
