import React, { Component } from "react";
import doggo from "../../assets/doggo.svg";
import {
  FaSass,
  FaDocker,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaNpm,
  FaJsSquare,
  FaGitSquare
} from "react-icons/fa";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <div id="skills-container">
        <img src={doggo} alt="cute doggo" />
        <h1>03 \\ What can she do?</h1>
        <div id="skills-front">
          <h2>Front:</h2>
          <div>
            <FaJsSquare />
            <FaSass />
            <FaReact />
            <FaVuejs />
          </div>
        </div>
        <div id="skills-back">
          <h2>Back:</h2>
          <div>
            <FaNodeJs />
            <span className="devicons devicons-postgresql" />
            <span className="devicons devicons-mongodb" />
            <span className="devicons devicons-heroku" />
            <span className="devicons devicons-illustrator" />
          </div>
        </div>
        <div id="skills-mid">
          <h2>Side-to-side:</h2>
          <div>
            <span className="devicons devicons-jira" />
            <FaDocker />
            <FaNpm />
            <FaGitSquare />
          </div>
        </div>
        <div id="skills">
          <div id="arrow-container">
            <div id="arrow-tail" />
            <div id="arrow-up" />
          </div>
          <h3>Skills</h3>
        </div>
      </div>
    );
  }
}

export default Skills;
