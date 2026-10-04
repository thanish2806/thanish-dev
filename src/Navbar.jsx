import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTheme } from "./ThemeContext.jsx";
import { scrollToTarget } from "./Hooks/useSmoothScroll.js";
import "./Navbar.css";

const Navbar = ({ toggleMenu }) => {
  const { theme, isDarkTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudyPage = location.pathname !== "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsMobileOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (isCaseStudyPage) {
      navigate("/");
    } else {
      scrollToTarget(0);
    }
    setIsMobileOpen(false);
  };

  const handleCaseStudiesClick = (e) => {
    e.preventDefault();
    setIsMobileOpen(false);
    if (isCaseStudyPage) {
      navigate("/");
      setTimeout(() => scrollToTarget("#projects", -32), 120);
    } else {
      scrollToTarget("#projects", -32);
    }
  };

  const handleExperimentsClick = (e) => {
    e.preventDefault();
    setIsMobileOpen(false);
    if (isCaseStudyPage) {
      navigate("/");
      setTimeout(() => scrollToTarget("#opensource", -32), 120);
    } else {
      scrollToTarget("#opensource", -32);
    }
  };

  const handleContactClick = () => {
    setIsMobileOpen(false);
    if (toggleMenu) toggleMenu();
  };

  return (
    <header className={`site-header ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Left: Brand Identity (No pulse dot) */}
        <div className="nav-brand-wrapper">
          <a
            href="/"
            onClick={handleBrandClick}
            className="nav-brand"
            aria-label="Thanish Dev Portfolio - Return to top"
          >
            <span className="nav-brand-text">THANISH.DEV</span>
          </a>
        </div>

        {/* Center: Desktop Navigation with Left-to-Right Underline Scale */}
        <nav className="nav-links-center" aria-label="Main Navigation">
          {!isCaseStudyPage ? (
            <>
              <a
                href="#projects"
                onClick={handleCaseStudiesClick}
                className="nav-link"
              >
                Case Studies
              </a>
              <a
                href="#opensource"
                onClick={handleExperimentsClick}
                className="nav-link"
              >
                Ledger &amp; Labs
              </a>
              <button
                type="button"
                onClick={handleContactClick}
                className="nav-link nav-btn-link"
              >
                About &amp; Contact
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link nav-back-link">
                <span className="nav-arrow-left">←</span> Return to Index
              </Link>
              <a
                href="#projects"
                onClick={handleCaseStudiesClick}
                className="nav-link"
              >
                All Works
              </a>
              <button
                type="button"
                onClick={handleContactClick}
                className="nav-link nav-btn-link"
              >
                Contact
              </button>
            </>
          )}
        </nav>

        {/* Right: Actions (Theme Toggle Pill + Primary CTA) */}
        <div className="nav-actions-right">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-pill"
            aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
            title={`Active: ${theme.toUpperCase()} (Click to toggle)`}
          >
            <span className="theme-toggle-label">{isDarkTheme ? "DARK" : "LIGHT"}</span>
          </button>

          <button
            type="button"
            onClick={handleContactClick}
            className="nav-primary-cta"
          >
            Get In Touch
          </button>

          {/* Minimal 2-Line Animated Mobile Hamburger */}
          <button
            type="button"
            className={`hamburger-editorial ${isMobileOpen ? "is-active" : ""}`}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            <span className="h-line h-line-1" />
            <span className="h-line h-line-2" />
          </button>
        </div>
      </div>

      {/* Full Viewport Editorial Mobile Navigation */}
      <div
        className={`mobile-editorial-overlay ${isMobileOpen ? "is-visible" : ""}`}
        aria-hidden={!isMobileOpen}
      >
        <div className="mobile-menu-header">
          <div className="nav-brand-wrapper">
            <span className="nav-brand-text">THANISH.DEV</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-menu-content">
          <nav className="mobile-nav-list">
            <div className="mobile-nav-item">
              <span className="mobile-nav-idx">01</span>
              <a
                href="/"
                onClick={handleBrandClick}
                className="mobile-nav-anchor"
              >
                Home Index
              </a>
            </div>
            <div className="mobile-nav-item">
              <span className="mobile-nav-idx">02</span>
              <a
                href="#projects"
                onClick={handleCaseStudiesClick}
                className="mobile-nav-anchor"
              >
                Case Studies
              </a>
            </div>
            <div className="mobile-nav-item">
              <span className="mobile-nav-idx">03</span>
              <a
                href="#opensource"
                onClick={handleExperimentsClick}
                className="mobile-nav-anchor"
              >
                Engineering Ledger
              </a>
            </div>
            <div className="mobile-nav-item">
              <span className="mobile-nav-idx">04</span>
              <button
                type="button"
                onClick={handleContactClick}
                className="mobile-nav-anchor mobile-nav-btn"
              >
                About &amp; Contact
              </button>
            </div>
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-footer-row">
              <span className="mobile-footer-label">ACTIVE THEME</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-pill"
              >
                <span className="theme-toggle-label">{isDarkTheme ? "DARK" : "LIGHT"}</span>
              </button>
            </div>
            <p className="mobile-footer-status">
              Available for full-time frontend engineering &amp; design systems.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
