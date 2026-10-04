import React, { useState, useEffect } from "react";
import Navbar from "../Navbar.jsx";
import Mainmenu from "../mainmenu.jsx";
import HeroBgImg from "../assets/images/HeroSectionBgImg.webp";
import "./CsProjectHeroContent3.css";

function CsProjectHeroSection3() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);

  useEffect(() => {
    setIsActive(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="cs-hero-section cs-hero-tasqmate" aria-label="Tasqmate Case Study Hero">
      {/* Background Graphic Canvas */}
      <div className="cs-hero-ambient" aria-hidden="true">
        <img
          src={HeroBgImg}
          className="background-img-p1"
          alt=""
          loading="eager"
        />
        <div className="cs-hero-vignette" />
      </div>

      {/* Global Fixed Navbar */}
      <Navbar toggleMenu={toggleMenu} />

      {/* Hero Title & Identity */}
      <div className={`cs-title-stage ${isActive ? "is-active" : ""}`}>
        <span className="cs-badge-idx">CASE STUDY // 03</span>
        <h1 className="cs-title-main">Tasqmate</h1>
        <p className="cs-title-sub">Smart Task Manager &amp; Interactive Productivity Dashboard</p>
      </div>

      {/* Context Stripe */}
      <div className="cs-context-stripe">
        <div className="cs-context-grid">
          <div className="context-item">
            <span className="context-label">ROLE</span>
            <span className="context-val">Frontend Architect &amp; Developer</span>
          </div>
          <div className="context-item">
            <span className="context-label">CONTEXT</span>
            <span className="context-val">Voice Recognition &amp; Productivity UI</span>
          </div>
          <div className="context-item">
            <span className="context-label">TECH STACK</span>
            <span className="context-val">ES6+, Web Speech API, LocalStorage</span>
          </div>
          <div className="context-item">
            <span className="context-label">STATUS</span>
            <span className="context-val status-live">● Live on Netlify</span>
          </div>
        </div>
      </div>

      {/* Contact & Dossier Modal */}
      <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
    </section>
  );
}

export default CsProjectHeroSection3;
