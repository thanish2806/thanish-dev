import React, { useState, useEffect } from "react";
import Header from "./HeroSection";
import Mainmenu from "./mainmenu";
import Projects from "./projects";
import Footer from "./footer";
import "./home.css";

import Bglogo from "./assets/images/my-logo-icon.png";
import HeroSection from "./HeroSection";

function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Mouse move event handler
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home" onMouseMove={handleMouseMove}>
      <HeroSection />

      {/* Background logo with animation */}
      <div className="ba">
        <img
          src={Bglogo}
          className="background-logo"
          alt="Logo"
          style={{
            transform: `translate(${mouseX / 80}px, ${mouseY / 80}px)`,
          }}
        />
        {/* Dynamic text movement */}
        <div
          className="animated-text"
          style={{
            transform: `translate(${mouseX / 100}px, ${mouseY / 100}px)`,
          }}
        ></div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
