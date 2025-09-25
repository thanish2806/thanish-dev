import React, { useState, useEffect } from "react";
import "./CsProjectHeroContent.css";
import Mylogoicon from "../assets/images/my-logo-icon.png";
import skillnest from "../assets/images/hero-illustration.png";
import Mainmenu from "../mainmenu.jsx";
import Navbar from "../Navbar.jsx";

function CsProjectHeroSection() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const toggleMobileNav = () => setIsMobileOpen((prev) => !prev);
  const handleImageClick = () => {
    window.location.reload();
  };
  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div className="cs-hero-content">
      <img src={skillnest} className="background-logo-p1" alt="Logo" />
      <div className={`top-content ${isActive ? "active" : ""}`}>
        <div className="top-logo">
          <img
            onClick={handleImageClick}
            className="logo"
            src={Mylogoicon}
            alt="Logo"
          />
        </div>
        <Navbar
          toggleMenu={toggleMenu}
          isMobileOpen={isMobileOpen}
          closeMobileNav={() => setIsMobileOpen(false)}
        />
        {/* Hamburger for mobile */}
        <button className="hamburger-btn" onClick={toggleMobileNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
      {/* Main content */}

      <div className="p1-casestudy-title-container">
        <h1 className="p1-cs-title-main">Project Skillnest</h1>
        <p className="p1-cs-title1">A Platfrom for upskilling</p>
      </div>

      <div className="p1-cs-context-stripe">
        <ul className="context-stripe-focus-area is-loaded">
          <li>
            <strong>Role</strong>{" "}
            <span className="stripe-baffle">Front-end Developer</span>
          </li>
          <li>
            <strong>Context</strong>{" "}
            <span className="stripe-baffle">
              Building a scalable Web Application
            </span>
          </li>
          <li>
            <strong>Period</strong>{" "}
            <span className="stripe-baffle">Early 2025</span>
          </li>
        </ul>
      </div>

      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </div>
  );
}

export default CsProjectHeroSection;
