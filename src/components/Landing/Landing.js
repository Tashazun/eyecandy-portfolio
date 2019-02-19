import React, { Component } from 'react';
import './Landing.scss';
class Landing extends Component {
    render() {
        return (
            <div className='landing-page'>
            <article id='bottom-shutter'>
            <h4 className='inner-text block-1'>Artist +</h4> 
            <h4 className='inner-text'>Cakes +</h4>
            <h4 className='inner-text'>+ Great Ideas</h4>
            <h4 className='inner-text'>+ Oregonian</h4>
            <div id='top-shutter'>
              <h4 className='outer-text block-2'><p>Tasha Zuniga.</p></h4>
              <h4 className='outer-text block-3'><p>Full-Stack</p></h4>
              <h4 className='outer-text block-4'><p>Javascript</p></h4>
              <h4 className='outer-text block-5'><p>Developer.</p></h4>
              <h4 className='outer-text filler-block'></h4>
            </div>
          </article>
            </div>
        );
    }
}

export default Landing;