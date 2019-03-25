import React, { Component } from "react";
import "intersection-observer";
import Observer from "@researchgate/react-intersection-observer";
import profile from "../../assets/Navi2.png";
import "./About.scss";

class About extends Component {
  state = {
    enterLeft: "hidden-left",
    enterRight: "hidden-right"
  };

  handleChange = event => {
    this.setState({
      enterLeft: event.isIntersecting ? "visible-left" : "hidden-left",
      enterRight: event.isIntersecting ? "visible-right" : "hidden-right"
    });
  };

  render() {
    return (
      <Observer onChange={this.handleChange} threshold={0.25}>
        <div id="about-container">
          <div className={`about-info ${this.state.enterLeft}`}>
            <h2 id="about-block1">
              01 // Who is this <span>wunderkind?</span>
            </h2>
            <h2 id="about-block2">She’s a child of the Portland streets...</h2>
          </div>

          <div className={`about-summary ${this.state.enterLeft}`}>
            <p>
              An enthusiastic professional who strives to make thrilling,
              interactive, front-end experiences.
            </p>
            <p>
              She's an unapologetic artist and full-stack Javascript developer
              who uses her knowledge of front and back-end to make some really
              cool stuff.
            </p>
            <p>
              When away from the computer, or a sketch book, she can often be
              found practising with her longsword and taking her dog(world's
              goodest boy) out for long hikes.
            </p>
          </div>

          <div id="profile">
            <h3>Profile</h3>
          </div>
          <div id="white" />
          <img
            className={`${this.state.enterRight}`}
            src={profile}
            alt="Tasha Zuniga"
          />
        </div>
      </Observer>
    );
  }
}

export default About;
