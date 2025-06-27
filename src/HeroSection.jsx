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
function HeroSection() {
  const { isDarkTheme } = useTheme(); // get from context
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="herosection">
      <Navbar toggleMenu={toggleMenu} />

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

      <div id="info">
        <div className="user-info">
          <p className="myname">THANISH</p>
          <p className="myrole">Interactive Front-end Developer</p>
          <button onClick={toggleMenu} className="aboutme" type="button">
            About Me!
          </button>
        </div>
        
        <div className="works">
          <a href="#projects">works</a>
          <a href="#projects">
            <img
              className="arrow"
              src={isDarkTheme ? downarrowdark : downarrowlight}
              alt="Arrow"
            />
          </a>
        </div>
      </div>

      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </div>
  );
}

export default HeroSection;
