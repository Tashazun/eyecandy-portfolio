import React, { Component } from "react";
import Observer from "@researchgate/react-intersection-observer";
import profile from "../../assets/profile-backdrop.svg";
import "./About.scss";

class About extends Component {
  state = {
    visibility: "hidden"
  };

  handleChange = (event, unobserve) => {
    console.log("I work");
    this.setState({
      visibility: event.isIntersecting ? "visible" : "hidden"
    });
  };

  render() {
    return (
      <Observer onChange={this.handleChange} threshold={0.5}>
        <div id="about-container">
          <div className={`about-info ${this.state.visibility}`}>
            <h2>
              01 // Who is this <span>wunderkind?</span>
            </h2>
            <h2>She’s a child of the Portland streets.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              feugiat pellentesque aliquet. Donec eget malesuada diam. Duis
              sodales eros sit amet nulla fringilla, non iaculis enim posuere.
              Donec et molestie quam, vel feugiat nibh. Sed molestie felis
              mauris, sed condimentum mi porttitor sed.
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
