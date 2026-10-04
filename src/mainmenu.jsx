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
  

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isVisible]);

  if (!isVisible) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_a2q9d2o", // replace with your EmailJS service ID
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
    <div className={`menupage ${isVisible ? "active" : ""}`}>
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
