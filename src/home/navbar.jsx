import { useState } from "react";
import useTheme from "./theme";
import Mylogoicon from "./assets/images/my-logo-icon.png";
import LightMode from "./assets/images/light-mode.png";
import DarkMode from "./assets/images/night-mode.png";
const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <div className="content" id="head">
      {/* Logo */}
      <a href="/">
        <img className="logo" src={Mylogoicon} alt="Logo" />
      </a>
      {/* Mobile Menu */}
      <nav className="menu">
        <li>
          <a href="#">
            <img src="/images/menu-24.png" alt="Menu Icon" />
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleTheme}>
            <img
              id="theme-mobile"
              src={isDarkTheme ? LightMode :  DarkMode }
              alt="Toggle Theme"
            />
          </a>
        </li>
      </nav>
      {/* Desktop Navigation */}
      <nav className="navigation">
        <ul>
          <li className="navigationpc">
            <a href="#" onClick={toggleTheme}>
              <img
                id="theme-pc"
                src={isDarkTheme ?  DarkMode  :  LightMode }
                alt="Toggle Theme"
              />
            </a>
          </li>
          <li className="navigationpc" id="contactpc">
            <a onClick={toggleMenu} href="#">
              Contact
            </a>
          </li>
          <li className="navigationpc">
            <a href="#">Experiments</a>
          </li>
          <li className="navigationpc">
            <a href="#projects">Case Studies</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
