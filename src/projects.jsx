import React from "react";
import "./projects.css";
import cardgameimg from "./assets/images/cardgame.jpeg";
import skillnest from "./assets/images/hero-illustration.png";
import { Link } from "react-router-dom";
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
            href="https://jobfinder-frontend.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image1"
              src={skillnest}
              alt="calculator-project"
            />
          </a>
          <div className="project-cover1">
            <p className="p-name1">Skill Nest</p>
            <p className="p-title1">A Platfrom for upskilling</p>
            <Link className="casestudy1" to="/skillnest-casestudy">
              Case Study
            </Link>
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
            href="https://thanish2806.github.io/cardgame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="project-image2" src={cardgameimg} alt="cardgame" />

            <div className="project-cover2">
              <p className="p-name2">Puzzle Game</p>
              <p className="p-title2">A Mind tricky game</p>
              <button className="casestudy2" type="button">
                Click here
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
