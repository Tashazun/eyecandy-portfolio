import React, { Component } from 'react';
import './App.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import picture from '../../assets/beach-pic.jpg';
class App extends Component {
  render() {
    return (
      <div className="App-container">
        <section className="App-landing-page">
          <img src={picture} alt='Photo of Tasha Zuniga gazing out to sea' />
          <p>
            Tasha Zuniga
          </p>
        </section>
        <section>
          <div id="image1">
            <p className='page-title'>
              About
            </p>
          </div>
          <About />
          <div id="image2">
            <p className='page-title'>
              Projects
            </p>
          </div>
          <Projects />
          <div id="image3">
            <p className='page-title'>
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
