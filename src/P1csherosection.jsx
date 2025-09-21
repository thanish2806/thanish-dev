import React, { useState, useEffect } from "react";
import Mylogoicon from "./assets/images/my-logo-icon.png";
import skillnest from "./assets/images/hero-illustration.png";
import Mainmenu from "./mainmenu.jsx";
import SkillnestUIEg from "./assets/images/skillnest User Interface Example.png";
import Skillnestuipagination from "./assets/images/skillnest ui pagination.png";
import "./P1csherosection.css";
import Navbar from "./Navbar.jsx";

function P1CsHeroSection() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const toggleMobileNav = () => setIsMobileOpen((prev) => !prev);
  const handleImageClick = () => {
    window.location.reload();
  };
  useEffect(() => {
    setIsActive(true); // triggers animation once after mount
  }, []);

  return (
    <div className="project-01-casestudy-main">
      <section className="casestudy-container">
        <img
          src={skillnest}
          className="background-logo-p1-casestudy"
          alt="Logo"
        />
        <div className={`top-content ${isActive ? "active" : ""}`}>
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
          <button className="hamburger-btn" onClick={toggleMobileNav}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
        {/* Main content */}
        <div className="p1-casestudy-title-container">
          <h1 className="p1-cs-title-main">Project Skillnest</h1>
          <p className="p1-cs-title1">A Platfrom for upskilling</p>
        </div>
        <div className="p1-cs-context-stripe">
          <ul className="context-stripe-focus-area is-loaded">
            <li>
              <strong>Role</strong>{" "}
              <span className="stripe-baffle">Front-end Developer</span>
            </li>
            <li>
              <strong>Context</strong>{" "}
              <span className="stripe-baffle">
                Building a scalable Web Application
              </span>
            </li>
            <li>
              <strong>Period</strong>{" "}
              <span className="stripe-baffle">Early 2025</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="p1-cs-intro-section">
        <h2 className="p1-cs-intro-title">The Project</h2>

        <div className="p1-cs-intro-subtitle">
          <p itemProp="description">
            SkillNest is a modern job preparation platform designed to help
            learners upskill efficiently. It combines curated resources,
            interactive projects, and mock assessments to prepare candidates for
            real-world challenges.
          </p>
        </div>

        <div className="site-link-container">
          <a
            href="https://jobfinder-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-link-button"
          >
            View Website
            <span className="forward-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476.213 476.213"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
              </svg>
            </span>
          </a>
        </div>
      </section>
      <section className="project-details-section">
        <div className="content">
          <div className="section-mask"></div>
          <h4 className="casestudy-section-subtitle">
            Analysis &amp; Preparation
          </h4>
          <h2 className="casestudy-section-title">Branding</h2>
          <div className="casestudy-section-inner-container">
            <div className="single-work-text-content is-left single-work-first-anim-blocks">
              <h3 className="casestudy-section-content-title">
                An elegant design.
              </h3>
              <div className="casestudy-section-content-separator"></div>
              <div className="casestudy-section-content-desc">
                <p>
                  As the <strong>Front-end Developer</strong>, I was responsible
                  for building the entire UI for the new website, redefining the
                  User Experience and studying new interactions between the User
                  and the Interface.
                </p>
                <p>
                  One of the most exciting experiences was integrating the
                  entire front-end system with the{" "}
                  <strong>
                    backend in a way that felt seamless to the user{" "}
                  </strong>
                  and the change page animation.
                </p>
              </div>
            </div>
            <div className="casestudy-section-ui-image-container">
              <img src={SkillnestUIEg} alt="Skillnest User Interface Example" />
            </div>
          </div>
          <div className="casestudy-section-color-palette-section">
            {[
              { color: "#0f172a", name: "$Prussian Blue" },
              { color: "#262626", name: "$Rich Black" },
              { color: "#fdfdff", name: "$Ghost White" },
              { color: "#000054", name: "$Navy" },
              { color: "#4f46e5", name: "$Indigo" },
            ].map((palette, idx) => (
              <div key={idx} className="color-palette-container">
                <div
                  className="color-palette"
                  style={{ backgroundColor: palette.color }}
                ></div>
                <h5 className="color-palette-name">{palette.name}</h5>
              </div>
            ))}
          </div>
          <div className="casestudy-section-fonts-block">
            <div className="casestudy-section-font-style-1">
              <h2 className="title-font-style-1">Title</h2>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
            </div>
            <div className="casestudy-section-font-style-2">
              <h2 className="title-font-style-2">Title</h2>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
            </div>
          </div>
          <div className="casestudy-section-ui-container">
            <h4 className="casestudy-section-subtitle">UI &amp; Components.</h4>
            <h2 className="casestudy-section-title">Design</h2>

            <div className="single-work-ui-image">
              <img src={Skillnestuipagination} alt="cerasa ui pagination" />
            </div>
          </div>
          <a className="next-work">
            <h5 className="next-work-lead">Next Work</h5>
            <h4 className="next-work-title">Comming Soon</h4>
            <div className="casestudy-section-content-separator"></div>
            <div className="next-work-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476.213 476.213"
              >
                <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      {isMenuVisible && (
        <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />
      )}
    </div>
  );
}

export default P1CsHeroSection;
