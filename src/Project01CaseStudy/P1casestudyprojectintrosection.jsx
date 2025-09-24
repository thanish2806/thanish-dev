import React from "react";
import "./P1casestudyprojectintrosection.css";
import SkillnestUIEg from "../assets/images/skillnest User Interface Example.png";
import Skillnestuipagination from "../assets/images/skillnest ui pagination.png";

const P1CaseStudyProjectIntroSection = () => (
  <section className="project-details-section">
    <div className="section-mask"></div>
    <h4 className="casestudy-section-subtitle">Analysis &amp; Preparation</h4>
    <h2 className="casestudy-section-title">Branding</h2>
    <div className="casestudy-section-inner-container">
      <div className="single-work-text-content is-left single-work-first-anim-blocks">
        <h3 className="casestudy-section-content-title">An elegant design.</h3>
        <div className="casestudy-section-content-separator"></div>
        <div className="casestudy-section-content-desc">
          <p>
            As the <strong>Front-end Developer</strong>, I was responsible for
            building the entire UI for the new website, redefining the User
            Experience and studying new interactions between the User and the
            Interface.
          </p>
          <p>
            One of the most exciting experiences was integrating the entire
            front-end system with the{" "}
            <strong>backend in a way that felt seamless to the user </strong>
            and the change page animation.
          </p>
        </div>
      </div>
      <div className="casestudy-section-ui-image-container">
        <img src={SkillnestUIEg} alt="Skillnest User Interface Example" />
      </div>
    </div>
    <div className="casestudy-section-color-palette-section">
      {[
        { color: "#0f172a", name: "$Prussian Blue" },
        { color: "#262626", name: "$Rich Black" },
        { color: "#fdfdff", name: "$Ghost White" },
        { color: "#000054", name: "$Navy" },
        { color: "#4f46e5", name: "$Indigo" },
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
    <div className="casestudy-section-fonts-block">
      <div className="casestudy-section-font-style-1">
        <h2 className="title-font-style-1">Title</h2>
        <p>ABC abc 123</p>
      </div>
      <div className="casestudy-section-font-style-2">
        <h2 className="title-font-style-2">Title</h2>
        <p>ABC abc 123</p>
      </div>
    </div>
    <div className="casestudy-section-ui-container">
      <h4 className="casestudy-section-subtitle">UI &amp; Components.</h4>
      <h2 className="casestudy-section-title">Design</h2>
      <div className="single-work-ui-image">
        <img src={Skillnestuipagination} alt="cerasa ui pagination" />
      </div>
    </div>
    <a className="next-work">
      <h5 className="next-work-lead">Next Work</h5>
      <h4 className="next-work-title">Comming Soon</h4>
      <div className="casestudy-section-content-separator"></div>
      <div className="next-work-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
          <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
        </svg>
      </div>
    </a>
  </section>
);

export default P1CaseStudyProjectIntroSection;
