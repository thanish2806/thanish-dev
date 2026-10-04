import React from "react";
import "./footer.css";

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer" aria-label="Colophon & Footer">
      <div className="footer-container">
        
        {/* Top Colophon Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <span className="footer-brand-title">THANISH.DEV</span>
            <p className="footer-brand-tagline">
              Engineering interfaces that feel as fast as they look.
              Front-End Developer &amp; Design System Architect.
            </p>
          </div>

          <div className="footer-links-col">
            <div className="footer-links-group">
              <span className="footer-group-heading">NETWORK //</span>
              <a
                href="https://github.com/thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/thanish-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://codepen.io/Thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                CodePen ↗
              </a>
              <a
                href="https://dribbble.com/thanish2806"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                Dribbble ↗
              </a>
            </div>

            <div className="footer-links-group">
              <span className="footer-group-heading">DIRECT //</span>
              <a
                href="mailto:thanishdeveloper@gmail.com"
                className="footer-anchor"
              >
                thanishdeveloper@gmail.com
              </a>
              <span className="footer-availability-note">
                ● Available for New Opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} THANISH. All Rights Reserved. Built with React 19, Vite &amp; CSS Custom Tokens.
          </p>

          <button
            type="button"
            onClick={handleScrollTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <span className="back-arrow" aria-hidden="true">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
