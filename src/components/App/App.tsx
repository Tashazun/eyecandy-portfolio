import React, { Component } from 'react';
import './App.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <section className="App-landing-page">
          <article id='bottom-shutter'>
            <h4 className='inner-text'>Cinephile +</h4>
            <h4 className='inner-text'>Artist +</h4> 
            <h4 className='inner-text'>Cakes +</h4>
            <h4 className='inner-text'>+ Great Ideas</h4>
            <div id='top-shutter'>
              <h4 className='outer-text'><p>Tasha Zuniga.</p></h4>
              <h4 className='outer-text'><p>Full-Stack</p></h4>
              <h4 className='outer-text'><p>Javascript</p></h4>
              <h4 className='outer-text'><p>Developer</p></h4>
            </div>
          </article>
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
