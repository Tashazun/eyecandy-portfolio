import React, { Component } from "react";
import "./Landing.scss";
import Poppies from "../../assets/PoppiesSimpleWhite.svg";
import { FaBirthdayCake } from "react-icons/fa";
import Vivus from "vivus";

class Landing extends Component {
  componentDidMount() {
    new Vivus("poppies", { type: "oneByOne", duration: 15000, file: Poppies });
  }

  render() {
    return (
      <div className="landing-page">
        <article id="bottom-shutter">
          <h4 className="inner-text block-1">Artist +</h4>
          <h4 className="inner-text block-2">
            Cake <FaBirthdayCake /> +
          </h4>
          <h4 className="inner-text block-3">+ Great Ideas</h4>
          <div id="top-shutter">
            <h4 className="outer-text block-4">
              <p>Tasha Zuniga.</p>
            </h4>
            <h4 className="outer-text block-5">
              <p>Full-Stack</p>
            </h4>
            <h4 className="outer-text block-6">
              <p>Javascript</p>
            </h4>
            <h4 className="outer-text block-7">
              <p>Developer.</p>
            </h4>
          </div>
        </article>
        <div id="poppies" />
      </div>
    );
  }
}

export default Landing;
