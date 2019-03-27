import React, { Component } from "react";
import withIntersectionObserver from "../../../withIntersectionObserver";

import "./Misc.scss";

class Misc extends Component {
  render() {
    const slide = `${this.props.isVisible ? "slide-in" : ""}`;
    const visibility = `${this.props.isVisible ? "visible" : "transparent"}`;

    return (
      <div className={`misc-container ${visibility}`}>
        <div id="misc-title">
          <h3>Other Stuff</h3>
          <h3>20%</h3>
        </div>
        <div id="misc-graph">
          <div className="misc-block">
            <h4 className={`graph-bar1 ${slide}`}>35%</h4>
            <h4>Git</h4>
          </div>
          <div className="misc-block">
            <h4 className={`graph-bar2 ${slide}`}>30%</h4>
            <h4>NPM/Yarn</h4>
          </div>
          <div className="misc-block">
            <h4 className={`graph-bar3 ${slide}`}>15%</h4>
            <h4>Docker</h4>
          </div>
          <div className="misc-block">
            <h4 className={`graph-bar4 ${slide}`}>20%</h4>
            <h4>Heroku</h4>
          </div>
        </div>
        <h3 id="good-bye">Anyhing else? Just ask!</h3>
      </div>
    );
  }
}

export default withIntersectionObserver(0.7)(Misc);
