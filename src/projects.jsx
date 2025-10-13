import React from "react";
import "./projects.css";
import redesign from "./assets/Nanalcafe-Ui/nanalcafe-thumbnail.png";
import skillnest from "./assets/images/hero-illustration.png";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./Hooks/ScrollReveal";
function Projects() {
  const navigate = useNavigate();

  const handleproject01casestudy = () => {
    navigate("/skillnest-casestudy");
  };
  const handleproject02casestudy = () => {
    navigate("/nanalcafe-casestudy");
  };
  return (
    <div className="projects" id="projects">
      <p className="heading-1">CASE STUDIES</p>
      <p className="heading-2">Latest Works</p>

      <ScrollReveal animation="fade-in">
        <div className="project1">
          <div className="projectno1">
            <h1>01</h1>
          </div>
          <div className="image-cover1">
            <div className="projectcover"></div>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="project-image1"
                src={skillnest}
                alt="calculator-project"
              />
            </a>
            <div className="project-cover1">
              <p className="p-name1">Skill Nest</p>
              <p className="p-title1">A Platfrom for upskilling</p>
              <button
                className="casestudy1"
                type="button"
                target="_blank"
                onClick={handleproject01casestudy}
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <div className="project2">
          <div className="projectno2">
            <h1>02</h1>
          </div>
          <div className="image-cover2">
            <div className="projectcover"></div>
            <a target="_blank" rel="noopener noreferrer">
              <img className="project-image2" src={redesign} alt="cardgame" />

              <div className="project-cover2">
                <p className="p-name2">Nanal cafe - Redesign</p>
                <p className="p-title2">
                  A Modern, Mobile-First Restaurant Website
                </p>
                <button
                  className="casestudy2"
                  type="button"
                  onClick={handleproject02casestudy}
                >
                  Case Study
                </button>
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Projects;
