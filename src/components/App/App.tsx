import React, { Component } from 'react';
import './App.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <p>
            Personal Website
          </p>
        </header>
        <section>
          <div id="image1">
            <p>
              About
            </p>
          </div>
          <About />
          <div id="iamge2">
            <p>
              Projects
            </p>
          </div>
          <Projects />
          <div id="image3">
            <p>
              Contact
            </p>
          </div>
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
