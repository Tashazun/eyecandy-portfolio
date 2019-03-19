import React, { Component } from "react";
import "intersection-observer";
import Observer from "@researchgate/react-intersection-observer";
import profile from "../../assets/profile-backdrop.svg";
import "./About.scss";

class About extends Component {
  state = {
    visibility: "hidden"
  };

  handleChange = event => {
    this.setState({
      visibility: event.isIntersecting ? "visible" : "hidden"
    });
  };

  render() {
    return (
      <Observer onChange={this.handleChange} threshold={0.25}>
        <div id="about-container">
          <div className={`about-info ${this.state.visibility}`}>
            <h2>
              01 // Who is this <span>wunderkind?</span>
            </h2>
            <h2>She’s a child of the Portland streets.</h2>
            <p>
              An artist and a full-stack{" "}
              <span role="img" aria-label="web">
                🕸️
              </span>{" "}
              developer.
            </p>
          </div>
          <img src={profile} alt="Tasha Zuniga" />
          <div id="profile">
            <h3>Profile</h3>
          </div>
        </div>
      </Observer>
    );
  }
}

export default About;
