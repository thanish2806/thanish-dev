import React from "react";
import "./projects.css";
import cardgameimg from "./assets/images/cardgame.jpeg";
import jobfinder from "./assets/images/Jobfider-thumbnail.jpeg";
function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="heading-1">CASE STUDIES</p>
      <p className="heading-2">Latest Works</p>

      <div className="project1">
        <div className="projectno1">
          <h1>01</h1>
        </div>
        <div className="image-cover1">
          <div className="projectcover"></div>
          <a
            href="https://thanish2806.github.io/cardgame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="project-image1" src={cardgameimg} alt="cardgame" />
          </a>
          <div className="project-cover1">
            <p className="p-name1">Puzzle Game</p>
            <p className="p-title1">A Mind tricky game</p>
            <button className="casestudy1" type="button">
              Case Study
            </button>
          </div>
        </div>
      </div>

      <div className="project2">
        <div className="projectno2">
          <h1>02</h1>
        </div>
        <div className="image-cover2">
          <div className="projectcover"></div>
          <a
            href="https://thanish2806.github.io/Calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image2"
              src={jobfinder}
              alt="calculator-project"
            />
          </a>
          <div className="project-cover2">
            <p className="p-name2">Job Preparation Platform</p>
            <p className="p-title2">Interactive Front-end Developer</p>
            <button className="casestudy2" type="button">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
