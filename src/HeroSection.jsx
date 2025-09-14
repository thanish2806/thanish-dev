import React, { useState } from "react";
import "./HeroSection.css";
import { useTheme } from "./ThemeContext.jsx";
import "./App.css";
import Mainmenu from "./mainmenu";
import linkedindark from "./assets/images/linkedin-dark.png";
import linkedinlight from "./assets/images/linkedin-light.png";
import githubdark from "./assets/images/github-dark.png";
import githublight from "./assets/images/github-light.png";
import downarrowdark from "./assets/images/down-arrow-dark.png";
import downarrowlight from "./assets/images/down-arrow-light.png";
import Navbar from "./Navbar.jsx";
import Bglogo from "./assets/images/my-logo-icon.png";
import Mylogoicon from "./assets/images/my-logo-icon.png";


function HeroSection() {
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

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageClick = () => {
    window.location.reload();
  };
  

  return (
    <div className="herosection" onMouseMove={handleMouseMove}>
      {/* Top logo + navbar */}
      <Navbar
        toggleMenu={toggleMenu}
        isMobileOpen={isMobileOpen}
        closeMobileNav={() => setIsMobileOpen(false)}
      />
      <div className="top-content">
        <div className="top-logo">
          <img
            onClick={handleImageClick}
            className="logo"
            src={Mylogoicon}
            alt="Logo"
          />
        </div>

        {/* Hamburger for mobile */}
        <button className="hamburger-btn" onClick={toggleMobileNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>

      {/* Background logo */}
      <div className="background-logo-wrapper">
        <img
          src={Bglogo}
          className="background-logo"
          alt="Logo"
          style={{
            transform: `translate(${mouseX / 80}px, ${mouseY / 80}px)`,
          }}
        />
      </div>

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
        <button onClick={handleScrollToProjects} className="works-button">
          Works
        </button>
        <button onClick={handleScrollToProjects} className="arrow-button">
          <img
            className="arrow"
            src={isDarkTheme ? downarrowdark : downarrowlight}
            alt="Arrow"
          />
        </button>
      </div>

      {/* Social icons right */}
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/thanish-p-421204200"
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
      </div>

      {/* Main Menu */}
      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </div>
  );
}

export default HeroSection;
