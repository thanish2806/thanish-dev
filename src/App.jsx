import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import useOnlineStatus from "./useOnlineStatus";
import Home from "./Home";
import Project01CaseStudy from "./project-01-casestudy.jsx";

function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) return <OfflinePage />;
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillnest-casestudy" element={<Project01CaseStudy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
