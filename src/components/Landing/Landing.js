import React, { Component } from "react";
import "./Landing.scss";
import Poppies from "../../assets/PoppiesSimpleWhite.svg";
import PoppiesBlack from "../../assets/PoppiesSimpleBlack.svg";
import Logo from "../../assets/DesignLogo.svg";
import Vivus from "vivus";

class Landing extends Component {
  componentDidMount() {
    new Vivus("poppies", {
      type: "oneByOne",
      start: "autostart",
      duration: 45000,
      file: Poppies
    });

    new Vivus("top", {
      type: "oneByOne",
      start: "autostart",
      duration: 45000,
      file: PoppiesBlack
    });
  }

  render() {
    return (
      <div className="landing-page">
        <div id="top">
          <img src={Logo} alt="Mayan glyph that spells Zuniga" />
          <h2>Tasha Zuniga</h2>
        </div>
        <div id="poppies" />
      </div>
    );
  }
}

export default Landing;
