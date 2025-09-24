import React from "react";
import "./P1casestudyMain.css";
import { useEffect, useState } from "react";
import P1CsHeroSection from "./P1csherosection.jsx";
import P1CaseStudyProjectIntroSection from "./P1casestudyprojectintrosection.jsx";
import P1CaseStudyIntroSection from "./P1casestudyintrosection.jsx";
import Footer from "../footer.jsx";
import Loader from "../loader.jsx";



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
    <div className="project01main">
      {loading && <Loader />} {/* show loader while loading */}
      {!loading && (
        <>
          <P1CsHeroSection />

          <P1CaseStudyIntroSection />

          <P1CaseStudyProjectIntroSection />

          <Footer />
        </>
      )}
    </div>
  );
}
export default Project01CaseStudy;
