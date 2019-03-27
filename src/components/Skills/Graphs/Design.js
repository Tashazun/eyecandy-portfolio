import React, { Component } from "react";
import withIntersectionObserver from "../../../withIntersectionObserver";

import "./Design.scss";

class Design extends Component {
  render() {
    return (
      <div
        className={`design-container ${
          this.props.isVisible ? "visible" : "transparent"
        }`}
      >
        <h4>Design</h4>
        <div id="design-graph">
          <div className="design-block block1">
            <h4 id="graph-bar1">25%</h4>
            <h4>Photoshop</h4>
          </div>
          <div className="design-block block2">
            <h4 id="graph-bar2">25%</h4>
            <h4>Illustrator/Inkscape</h4>
          </div>
          <div className="design-block block3">
            <h4 id="graph-bar3">45%</h4>
            <h4>Drawing</h4>
          </div>
          <div className="design-block block3">
            <h4 id="graph-bar4">5%</h4>
            <h4>InDesign</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(0.99)(Design);
