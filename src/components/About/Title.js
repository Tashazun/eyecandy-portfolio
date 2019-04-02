import React, { Component } from "react";
import withIntersectionObserver from "../../withIntersectionObserver";
import PropTypes from "prop-types";

import "./About.scss";

class Title extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  };

  render() {
    const slide = `${this.props.isVisible ? "visible-left" : "hidden-left"}`;

    return (
      <div className={`about-info ${slide}`}>
        <h2 id="about-block1">
          01 // Who is this <span>wunderkind?</span>
        </h2>
        <h2 id="about-block2">She’s a child of the Portland streets...</h2>
      </div>
    );
  }
}

export default withIntersectionObserver(0.15)(Title);
