import React from "react";
import "./projects.css";
import cardgameimg from "./assets/images/cardgame.jpeg";
function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="heading-1">CASE STUDIES</p>
      <p className="heading-2">Latest Works</p>

      <div className="project">
        <a
          href="https://thanish2806.github.io/cardgame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project-image" src={cardgameimg} alt="cardgame" />
        </a>
        <div className="project-cover">
          <p className="p-name">Puzzle Game</p>
          <p className="p-title">A Mind tricky game</p>
          <button className="casestudy" type="button">
            Case Study
          </button>
        </div>
      </div>

      <div className="project">
        <a
          href="https://thanish2806.github.io/Calculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="project-image"
            src="./images/calculator-project.jpeg"
            alt="calculator-project"
          />
        </a>
        <div className="project-cover">
          <p className="p-name">Job Preparation Platform</p>
          <p className="p-title">Interactive Front-end Developer</p>
          <button className="casestudy" type="button">
            Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
