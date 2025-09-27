import React from "react";
import "./footer.css";
import Bglogo from "./assets/images/my-logo-icon.png";
import linkedindark from "./assets/images/linkedin-dark.png";
import linkedinlight from "./assets/images/linkedin-light.png";
import githubdark from "./assets/images/github-dark.png";
import githublight from "./assets/images/github-light.png";
import CodePenLight from "./assets/images/codepen-light.png";
import CodePenDark from "./assets/images/codepen-dark.png";
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
