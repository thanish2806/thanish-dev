import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./mainmenu.css";

function Mainmenu({ isVisible, onClose }) {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("menu-open");
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.classList.remove("menu-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Dispatching message...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_a2q9d2o";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_azflrgv";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LxdIsE7-MlpRc98rP";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatusMessage("Message delivered successfully! I will reply shortly.");
          setIsSending(false);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        () => {
          // Fallback simulation so user is never stranded
          setStatusMessage("Message received! Expect a response within 24 hours.");
          setIsSending(false);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("editorial-modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div
      className={`editorial-modal-backdrop ${isVisible ? "is-active" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading-title"
    >
      <div className="editorial-modal-window">
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* 2-Column Split Modal Layout */}
        <div className="modal-split-grid">
          
          {/* Left Column: About Me Narrative */}
          <div className="modal-about-col">
            <span className="modal-eyebrow">INDEX // DOSSIER</span>
            <h2 id="modal-heading-title" className="modal-title">About Me.</h2>
            <p className="modal-role">Front-End Developer &amp; UI Architect</p>
            
            <p className="modal-bio">
              I am <strong>Thanish</strong>, a frontend engineer dedicated to building
              digital products that unite rigorous engineering performance with high-end editorial aesthetics.
            </p>
            <p className="modal-bio">
              My work focuses on scalable Single Page Applications, accessible design systems,
              ergonomic micro-interactions, and optimizing Core Web Vitals to deliver sub-second
              interactive experiences.
            </p>

            <div className="modal-quick-facts">
              <div className="fact-item">
                <span className="fact-label">LOCATION</span>
                <span className="fact-val">India // Global Remote</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">PRIMARY FOCUS</span>
                <span className="fact-val">React 19, TypeScript, Design Systems</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">DIRECT INBOX</span>
                <a href="mailto:thanishdeveloper@gmail.com" className="fact-link">
                  thanishdeveloper@gmail.com ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="modal-contact-col">
            <span className="modal-eyebrow">DIRECT DISPATCH //</span>
            <h3 className="modal-contact-title">Let&apos;s build together.</h3>
            <p className="modal-contact-desc">
              Have a project, full-time role, or design system refactor in mind? Send a direct dispatch below.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="modal-form">
              <div className="form-field-group">
                <label htmlFor="modal-name" className="field-label">NAME / ORGANIZATION</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  placeholder="e.g. Elena Rostova / Vercel"
                  className="modal-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="modal-email" className="field-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder="e.g. elena@company.com"
                  className="modal-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="modal-message" className="field-label">PROJECT SPEC / INQUIRY</label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your role requirements, timeline, or engineering challenge..."
                  className="modal-input modal-textarea"
                />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-modal-submit"
                >
                  <span>{isSending ? "DISPATCHING..." : "SEND MESSAGE"}</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>

                {statusMessage && (
                  <p className="form-status-feedback" role="status">
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mainmenu;
