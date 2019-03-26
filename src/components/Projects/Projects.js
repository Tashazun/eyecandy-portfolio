import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <h1>02 // Some projects</h1>
        <a id="project-link1" href="https://mobile-eats.herokuapp.com/">
          <div className="project-title" />
          <h3>Mobile Eats</h3>
          <div className="project-block">
            <h4>Food Truck Tracker</h4>
            <h4>React</h4>
          </div>
        </a>
        <a
          id="project-link2"
          href="https://play.google.com/store/apps/details?id=com.alchemycodelab.mercury.app"
        >
          <div className="project-title" />
          <h3>Ugyde Review App</h3>
          <div className="project-block">
            <h4>Video Business Reviews</h4>
            <h4>React + Firebase</h4>
          </div>
        </a>
        <a id="project-link3" href="https://tashazun.github.io/Cute-Xylophone/">
          <div className="project-title" />
          <h3>Zen Xylophone</h3>
          <div className="project-block">
            <h4>Cute, Colorful Music Maker</h4>
            <h4>Pure Javascript</h4>
          </div>
        </a>
        <a id="project-link4" href="https://deepfocus.herokuapp.com">
          <div className="project-title" />
          <h3>Deep Focus</h3>
          <div className="project-block">
            <h4>Technical Film Reviews</h4>
            <h4>React/Redux + Node/Express</h4>
          </div>
        </a>
        <div id="works">
          <h3>Works</h3>
        </div>
      </div>
    );
  }
}

export default Projects;
