import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { useTheme } from "./ThemeContext.jsx";
import "./App.css";
import Mainmenu from "./mainmenu.jsx";
import linkedindark from "./assets/images/Icons/linkedin-dark.png";
import linkedinlight from "./assets/images/Icons/linkedin-light.png";
import githubdark from "./assets/images/Icons/github-dark.png";
import githublight from "./assets/images/Icons/github-light.png";
import CodePenLight from "./assets/images/Icons/codepen-light.png";
import CodePenDark from "./assets/images/Icons/codepen-dark.png";
import Dribblelight from "./assets/images/Icons/dribble-light.png";
import DribbleDark from "./assets/images/Icons/dribble-dark.png";

import downarrowdark from "./assets/images/down-arrow-dark.png";
import downarrowlight from "./assets/images/down-arrow-light.png";
import Navbar from "./Navbar.jsx";
import Bglogo from "./assets/images/my-logo-icon.svg";
import Mylogoicon from "./assets/images/my-logo-icon.svg";
import { scrollToProjects } from "./scripts/scrollToProjects.js";

function HeroSection() {
  const [isActive, setIsActive] = useState(false);
  const { isDarkTheme } = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const toggleMobileNav = () => setIsMobileOpen((prev) => !prev);

  const handleImageClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    setIsActive(true); // triggers animation once after mount
  }, []);

  return (
    <section className="herosection-section" onMouseMove={handleMouseMove}>
      {/* Top logo + navbar */}
      <div className="herosectiob-background-shape"></div>
      <header className={`top-content ${isActive ? "active" : ""}`}>
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
        <button className="hamburger-btn" onClick={toggleMobileNav} aria-label="Toggle Mobile Menu" aria-expanded={isMobileOpen}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </header>

      <img
        src={Bglogo}
        className="background-logo"
        alt=""
        aria-hidden="true"
        style={{
          transform: `translate(${mouseX / 80}px, ${mouseY / 80}px)`,
        }}
      />

      {/* Info left */}
      <div className="info">
        <p className="myname">THANISH</p>
        <p className="myrole">Interactive Front-end Developer</p>
        <button onClick={toggleMenu} className="aboutme" type="button">
          About Me!
        </button>
      </div>

      {/* Works bottom center */}
      <div className="works">
        <button onClick={scrollToProjects} className="works-button">
          Works
        </button>
        <button onClick={scrollToProjects} className="arrow-button" aria-label="Scroll to Works">
          <img
            className="arrow"
            src={isDarkTheme ? downarrowdark : downarrowlight}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Social icons right */}
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/thanish-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="linkedin"
            src={isDarkTheme ? linkedindark : linkedinlight}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/thanish2806"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github"
            src={isDarkTheme ? githubdark : githublight}
            alt="GitHub"
          />
        </a>
        <a
          href="https://codepen.io/Thanish2806"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="CodePen"
            src={isDarkTheme ? CodePenDark : CodePenLight}
            alt="CodePen"
          />
        </a>
        <a
          href="https://dribbble.com/thanish2806"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="dribble"
            src={isDarkTheme ? DribbleDark : Dribblelight}
            alt="dribble"
          />
        </a>
      </div>

      {/* Main Menu */}
      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </section>
  );
}

export default HeroSection;
