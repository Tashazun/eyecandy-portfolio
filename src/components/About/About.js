import React, { Component } from "react";
import "intersection-observer";
import Observer from "@researchgate/react-intersection-observer";

import "./About.scss";

import Title from "./Title";
import Summary from "./Summary";

import profile from "../../assets/Navi2.png";
class About extends Component {
  state = {
    enterRight: "hidden-right"
  };

  handleChange = event => {
    this.setState({
      enterRight: event.isIntersecting ? "visible-right" : "hidden-right"
    });
  };

  render() {
    return (
      <Observer onChange={this.handleChange} threshold={0.25}>
        <div id="about-container">
          <Title />
          <Summary />
          <div id="white" />
          <img
            id="fairy"
            className={`${this.state.enterRight}`}
            src={profile}
            alt="Tasha Zuniga"
          />
          <div id="profile">
            <h3>Profile</h3>
          </div>
        </div>
      </Observer>
    );
  }
}

export default About;
