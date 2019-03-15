import React, { Component } from "react";
import doggo from "../../assets/doggo.svg";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <img src={doggo} alt="cute doggo" />
        <h2>What can she do?</h2>
      </div>
    );
  }
}

export default Contact;
