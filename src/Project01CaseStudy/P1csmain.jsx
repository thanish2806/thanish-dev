import React from "react";
import "./P1csmain.css";
import CsProjectHeroSection from "./CsProjectHeroContent.jsx";
import CsProjectIntroSection from "./CsProjectIntro.jsx";
import CsProjectAnalysisSec from "./CsProjectAnalysisSec.jsx";
import Footer from "../footer.jsx";

function Project01CaseStudy() {
  return (
    <main className="cs-home">
      <CsProjectHeroSection />
      <CsProjectIntroSection />
      <CsProjectAnalysisSec />
      <Footer />
    </main>
  );
}
export default Project01CaseStudy;
