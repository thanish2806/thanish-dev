import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import HeroBgImg from "./assets/images/HeroSectionBgImg.webp";
import NanalcafeUi from "./assets/Nanalcafe-Ui/nanalcafe-ui.png";
import { scrollToProjects } from "./scripts/scrollToProjects.js";
import "./HeroSection.css";

function HeroSection({ toggleMenu }) {
  const heroRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.1 } });

      tl.from(".hero-status-badge", {
        opacity: 0,
        y: 18,
        duration: 0.75
      })
      .from(".hero-headline", {
        opacity: 0,
        y: 28,
        duration: 1.05
      }, "-=0.55")
      .from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.9
      }, "-=0.75")
      .from(".hero-cta-group, .hero-metrics-bar", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.85
      }, "-=0.7")
      .from(".editorial-browser-frame", {
        opacity: 0,
        y: 30,
        duration: 1.15
      }, "-=0.8");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-hero" ref={heroRef} aria-label="Introduction & Engineering Overview">
      {/* Ambient Background with Grayscale Contrast & Radial Vignette */}
      <div className="hero-ambient-canvas" aria-hidden="true">
        <img
          src={HeroBgImg}
          alt=""
          className="hero-ambient-img"
          loading="eager"
        />
        <div className="hero-vignette-overlay" />
      </div>

      <div className="hero-container">
        {/* 2-Column Asymmetrical Grid */}
        <div className="hero-asymmetric-grid">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="hero-editorial-col">
            {/* Eyebrow Availability Badge (No pulse dot) */}
            <div className="hero-status-badge">
              <span className="hero-status-text">
                AVAILABLE FOR FRONT-END ARCHITECTURE &amp; ROLES
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="hero-headline">
              Engineering interfaces that feel as <span className="headline-highlight">fast</span> as they look.
            </h1>

            {/* Value Proposition Description */}
            <p className="hero-description">
              I am <strong>Thanish</strong>, an Interactive Front-End Developer and UI Architect.
              I build digital agency-grade web applications, resilient design token systems,
              and high-precision interactive user interfaces designed with zero layout-thrashing
              and measurable business performance.
            </p>

            {/* CTA Button Group + Key Engineering Metrics */}
            <div className="hero-cta-group">
              <button
                type="button"
                onClick={scrollToProjects}
                className="btn-primary-pill"
              >
                <span>Explore Case Studies</span>
                <span className="btn-arrow" aria-hidden="true">↓</span>
              </button>
              <button
                type="button"
                onClick={toggleMenu}
                className="btn-secondary-pill"
                aria-haspopup="dialog"
              >
                <span>Contact Me</span>
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </button>
            </div>

            {/* 2-Column Architectural Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-cell">
                <span className="metric-value">50%</span>
                <span className="metric-label">Faster Perceived Load Time on Redesigns</span>
              </div>
              <div className="metric-divider" aria-hidden="true" />
              <div className="metric-cell">
                <span className="metric-value">React 19</span>
                <span className="metric-label">UI Production Component Systems</span>
              </div>
            </div>

            {/* Micro Social Ledger */}
            <div className="hero-social-ledger">
              <span className="social-label">INDEX //</span>
              <a
                href="https://github.com/thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                GITHUB
              </a>
              <span className="social-sep">/</span>
              <a
                href="https://www.linkedin.com/in/thanish-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                LINKEDIN
              </a>
              <span className="social-sep">/</span>
              <a
                href="https://codepen.io/Thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                CODEPEN
              </a>
              <span className="social-sep">/</span>
              <a
                href="https://dribbble.com/thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
              >
                DRIBBBLE
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Browser Frame Stage */}
          <div className="hero-stage-col">
            <div className="editorial-browser-frame">
              {/* Browser Chrome Header */}
              <div className="browser-chrome-bar">
                <div className="browser-traffic-dots" aria-hidden="true">
                  <span className="dot dot-close" />
                  <span className="dot dot-min" />
                  <span className="dot dot-max" />
                </div>
                <div className="browser-url-pill">
                  <span className="url-security-icon" aria-hidden="true">🔒</span>
                  <span className="url-text">nanalcafe.netlify.app</span>
                </div>
                <div className="browser-meta-status">
                  <span className="status-live-indicator" />
                  <span className="status-text">LIVE PREVIEW</span>
                </div>
              </div>

              {/* Viewport Content with Subtle Elevation & Image Scale */}
              <div className="browser-viewport">
                <img
                  src={NanalcafeUi}
                  alt="Nanal Cafe Modern Restaurant Web Interface by Thanish"
                  className="browser-screenshot"
                  loading="eager"
                />
                <div className="browser-floating-badge">
                  <span className="badge-idx">FEATURED 01</span>
                  <span className="badge-name">Nanal Cafe Redesign</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
