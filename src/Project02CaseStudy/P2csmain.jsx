import React from "react";
import "./P2csmain.css";
import Footer from "../footer.jsx";
import CsProjectAnalysisSec2 from "./CsProjectAnalysisSecp2.jsx";
import CsProjectIntroSection2 from "./CsProjectIntrop2.jsx";
import CsProjectHeroSection2 from "./CsProjectHeroContentp2.jsx";

function Project02CaseStudy() {
  return (
    <main className="cs-home">
      <CsProjectHeroSection2 />
      <CsProjectIntroSection2 />
      <CsProjectAnalysisSec2 />
      <Footer />
    </main>
  );
}
export default Project02CaseStudy;
