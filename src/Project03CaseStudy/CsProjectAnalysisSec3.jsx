import React from "react";
import { useNavigate } from "react-router-dom";
import "./CsProjectAnalysisSec3.css";

function CsProjectAnalysisSec3() {
  const navigate = useNavigate();

  return (
    <section className="project-analysis-section" aria-label="Tasqmate Architecture & Engineering Analysis">
      <h4 className="casestudy-section-subtitle">Architecture &amp; Features</h4>
      <h2 className="casestudy-section-title">Voice-Enabled Productivity</h2>

      {/* Feature Breakdown 1: CRUD & State Engine */}
      <div className="casestudy-section-inner-container">
        <div className="single-work-text-content is-left">
          <h3 className="casestudy-section-content-title">
            Zero-Lag CRUD State Architecture
          </h3>
          <div className="casestudy-section-content-separator"></div>
          <div className="casestudy-section-content-desc">
            <p>
              Tasqmate was engineered to provide instant tactile feedback without relying on heavy external state
              libraries. Utilizing an optimized <strong>vanilla JavaScript (ES6+) state machine</strong>, tasks are
              dynamically sorted, tagged by urgency (Low, Medium, High), and categorized on the fly.
            </p>
            <p>
              To ensure data sovereignty, the application implements automatic <strong>LocalStorage synchronization</strong>,
              allowing users to persist task states offline, export their complete workspace to structured JSON,
              and import backups with comprehensive schema validation.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid (Architectural Specs) */}
        <div className="tasqmate-spec-grid">
          <div className="spec-card">
            <span className="spec-idx">01 // CORE</span>
            <h4 className="spec-title">Dynamic Categorization</h4>
            <p className="spec-body">
              Multi-criteria filtering by priority level, completion status, and tags with real-time DOM reconciliation.
            </p>
          </div>
          <div className="spec-card">
            <span className="spec-idx">02 // VOICE API</span>
            <h4 className="spec-title">Web Speech Integration</h4>
            <p className="spec-body">
              Hands-free voice recognition allowing users to dictate tasks, assign priorities, and trigger actions.
            </p>
          </div>
          <div className="spec-card">
            <span className="spec-idx">03 // PERSISTENCE</span>
            <h4 className="spec-title">JSON Export &amp; Backup</h4>
            <p className="spec-body">
              Portable data layer supporting one-click JSON schema export and safe import validation with zero data loss.
            </p>
          </div>
          <div className="spec-card">
            <span className="spec-idx">04 // ERGONOMICS</span>
            <h4 className="spec-title">Power Shortcuts</h4>
            <p className="spec-body">
              Full keyboard accessibility (Ctrl/Cmd+Enter quick add, Escape dismiss, arrow navigation) for power users.
            </p>
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div className="casestudy-section-color-palette-section">
        {[
          { color: "#09090b", name: "$ Obsidian Base" },
          { color: "#10b981", name: "$ Emerald Done" },
          { color: "#f59e0b", name: "$ Amber Priority" },
          { color: "#ef4444", name: "$ Crimson Urgent" },
          { color: "#06b6d4", name: "$ Cyan Voice" }
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

      {/* Typography Specimen Blocks */}
      <div className="casestudy-section-fonts-block">
        <div className="casestudy-section-font-style-1">
          <h2 className="title-font-style-1">Display Specimen</h2>
          <p>League Spartan 700 — High-contrast tactical headers</p>
        </div>
        <div className="casestudy-section-font-style-2">
          <h2 className="title-font-style-2">Interface Specimen</h2>
          <p>Louis George Cafe 400 — Legible task descriptions &amp; metrics</p>
        </div>
      </div>

      {/* Next Work Banner */}
      <div className="next-work-container">
        <div
          className="next-work"
          onClick={() => navigate("/nanalcafe-casestudy")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/nanalcafe-casestudy");
            }
          }}
          aria-label="Navigate to next case study: Nanal Cafe"
        >
          <span className="next-work-lead">NEXT CASE STUDY // 01</span>
          <h4 className="next-work-title">Nanal Cafe — Digital Flagship &amp; Ordering UI</h4>
          <div className="casestudy-section-content-separator"></div>
          <div className="next-work-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CsProjectAnalysisSec3;
