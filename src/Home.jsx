import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Projects from "./projects";
import Footer from "./footer";
import Loader from "./loader.jsx";
import "./home.css";
import OpenSourceSection from "./OpenSourceSection.jsx";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay, e.g., fetching data or heavy components
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after 2.5s
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="home">
      {loading && <Loader />} {/* show loader while loading */}
      {!loading && (
        <>
          <HeroSection />

          {/* Background logo with animation */}

          {/* Dynamic text movement 
          <div
            className="animated-text"
            style={{
              transform: `translate(${mouseX / 100}px, ${mouseY / 100}px)`,
            }}
          ></div>
          */}

          <Projects />
          <OpenSourceSection />
          <Footer />
        </>
      )}
    </main>
  );
}

export default Home;
