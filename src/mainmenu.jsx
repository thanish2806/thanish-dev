import React from "react";
import "./mainmenu.css";
import { useTheme } from "./ThemeContext.jsx"; // ✅ Correct
import closeicondark from "./assets/images/close-icon-dark.png";
import closeiconlight from "./assets/images/close-icon-light.png";
function Mainmenu({ isVisible, onClose }) {
  const { isDarkTheme } = useTheme();

  if (!isVisible) return null; // Hide menu if not visible

  return (
    <div className="menupage">
      {/* Close Button */}

      {/* About Me Menu */}
      <div className="aboutmenu">
        <p className="aboutmetext">About me</p>
        <p className="aboutmerole">Interactive Front-end Developer</p>
        <p className="aboutcontent">
          I'm Thanish, a 20-year-old Indian
          <span className="highlightwords">
            {" "}
            Freelance Front-end developer.
          </span>{" "}
          I like to
          <span className="highlightwords"> resolve</span> design problems,
          <span className="highlightwords"> create</span> smart user interfaces,
          and
          <span className="highlightwords"> imagine</span> useful interactions,
          developing rich web experiences &{" "}
          <span className="highlightwords"> web applications.</span>
        </p>
      </div>

      {/* Contact Menu */}
      <div className="contactmenu">
        <img
          className="closeicon"
          onClick={onClose}
          src={isDarkTheme ? closeicondark : closeiconlight}
          alt="Close"
        />
        <p className="contactmenutitle">Let's Talk.</p>
        <p className="contactmenusubtitle">
          New projects, freelance inquiries, or even a coffee.
        </p>

        <form id="contactForm">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />

          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Enter your query"
            required
          ></textarea>
          <br />
          <br />

          <button type="button" className="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mainmenu;
