import React from "react";
import "./footer.css";
import Bglogo from "./assets/images/my-logo-icon.png";
function Footer() {
  return (
    <div className="footer">
      <img
        className="logo-bottom"
        src={Bglogo}
        alt="Logo"
        onClick={() => (window.location.href = "#head")}
      />

      <nav className="navigation-footer">
        <ul>
          <li className="navigationpc" id="contactpc">
            <a
              href="https://www.linkedin.com/in/thanish-p-421204200"
              target="-blank"
            >
              Linkedin
            </a>
          </li>
          <li className="navigationpc">
            <a href="https://github.com/thanish2806" target="-blank">
              Github
            </a>
          </li>
        </ul>
      </nav>
      <p>© 2025 Techshark Digital. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
