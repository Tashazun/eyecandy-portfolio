import React, { Component } from "react";
import profile from "../../assets/profile-backdrop.svg";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div id="about-container">
        <div id="about-info">
          <h2>
            01 // Who is this <span>wunderkind?</span>
          </h2>
          <h2>She’s a child of the Portland streets.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
            pellentesque aliquet. Donec eget malesuada diam. Duis sodales eros
            sit amet nulla fringilla, non iaculis enim posuere. Donec et
            molestie quam, vel feugiat nibh. Sed molestie felis mauris, sed
            condimentum mi porttitor sed.
          </p>
        </div>
        <img src={profile} alt="Tasha Zuniga" />
        <div id="profile">
          <h3>Profile</h3>
        </div>
      </div>
    );
  }
}

export default About;
