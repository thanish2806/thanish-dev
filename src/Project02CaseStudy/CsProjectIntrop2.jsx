import React from "react";
import "./CsProjectIntrop2.css";

const CsProjectIntroSection2 = () => {
  return (
    <section className="cs-intro-section">
      <h2 className="cs-intro-title">The Project</h2>

      <div className="cs-intro-subtitle">
        <p itemProp="description">
          NanalCafe Website Redesign is a modern, mobile-first platform for a
          fictional cafe designed to enhance user experience and engagement. The
          project focuses on a responsive layout, visually appealing dish
          presentations, and intuitive navigation to make exploring the menu and
          contacting the cafe simple and enjoyable.
        </p>
      </div>

      <div className="site-link-container">
        <a
          href="https://nanalcafe.netlify.app/"
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
  );
};

export default CsProjectIntroSection2;
