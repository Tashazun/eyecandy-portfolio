import React, { Component } from "react";
import withIntersectionObserver from "../../../../withIntersectionObserver";
import PropTypes from "prop-types";

import "./Design.scss";

class Design extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  };

  render() {
    const slide = `${this.props.isVisible ? "slide-in" : ""}`;
    const visibility = `${this.props.isVisible ? "visible" : "transparent"}`;

    return (
      <div className={`design-container ${visibility}`}>
        <div id="design-title">
          <h3>Design</h3>
          <h3>30%</h3>
        </div>
        <div id="design-graph">
          <div className="design-block">
            <h4 className={`graph-bar1 ${slide}`}>25%</h4>
            <h4>Photoshop</h4>
          </div>
          <div className="design-block">
            <h4 className={`graph-bar2 ${slide}`}>25%</h4>
            <h4>Illustrator/Inkscape</h4>
          </div>
          <div className="design-block">
            <h4 className={`graph-bar3 ${slide}`}>45%</h4>
            <h4>Drawing</h4>
          </div>
          <div className="design-block">
            <h4 className={`graph-bar4 ${slide}`}>5%</h4>
            <h4>InDesign</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(0.7)(Design);
