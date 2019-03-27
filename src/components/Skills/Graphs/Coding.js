import React, { Component } from "react";
import withIntersectionObserver from "../../../withIntersectionObserver";

import "./Coding.scss";

class Coding extends Component {
  render() {
    return (
      <div
        className={`coding-container ${
          this.props.isVisible ? "visible" : "transparent"
        }`}
      >
        <h4>Coding</h4>
        <div id="coding-graph">
          <div className="coding-block block1">
            <h4 id="graph-bar1">25%</h4>
            <h4>Photoshop</h4>
          </div>
          <div className="coding-block block2">
            <h4 id="graph-bar2">25%</h4>
            <h4>Illustrator/Inkscape</h4>
          </div>
          <div className="coding-block block3">
            <h4 id="graph-bar3">45%</h4>
            <h4>Drawing</h4>
          </div>
          <div className="coding-block block3">
            <h4 id="graph-bar4">5%</h4>
            <h4>InDesign</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(0.99)(Coding);
