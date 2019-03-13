import React, { Component } from "react";
import Vivus from "vivus";

import "./Landing.scss";

import Poppies from "../../assets/PoppiesSimpleWhite.svg";
import PoppiesBlack from "../../assets/PoppiesSimpleBlack.svg";
import Logo from "../../assets/DesignLogo.svg";
import { FaArrowDown } from "react-icons/fa";

class Landing extends Component {
  componentDidMount() {
    new Vivus("white", {
      type: "oneByOne",
      start: "autostart",
      duration: 45000,
      file: Poppies
    });

    new Vivus("black", {
      type: "oneByOne",
      start: "autostart",
      duration: 45000,
      file: PoppiesBlack
    });
  }

  render() {
    return (
      <div className="landing-page">
        <div id="top-layer">
          <img src={Logo} alt="Mayan glyph that spells Zuniga" />
          <h2>Tasha Zuniga</h2>
          <div id="black" />
        </div>
        <div id="bottom-layer">
          <div id="intro">
            <h3>Illustrator / Developer</h3>
            <FaArrowDown />
          </div>
          <div id="white" />
        </div>
      </div>
    );
  }
}

export default Landing;
