import React, { useState, useEffect } from "react";
import "./CsProjectHeroContentp2.css";
import bgimage from "../assets/images/HeroSectionBgImg.webp";
import Mylogoicon from "../assets/images/my-logo-icon.png";
import Navbar from "../Navbar";
import Mainmenu from "../mainmenu";
function CsProjectHeroSection2() {
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
    <div className="cs-hero-section">
      <img src={bgimage} className="background-img-p1" alt="Logo" />
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
      <div className="p1-casestudy-title-container">
        <p className="p1-cs-title-main">NanalCafe Website Redesign</p>
        <p className="p1-cs-title1">
          A Modern, Mobile-First Restaurant Website
        </p>
      </div>

      <div className="p1-cs-context-stripe">
        <ul className="context-stripe-focus-area is-loaded">
          <li>
            <strong>Role</strong>{" "}
            <span className="stripe-baffle">
              Front-end Developer & UI/UX Designer
            </span>
          </li>
          <li>
            <strong>Context</strong>{" "}
            <span className="stripe-baffle">
              Redesigning a restaurant website to improve UX, responsiveness,
              and visual appeal
            </span>
          </li>
          <li>
            <strong>Period</strong>{" "}
            <span className="stripe-baffle">Sept 2025 – Oct 2025</span>
          </li>
        </ul>
      </div>

      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </div>
  );
}

export default CsProjectHeroSection2;
