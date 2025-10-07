import React from "react";
import "./P2csmain.css";
import { useEffect, useState } from "react";
import Loader from "../loader.jsx";
import Footer from "../footer.jsx";
import CsProjectAnalysisSec2 from "./CsProjectAnalysisSecp2.jsx";
import CsProjectIntroSection2 from "./CsProjectIntrop2.jsx";
import CsProjectHeroSection2 from "./CsProjectHeroContentp2.jsx";

function Project02CaseStudy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay, e.g., fetching data or heavy components
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after 2.5s
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cs-home">
      {loading && <Loader />} {/* show loader while loading */}
      {!loading && (
        <>
          <CsProjectHeroSection2 />

          <CsProjectIntroSection2 />

          <CsProjectAnalysisSec2 />

          <Footer />
        </>
      )}
    </div>
  );
}
export default Project02CaseStudy;
