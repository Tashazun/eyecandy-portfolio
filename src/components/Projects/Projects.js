import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <h1>02 // Some projects</h1>
        <a id="project-link1" href="https://mobile-eats.herokuapp.com/">
          <div className="project-title">
            <h3>Food Truck Tracker</h3>
            <h4>Design & Development</h4>
          </div>
          <div className="project-block" />
        </a>
        <a
          id="project-link2"
          href="https://play.google.com/store/apps/details?id=com.alchemycodelab.mercury.app"
        >
          <div className="project-title">
            <h3>Ugyde Review App</h3>
            <h4>Design & Development</h4>
          </div>
          <div className="project-block" />
        </a>
        <a id="project-link3" href="https://tashazun.github.io/Cute-Xylophone/">
          <div className="project-title">
            <h3>Zen Xylophone</h3>
            <h4>Design & Development</h4>
          </div>
          <div className="project-block" />
        </a>
        <a id="project-link4" href="https://deepfocus.herokuapp.com">
          <div className="project-title">
            <h3>Technical Film Reviews</h3>
            <h4>Design & Development</h4>
          </div>
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
