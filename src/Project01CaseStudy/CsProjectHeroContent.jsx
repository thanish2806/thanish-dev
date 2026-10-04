import React, { useState, useEffect } from "react";
import skillnest from "../assets/images/hero-illustration.png";
import Navbar from "../Navbar.jsx";
import Mainmenu from "../mainmenu.jsx";
import "./CsProjectHeroContent.css";

function CsProjectHeroSection() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);

  useEffect(() => {
    setIsActive(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="cs-hero-section" aria-label="Skill Nest Case Study Hero">
      {/* Background Graphic Canvas */}
      <div className="cs-hero-ambient" aria-hidden="true">
        <img
          src={skillnest}
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
        <span className="cs-badge-idx">CASE STUDY // 01</span>
        <h1 className="cs-title-main">Skill Nest</h1>
        <p className="cs-title-sub">A Platform for Upskilling &amp; Role-Targeted Career Discovery</p>
      </div>

      {/* Context Stripe */}
      <div className="cs-context-stripe">
        <div className="cs-context-grid">
          <div className="context-item">
            <span className="context-label">ROLE</span>
            <span className="context-val">Lead Front-End Developer</span>
          </div>
          <div className="context-item">
            <span className="context-label">CONTEXT</span>
            <span className="context-val">Scalable Web App &amp; Design Architecture</span>
          </div>
          <div className="context-item">
            <span className="context-label">PERIOD</span>
            <span className="context-val">2024 — 2025</span>
          </div>
          <div className="context-item">
            <span className="context-label">STATUS</span>
            <span className="context-val status-live">● Production Ready</span>
          </div>
        </div>
      </div>

      {/* Contact & Dossier Modal */}
      <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
    </section>
  );
}

export default CsProjectHeroSection;
