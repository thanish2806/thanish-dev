import React, { useRef, useState, useEffect } from "react";
import "./mainmenu.css";
import { useTheme } from "./ThemeContext.jsx";
import closeicondark from "./assets/images/close-icon-dark.png";
import closeiconlight from "./assets/images/close-icon-light.png";
import emailjs from "@emailjs/browser";

function Mainmenu({ isVisible, onClose }) {
  const { isDarkTheme } = useTheme();
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  // New state to manage the component's render lifecycle
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      // If menu is to be visible, set shouldRender to true immediately
      setShouldRender(true);
      document.body.classList.add("menu-open");
    } else {
      // If menu is to be closed, add a timeout to unmount after animation
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 800); // This delay should match your animation duration
      document.body.classList.remove("menu-open");
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  // Don't render anything if shouldRender is false
  if (!shouldRender) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rdx1ar9", // replace with your EmailJS service ID
        "template_azflrgv", // replace with your EmailJS template ID
        form.current,
        "LxdIsE7-MlpRc98rP" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Try again later.");
        }
      );
  };

  return (
    // Conditionally apply 'active' or 'closing' class for animation
    <div className={`menupage ${isVisible ? "active" : "closing"}`}>
      <div className="aboutmenu">
        <p className="aboutmetext">About Me.</p>
        <p className="aboutmetext-bg">`About Me.</p>
        <p className="aboutmerole">Interactive Front-end Developer</p>
        <p className="aboutcontent">
          I'm Thanish,{" "}
          {(() => {
            const birthDate = new Date(2004, 6, 28);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }

            return age;
          })()}{" "}
          year-old Indian
          <span className="highlightwords">
            {" "}
            Freelance Front-end developer.
          </span>{" "}
          I like to <span className="highlightwords">resolve</span> design
          problems,
          <span className="highlightwords"> create</span> smart user interfaces,
          and
          <span className="highlightwords"> imagine</span> useful interactions,
          developing rich web experiences &{" "}
          <span className="highlightwords">web applications.</span>
        </p>
      </div>

      <div className="contactmenu">
        <img
          className="closeicon"
          onClick={onClose}
          src={isDarkTheme ? closeicondark : closeiconlight}
          alt="Close"
        />
        <p className="contactmenutitle">Let's Talk.</p>
        <p className="contactmenutitle-bg">Contact Me.`</p>
        <p className="contactmenusubtitle">
          New projects, freelance inquiries, or even a coffee.
        </p>

        <form ref={form} onSubmit={sendEmail} id="contactForm">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Name*</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email*</label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message">Message*</label>
          </div>

          <button
            type="submit"
            className="submit"
            disabled={statusMessage === "Sending..."}
          >
            {statusMessage ? statusMessage : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mainmenu;