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
            <a id="github" href="https://github.com/Tashazun">
              <FaGithub />
            </a>
            <a id="linkedin" href="https://linkedin.com/in/tashazuniga/">
              <FaLinkedinIn id="linkedin" />
            </a>
            <a id="twitter" href="https://twitter.com/artofobscura">
              <FaTwitter />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
