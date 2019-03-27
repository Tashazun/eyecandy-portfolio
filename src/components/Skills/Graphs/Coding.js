import React, { Component } from "react";
import withIntersectionObserver from "../../../withIntersectionObserver";

import "./Coding.scss";

class Coding extends Component {
  render() {
    const slide = `${this.props.isVisible ? "slide-in" : ""}`;
    const visibility = `${this.props.isVisible ? "visible" : "transparent"}`;

    return (
      <div className={`coding-container ${visibility}`}>
        <div id="coding-title">
          <h3>Coding</h3>
          <h3>50%</h3>
        </div>
        <div id="coding-graph">
          <div className="coding-block">
            <h4 className={`graph-bar1 ${slide}`}>40%</h4>
            <h4>Javascript</h4>
          </div>
          <div className="coding-block">
            <h4 className={`graph-bar2 ${slide}`}>35%</h4>
            <h4>React/Redux</h4>
          </div>
          <div className="coding-block">
            <h4 className={`graph-bar3 ${slide}`}>10%</h4>
            <h4>NodeJs/Express</h4>
          </div>
          <div className="coding-block">
            <h4 className={`graph-bar4 ${slide}`}>15%</h4>
            <h4>MongoDB/Mongoose</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(0.7)(Coding);
