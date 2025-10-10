import React from "react";
import "./footer.css";
import Bglogo from "./assets/images/my-logo-icon.png";
import linkedindark from "./assets/images/Icons/linkedin-dark.png";
import linkedinlight from "./assets/images/Icons/linkedin-light.png";
import githubdark from "./assets/images/Icons/github-dark.png";
import githublight from "./assets/images/Icons/github-light.png";
import CodePenLight from "./assets/images/Icons/codepen-light.png";
import CodePenDark from "./assets/images/Icons/codepen-dark.png";
import Dribblelight from "./assets/images/Icons/dribble-light.png";
import DribbleDark from "./assets/images/Icons/dribble-dark.png";
import { useTheme } from "./ThemeContext.jsx";

function Footer() {
  const { isDarkTheme } = useTheme();

  return (
    <footer className="footer">
      {/* Logo left */}
      <img
        className="logo-bottom"
        src={Bglogo}
        alt="Logo"
        onClick={() => (window.location.href = "")}
      />

      {/* Social icons center */}
      <div className="footer-icon">
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
        <a
          href="https://codepen.io/Thanish2806"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github"
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

      {/* Copyright bottom */}
      <div className="footer-credit">
        <p className="footer-credit">
          © {new Date().getFullYear()} Designed and developed by Techshark
          Digital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
