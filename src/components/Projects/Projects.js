import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <h1>02 // Some projects she's worked on-</h1>{" "}
        {/* eslint-disable-line */}
        <a id="project-link1" href="https://mobile-eats.herokuapp.com/">
          <div className="project-block" />
        </a>
        <a
          id="project-link2"
          href="https://play.google.com/store/apps/details?id=com.alchemycodelab.mercury.app"
        >
          <div className="project-block" />
        </a>
        <a id="project-link3" href="https://tashazun.github.io/Cute-Xylophone/">
          <div className="project-block" />
        </a>
        <a id="project-link4" href="https://deepfocus.herokuapp.com">
          <div className="project-block" />
        </a>
        <div id="works">
          <h3>Works</h3>
        </div>
      </div>
    );
  }
}

export default Projects;
