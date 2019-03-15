import React, { Component } from "react";
import "./App.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Landing from "../Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Landing />
        <About />
        <Projects />
        <Skills />
        <footer className="App-footer">
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
