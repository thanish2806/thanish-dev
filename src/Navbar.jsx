// Navbar.jsx

import { useTheme } from "./ThemeContext";
import LightMode from "./assets/images/light-mode.png";
import DarkMode from "./assets/images/night-mode.png";
import closeicondark from "./assets/images/close-icon-dark.png";
import closeiconlight from "./assets/images/close-icon-light.png";
import "./Navbar.css";

const Navbar = ({ toggleMenu, isMobileOpen, closeMobileNav }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="content">
      {/* Desktop Navigation */}
      <div className="navigation">
        <ul>
          <li className="navigationpc">
            <a href="#projects">Case Studies</a>
          </li>
          {/* <li className="navigationpc">
            <a href="#">Experiments</a>
          </li> */}
          <li className="navigationpc" id="contactpc">
            <a onClick={toggleMenu} href="#">
              Contact
            </a>
          </li>
          <li className="navigationpc">
            <a href="#" onClick={toggleTheme}>
              <img
                id="theme-pc"
                src={isDarkTheme ? DarkMode : LightMode}
                alt="Toggle Theme"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation (controlled by HeroSection) */}

      <div className={`navigation-mobile ${isMobileOpen ? "open" : ""}`}>
        <img
          className="closeicon-mob-menu"
          onClick={closeMobileNav}
          src={isDarkTheme ? closeicondark : closeiconlight}
          alt="Close"
        />
        <ul>
          <li className="options-mobile">
            <a onClick={closeMobileNav}>Home</a>
          </li>
          <li className="options-mobile">
            <a href="#projects" onClick={closeMobileNav}>
              Case Studies
            </a>
          </li>
          <li className="options-mobile" id="contactpc">
            <a
              onClick={() => {
                closeMobileNav();
                toggleMenu();
              }}
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
