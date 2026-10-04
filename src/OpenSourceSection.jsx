import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OpenSourceSection.css";

gsap.registerPlugin(ScrollTrigger);

const LEDGER_EXPERIMENTS = [
  {
    idx: "01",
    title: "CSS3 Orbital Physics Preloader",
    description: "Multi-axis orbital SVG keyframe physics engine designed with zero layout shift and sub-millisecond execution.",
    tech: "CSS3 KEYFRAMES // SVG",
    link: "https://codepen.io/Thanish2806",
    actionLabel: "View CodePen"
  },
  {
    idx: "02",
    title: "Tactile Reservation State Machine",
    description: "Two-tap mobile-first reservation flow with instant DOM feedback and spring-damped thumb zone mechanics.",
    tech: "REACT 19 // STATE MACHINE",
    link: "https://github.com/thanish2806",
    actionLabel: "View Repository"
  },
  {
    idx: "03",
    title: "Sliding Auth Token Switcher",
    description: "Zero-runtime CSS custom property mode toggle utilizing sliding cubic-bezier pill physics.",
    tech: "CSS TOKENS // INTERACTION",
    link: "https://codepen.io/Thanish2806",
    actionLabel: "View CodePen"
  },
  {
    idx: "04",
    title: "Zero-Refresh Micro-Routing Bus",
    description: "Fluid client-side state router engineered with zero page flushes and automatic scroll position restoration.",
    tech: "SPA ARCHITECTURE",
    link: "https://github.com/thanish2806/thanish-portfolio",
    actionLabel: "View Architecture"
  },
  {
    idx: "05",
    title: "Obsidian Photon Design System",
    description: "Cross-platform W3C DTCG design token pipeline with dual-mode high-contrast surface elevation matrix.",
    tech: "DESIGN SYSTEMS // DTCG",
    link: "https://github.com/thanish2806",
    actionLabel: "View Tokens"
  }
];

function OpenSourceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".ledger-row", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.85,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".ledger-table",
          start: "top 82%",
          once: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="editorial-ledger-section"
      id="opensource"
      ref={containerRef}
      aria-label="Engineering Ledger & Open Source Experiments"
    >
      <div className="ledger-container">
        
        {/* Section Header */}
        <div className="ledger-header">
          <div className="ledger-eyebrow">
            <span className="eyebrow-text">INDEX // 02 — OPEN SOURCE &amp; LABS</span>
          </div>
          <div className="ledger-heading-row">
            <h2 className="ledger-h2">Interactive Engineering Ledger</h2>
            <p className="ledger-lead">
              A curated ledger of frontend UI primitives, interaction physics, and production-tested architecture experiments.
            </p>
          </div>
        </div>

        {/* Full-Width Interactive Horizontal Ledger */}
        <div className="ledger-table" role="table" aria-label="Interactive Experiments Ledger">
          {LEDGER_EXPERIMENTS.map((item) => (
            <a
              key={item.idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ledger-row"
              role="row"
              aria-label={`${item.title} - ${item.tech}`}
            >
              {/* Monospace Index */}
              <div className="ledger-cell-idx" role="cell">
                <span className="cell-idx-number">{item.idx}</span>
              </div>

              {/* Title & Description */}
              <div className="ledger-cell-main" role="cell">
                <h3 className="cell-title">{item.title}</h3>
                <p className="cell-desc">{item.description}</p>
              </div>

              {/* Tech Stack in Azonix */}
              <div className="ledger-cell-tech" role="cell">
                <span className="tech-badge">{item.tech}</span>
              </div>

              {/* Diagonal Arrow Action */}
              <div className="ledger-cell-arrow" role="cell" aria-hidden="true">
                <span className="diagonal-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Ledger Bottom Colophon */}
        <div className="ledger-colophon">
          <span className="colophon-item">STATUS // CONTINUOUS EXPERIMENTATION</span>
          <span className="colophon-item">ALL PRIMITIVES TESTED FOR ZERO LAYOUT-THRASHING</span>
          <a
            href="https://github.com/thanish2806"
            target="_blank"
            rel="noopener noreferrer"
            className="colophon-link"
          >
            VIEW ALL REPOSITORIES ON GITHUB ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default OpenSourceSection;
