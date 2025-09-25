import React from "react";
import "./CsProjectHeroContent.css";
import skillnest from "../assets/images/hero-illustration.png";
function CsProjectHeroSection() {
  return (
    <div className="cs-hero-section">
      <img src={skillnest} className="background-logo-p1" alt="Logo" />
    </div>
  );
}

export default CsProjectHeroSection;
