import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nanalThumbnail from "./assets/Nanalcafe-Ui/nanalcafe-thumbnail.png";
import nanalUiPages from "./assets/Nanalcafe-Ui/nanalcafe-ui-pages.png";
import skillnestHero from "./assets/images/hero-illustration.png";
import skillnestUi from "./assets/images/Skillnest-Ui/skillnest User Interface Example.png";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Subtle parallax momentum on overlapping sheets
      gsap.to(".sheet-nanal", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-01",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

      gsap.to(".sheet-skillnest", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-02",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

      gsap.to(".sheet-tasqmate", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-03",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-works" id="projects" ref={sectionRef} aria-label="Selected Case Studies">
      <div className="works-container">
        
        {/* Section Header */}
        <div className="works-header">
          <div className="works-eyebrow">
            <span className="eyebrow-text">INDEX // 01 — SELECTED WORKS</span>
          </div>
          <div className="works-heading-row">
            <h2 className="works-h2">Production Case Studies</h2>
            <p className="works-lead">
              Deep-dives into frontend architecture, mobile ergonomics, and high-performance component engineering.
            </p>
          </div>
        </div>

        {/* ==================================================================
            CASE STUDY 01: NANAL CAFE (Asymmetrical 12-Column Overlapping Grid)
            ================================================================== */}
        <article className="work-editorial-item work-01">
          <div className="work-grid-12">
            
            {/* Left Narrative Column (Cols 1-5) */}
            <div className="work-narrative-col">
              <div className="work-index-tag">CASE STUDY // 01</div>
              <h3 className="work-title">Nanal Cafe</h3>
              <p className="work-subtitle">A Modern, Mobile-First Restaurant Redesign &amp; Interactive Flow</p>
              
              <p className="work-summary">
                Over 78% of guests accessed the cafe&apos;s site on mobile devices. This overhaul replaced slow,
                static PDF menus with an instant, touch-optimized dietary filter system and an ergonomic
                2-tap table reservation flow engineered for one-handed thumb navigation.
              </p>

              {/* Architectural Metrics */}
              <div className="work-metrics-grid">
                <div className="work-metric-item">
                  <span className="metric-num">-50%</span>
                  <span className="metric-desc">Page Load Time via WebP Pipeline</span>
                </div>
                <div className="work-metric-item">
                  <span className="metric-num">100%</span>
                  <span className="metric-desc">Mobile Thumb-Zone Accessibility</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="work-stack-ledger">
                <span className="stack-pill">REACT</span>
                <span className="stack-pill">CSS TOKENS</span>
                <span className="stack-pill">MOBILE-FIRST UX</span>
                <span className="stack-pill">WEBP PIPELINE</span>
              </div>

              {/* Action Button */}
              <div className="work-action-wrap">
                <button
                  type="button"
                  onClick={() => navigate("/nanalcafe-casestudy")}
                  className="btn-case-study"
                  aria-label="Read Nanal Cafe Case Study"
                >
                  <span>Explore Case Study</span>
                  <span className="btn-arrow-right" aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Right Visual Stage (Cols 6-12) Overlapping 12-Column Composition */}
            <div className="work-visual-stage">
              <div
                className="visual-composition-wrapper"
                onClick={() => navigate("/nanalcafe-casestudy")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/nanalcafe-casestudy");
                  }
                }}
                aria-label="View Nanal Cafe Case Study"
              >
                {/* Primary Card / Desktop Frame */}
                <div className="composition-primary-frame">
                  <img
                    src={nanalThumbnail}
                    alt="Nanal Cafe Responsive Interface Preview"
                    className="comp-img-primary"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="frame-reflection-glow" aria-hidden="true" />
                </div>

                {/* Secondary Overlapping Mobile Sheet View */}
                <div className="composition-secondary-sheet sheet-nanal">
                  <img
                    src={nanalUiPages}
                    alt="Nanal Cafe Mobile Menu Layouts"
                    className="comp-img-secondary"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="sheet-badge">MOBILE FLOW // 01</div>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* ==================================================================
            CASE STUDY 02: SKILL NEST (Reversed Asymmetrical 12-Column Grid)
            ================================================================== */}
        <article className="work-editorial-item work-02">
          <div className="work-grid-12 work-grid-reversed">
            
            {/* Visual Stage (Cols 1-7 in reversed layout) */}
            <div className="work-visual-stage">
              <div
                className="visual-composition-wrapper"
                onClick={() => navigate("/skillnest-casestudy")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/skillnest-casestudy");
                  }
                }}
                aria-label="View Skill Nest Case Study"
              >
                <div className="composition-primary-frame">
                  <img
                    src={skillnestHero}
                    alt="Skill Nest Learning & Career Acceleration Platform"
                    className="comp-img-primary"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="frame-reflection-glow" aria-hidden="true" />
                </div>

                <div className="composition-secondary-sheet sheet-offset-left sheet-skillnest">
                  <img
                    src={skillnestUi}
                    alt="Skill Nest Course Discovery & Filter Engine"
                    className="comp-img-secondary"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="sheet-badge">CURRICULUM ENGINE // 02</div>
                </div>
              </div>
            </div>

            {/* Narrative Column (Cols 8-12) */}
            <div className="work-narrative-col">
              <div className="work-index-tag">CASE STUDY // 02</div>
              <h3 className="work-title">Skill Nest</h3>
              <p className="work-subtitle">A Platform for Upskilling &amp; Role-Targeted Career Discovery</p>
              
              <p className="work-summary">
                Engineered an end-to-end career acceleration platform bridging structured technical curriculum
                with real-time job market requirements. Implemented client-side filtering, skeleton state transitions
                cutting perceived delay by 50%, and an accessible typographic hierarchy.
              </p>

              {/* Architectural Metrics */}
              <div className="work-metrics-grid">
                <div className="work-metric-item">
                  <span className="metric-num">99/100</span>
                  <span className="metric-desc">Lighthouse Accessibility Audit</span>
                </div>
                <div className="work-metric-item">
                  <span className="metric-num">3.2x</span>
                  <span className="metric-desc">Filter Interaction Velocity</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="work-stack-ledger">
                <span className="stack-pill">REACT 19</span>
                <span className="stack-pill">VITE</span>
                <span className="stack-pill">REST APIS</span>
                <span className="stack-pill">STATE ARCHITECTURE</span>
              </div>

              {/* Action Button */}
              <div className="work-action-wrap">
                <button
                  type="button"
                  onClick={() => navigate("/skillnest-casestudy")}
                  className="btn-case-study"
                  aria-label="Read Skill Nest Case Study"
                >
                  <span>Explore Case Study</span>
                  <span className="btn-arrow-right" aria-hidden="true">→</span>
                </button>
              </div>
            </div>

          </div>
        </article>

        {/* ==================================================================
            CASE STUDY 03: TASQMATE (Asymmetrical 12-Column Grid)
            ================================================================== */}
        <article className="work-editorial-item work-03">
          <div className="work-grid-12">
            
            {/* Narrative Column */}
            <div className="work-narrative-col">
              <div className="work-index-tag">CASE STUDY // 03</div>
              <h3 className="work-title">Tasqmate</h3>
              <p className="work-subtitle">Smart Task Manager &amp; Interactive Productivity Dashboard</p>
              
              <p className="work-summary">
                Engineered an ultra-responsive, keyboard-driven productivity application with zero external state libraries.
                Features real-time multi-criteria filtering, offline LocalStorage synchronization with JSON schema export/import,
                and hands-free voice task dictation powered by the Web Speech API.
              </p>

              {/* Architectural Metrics */}
              <div className="work-metrics-grid">
                <div className="work-metric-item">
                  <span className="metric-num">0ms</span>
                  <span className="metric-desc">Perceived CRUD Latency (Optimistic UI)</span>
                </div>
                <div className="work-metric-item">
                  <span className="metric-num">100%</span>
                  <span className="metric-desc">Client-Side Offline &amp; Schema Backup</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="work-stack-ledger">
                <span className="stack-pill">JAVASCRIPT ES6+</span>
                <span className="stack-pill">WEB SPEECH API</span>
                <span className="stack-pill">LOCALSTORAGE</span>
                <span className="stack-pill">PRODUCTIVITY UI</span>
              </div>

              {/* Action Buttons */}
              <div className="work-action-wrap">
                <button
                  type="button"
                  onClick={() => navigate("/tasqmate-casestudy")}
                  className="btn-case-study"
                  aria-label="Read Tasqmate Case Study"
                >
                  <span>Explore Case Study</span>
                  <span className="btn-arrow-right" aria-hidden="true">→</span>
                </button>
                <a
                  href="https://tasqmate.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-case-study-secondary"
                  aria-label="Open Tasqmate Live Application in new tab"
                >
                  <span>Live App</span>
                  <span className="btn-arrow-diag" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Visual Stage: Tactical Task Console Interface */}
            <div className="work-visual-stage">
              <div
                className="visual-composition-wrapper"
                onClick={() => navigate("/tasqmate-casestudy")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/tasqmate-casestudy");
                  }
                }}
                aria-label="View Tasqmate Case Study"
              >
                {/* Primary Console Frame */}
                <div className="composition-primary-frame tasqmate-console-frame">
                  <div className="tasqmate-console-bar">
                    <div className="console-window-dots" aria-hidden="true">
                      <span className="console-dot dot-red" />
                      <span className="console-dot dot-yellow" />
                      <span className="console-dot dot-green" />
                    </div>
                    <span className="console-title">tasqmate.local — state-engine v2</span>
                    <span className="console-status-pill">ONLINE</span>
                  </div>

                  <div className="tasqmate-console-body">
                    <div className="console-search-preview">
                      <span className="console-search-icon" aria-hidden="true">⌕</span>
                      <span className="console-search-text">Search tasks by tag, status, or keyword...</span>
                      <kbd className="console-kbd">Ctrl+K</kbd>
                    </div>

                    <div className="console-tasks-list">
                      <div className="console-task-item task-active">
                        <span className="task-checkbox checked" aria-hidden="true">✓</span>
                        <div className="task-info">
                          <span className="task-name">Web Speech API Voice Stream Integration</span>
                          <div className="task-meta">
                            <span className="task-tag tag-cyan">VOICE ENGINE</span>
                            <span className="task-time">0.2s dictation</span>
                          </div>
                        </div>
                        <span className="task-priority-badge priority-high">HIGH</span>
                      </div>

                      <div className="console-task-item">
                        <span className="task-checkbox" aria-hidden="true">○</span>
                        <div className="task-info">
                          <span className="task-name">LocalStorage Schema Validation &amp; JSON Export</span>
                          <div className="task-meta">
                            <span className="task-tag tag-emerald">PERSISTENCE</span>
                            <span className="task-time">Auto-sync</span>
                          </div>
                        </div>
                        <span className="task-priority-badge priority-medium">MED</span>
                      </div>

                      <div className="console-task-item">
                        <span className="task-checkbox" aria-hidden="true">○</span>
                        <div className="task-info">
                          <span className="task-name">Full Keyboard Shortcuts Engine (Cmd+Enter, Esc)</span>
                          <div className="task-meta">
                            <span className="task-tag tag-amber">ERGONOMICS</span>
                            <span className="task-time">Instant CRUD</span>
                          </div>
                        </div>
                        <span className="task-priority-badge priority-low">LOW</span>
                      </div>
                    </div>
                  </div>
                  <div className="frame-reflection-glow" aria-hidden="true" />
                </div>

                {/* Secondary Overlapping Metric / Audio Sheet */}
                <div className="composition-secondary-sheet sheet-tasqmate">
                  <div className="voice-preview-sheet">
                    <div className="voice-wave-header">
                      <span className="voice-dot-active" aria-hidden="true" />
                      <span className="voice-wave-title">SPEECH RECOGNITION</span>
                    </div>
                    <div className="voice-wave-bars" aria-hidden="true">
                      <span className="wave-bar bar-1" />
                      <span className="wave-bar bar-2" />
                      <span className="wave-bar bar-3" />
                      <span className="wave-bar bar-4" />
                      <span className="wave-bar bar-5" />
                      <span className="wave-bar bar-6" />
                      <span className="wave-bar bar-7" />
                    </div>
                    <p className="voice-transcript">&ldquo;Add sprint review Friday at 10am&rdquo;</p>
                    <div className="sheet-badge">SPEECH ENGINE // 03</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;
