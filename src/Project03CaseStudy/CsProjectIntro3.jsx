import React from "react";
import "./CsProjectIntro3.css";

const CsProjectIntroSection3 = () => {
  return (
    <section className="cs-intro-section" aria-label="Tasqmate Project Overview">
      <h2 className="cs-intro-title">The Project</h2>

      <div className="cs-intro-subtitle">
        <p>
          <strong>Tasqmate</strong> is an intelligent, high-density task management application
          engineered for power users who require instant responsiveness and zero cognitive friction.
          Featuring a robust client-side state machine, LocalStorage persistence, JSON export/import
          workflows, real-time analytics, and hands-free voice control via the Web Speech API.
        </p>
      </div>

      <div className="site-link-container">
        <a
          href="https://tasqmate.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="site-link-button"
        >
          View Live Application
          <span className="forward-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default CsProjectIntroSection3;
