// Navbar.jsx
import { useTheme } from "./ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import LightMode from "./assets/images/light-mode.png";
import DarkMode from "./assets/images/night-mode.png";
import closeiconlight from "./assets/images/close-icon-light.png";
import { Link } from "react-router-dom";
import { scrollToProjects } from "./scripts/scrollToProjects.js";

import "./Navbar.css";

const Navbar = ({ toggleMenu, isMobileOpen, closeMobileNav }) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const location = useLocation();

  const isCaseStudyPage = location.pathname === "/skillnest-casestudy";

  const navigate = useNavigate();

  const handleAllWorks = () => {
    navigate("/home");
    setTimeout(() => {
      scrollToProjects();
    }, 2800); // wait a moment for Home to mount
  };

  return (
    <div className="content">
      {/* Show normal navigation if NOT case study page */}
      {!isCaseStudyPage && (
        <>
          {/* Desktop Navigation */}
          <div className="navigation">
            <ul>
              <li className="navigationpc">
                <a href="#projects">Case Studies</a>
              </li>
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

          {/* Mobile Navigation */}
          <div className={`navigation-mobile ${isMobileOpen ? "open" : ""}`}>
            <img
              className="closeicon-mob-menu"
              onClick={closeMobileNav}
              src={closeiconlight}
              alt="Close"
            />
            <ul>
              <li className="options-mobile">
                <a
                  onClick={() => {
                    closeMobileNav();
                    navigate("/home");
                  }}
                >
                  Home
                </a>
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
        </>
      )}

      {/* Show case study navigation ONLY on case study page */}
      {isCaseStudyPage && (
        <>
          <div className="casestudy-navigation ">
            <ul>
              <li className="cs-navigationpc">
                <Link to="/home">Turn back to Home</Link>
              </li>
              <li className="cs-navigationpc">
                <a onClick={handleAllWorks}>All Works</a>
              </li>
              <li className="cs-navigationpc" id="contactpc">
                <a onClick={toggleMenu} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Navigation */}

          <div className={`navigation-mobile ${isMobileOpen ? "open" : ""}`}>
            <img
              className="closeicon-mob-menu"
              onClick={closeMobileNav}
              src={ closeiconlight}
              alt="Close"
            />
            <ul>
              <li className="options-mobile">
                <a
                  onClick={() => {
                    closeMobileNav();
                    navigate("/home");
                  }}
                >
                  Turn Back Home
                </a>
              </li>
              <li className="options-mobile">
                <a onClick={handleAllWorks}>All Works</a>
              </li>
              <li className="options-mobile" id="contactpc">
                <a onClick={toggleMenu} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
