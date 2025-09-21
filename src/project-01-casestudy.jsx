import Footer from "./footer";
import Loader from "./loader.jsx";
import P1CsHeroSection from "./p1-cs-herosection.jsx";
import { useEffect, useState } from "react";
import "./project-01-casestudy.css";
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
    <div className="project-01-casestudy-main">
      {loading && <Loader />} {/* show loader while loading */}
      {!loading && (
        <>
          <P1CsHeroSection />
          <Footer />
        </>
      )}
    </div>
  );
}
export default Project01CaseStudy;
