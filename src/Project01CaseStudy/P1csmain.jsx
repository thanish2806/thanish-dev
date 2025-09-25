import React from "react";
import "../home.css";
import { useEffect, useState } from "react";
import Footer from "../footer.jsx";
import Loader from "../loader.jsx";
import CsHeroSectionP1 from "./Csherosection-p1.jsx";
import CsProjectIntroSec from "./CsProjectIntroSec.jsx";
import CsProjectAnalysisSec from "./CsProjectAnalysisSec.jsx";

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
          <CsHeroSectionP1 />

          <CsProjectIntroSec />

          <CsProjectAnalysisSec />

          <Footer />
        </>
      )}
    </div>
  );
}
export default Project01CaseStudy;
