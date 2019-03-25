import React, { Component } from "react";
import doggo from "../../assets/doggo.svg";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <div id="skills-container">
        <img src={doggo} alt="cute doggo" />
        <h1>03 \\ What can she do?</h1>
        <div id="skills-summary">
          <p>Javascript</p>
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
