import React, { Component } from "react";
import withIntersectionObserver from "../../withIntersectionObserver";
import PropTypes from "prop-types";

import "./About.scss";

class Summary extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  };

  render() {
    const slide = `${this.props.isVisible ? "visible-left" : "hidden-left"}`;

    return (
      <div className={`about-summary ${slide}`}>
        <p>
          An enthusiastic professional who strives to make thrilling,
          interactive, front-end experiences.
        </p>
        <p>
          She&apos;s an unapologetic artist, and full-stack Javascript
          developer, who uses her knowledge of front and back-end to make cool
          stuff.
        </p>
        <p>
          When away from the computer, or a sketch book, she can often be found
          practising with her longsword and taking her dog (worlds goodest boy)
          out for long hikes.
        </p>
      </div>
    );
  }
}

export default withIntersectionObserver(0.15)(Summary);
