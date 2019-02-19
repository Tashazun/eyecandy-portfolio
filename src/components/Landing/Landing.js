import React, { Component } from 'react';
import './Landing.scss';

import { FaBirthdayCake } from 'react-icons/fa';

class Landing extends Component {
    render() {
        return (
            <div className='landing-page'>
              <article id='bottom-shutter'>
                <h4 className='inner-text block-1'>Artist +</h4> 
                <h4 className='inner-text block-2'>Cake <FaBirthdayCake /> +</h4>
                <h4 className='inner-text block-3'>+ Great Ideas</h4>
                <div id='top-shutter'>
                  <h4 className='outer-text block-4'><p>Tasha Zuniga.</p></h4>
                  <h4 className='outer-text block-5'><p>Full-Stack</p></h4>
                  <h4 className='outer-text block-6'><p>Javascript</p></h4>
                  <h4 className='outer-text block-7'><p>Developer.</p></h4>
                </div>
              </article>
            </div>
        );
    }
}

export default Landing;