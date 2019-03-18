import React, { Component } from "react";
import "./App.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Landing from "../Landing/Landing";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Landing />
        <About />
        <Projects />
        <Skills />
        <footer className="App-footer">
          <p>Tashazun(at)Gmail.com</p>
          <div>
            <FaGithub />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
