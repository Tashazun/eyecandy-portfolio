import React, { Component } from "react";
import Vivus from "vivus";

import "./Landing.scss";

import Poppies from "../../assets/PoppiesSimpleWhite.svg";
import PoppiesBlack from "../../assets/PoppiesSimpleBlack.svg";
import Logo from "../../assets/DesignLogo.svg";

class Landing extends Component {
  componentDidMount() {
    new Vivus("white", {
      type: "oneByOne",
      start: "autostart",
      duration: 30000,
      file: Poppies
    });

    new Vivus("black", {
      type: "oneByOne",
      start: "autostart",
      duration: 30000,
      file: PoppiesBlack
    });
  }

  render() {
    return (
      <div className="landing-page">
        <div id="top-layer">
          <img id="logo" src={Logo} alt="Mayan glyph that spells Zuniga" />
          <h2>Tasha Zuniga</h2>
          <div id="black" />
          <div id="border" />
        </div>
        <div id="bottom-layer">
          <div id="intro">
            <h3>Illustrator / Developer</h3>
            <div id="arrow-container">
              <div id="arrow-tail" />
              <div id="arrow-down" />
            </div>
          </div>
          <div id="white" />
        </div>
      </div>
    );
  }
}

export default Landing;
