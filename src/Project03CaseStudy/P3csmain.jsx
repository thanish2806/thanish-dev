import React, { useEffect } from "react";
import CsProjectHeroSection3 from "./CsProjectHeroContent3.jsx";
import CsProjectIntroSection3 from "./CsProjectIntro3.jsx";
import CsProjectAnalysisSec3 from "./CsProjectAnalysisSec3.jsx";
import Footer from "../footer.jsx";
import "../Project01CaseStudy/P1csmain.css";

function Project03CaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="cs-home" aria-label="Tasqmate Case Study">
      <CsProjectHeroSection3 />
      <CsProjectIntroSection3 />
      <CsProjectAnalysisSec3 />
      <Footer />
    </main>
  );
}

export default Project03CaseStudy;
