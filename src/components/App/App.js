import React, { Component } from 'react';
import './App.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Landing />
        <section>
          <div id="image1"></div>
          <About />
          <div id="image2"></div>
          <Projects />
          <div id="image3"></div>
          <Contact />
        </section>
        <footer className="App-footer">
          <p>
            Footer
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
