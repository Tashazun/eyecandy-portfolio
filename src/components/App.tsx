import React, { Component } from 'react';
import '../assets/App.scss';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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
      </div>
    );
  }
}

export default App;
