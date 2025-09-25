import React from "react";
import "./P1csmain.css";
import { useEffect, useState } from "react";
import Footer from "../footer.jsx";
import Loader from "../loader.jsx";
import CsProjectAnalysisSec from "./CsProjectAnalysisSec.jsx";
import CsProjectHeroSec from "./CsProjectHeroSec.jsx";
import CsProjectIntroSection from "./Csprojectintrosection.jsx";

function Project01CaseStudy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay, e.g., fetching data or heavy components
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after 2.5s
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {loading && <Loader />} {/* show loader while loading */}
      {!loading && (
        <>
          <CsProjectHeroSec />

          <CsProjectIntroSection />

          <CsProjectAnalysisSec />

          <Footer />
        </>
      )}
    </div>
  );
}
export default Project01CaseStudy;
