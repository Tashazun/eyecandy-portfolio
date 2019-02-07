import React, { Component } from 'react';
import './App.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Personal Website
          </p>
        </header>
        <section>
          <About />
          <Projects />
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
