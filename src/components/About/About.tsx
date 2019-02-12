import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div id='about-container'>
                <h2>She’s a child of the Portland streets. A coder | An illustrator | A gamer</h2>
                <p>First inspired by the 2001 classic, Antitrust, I attempted to get into the alluring world of code, but once my twelve year old self realized I wouldn’t be battling corporate conspiracy anytime soon, I lost a bit of steam. However, it was always in the corner of my mind from then on, throughout my forays into taxidermy and artistry I ended up back at the computer.

                These days I’m a Full-Stack Javascript developer with primary leaning towards the Front-End. I most often use the MERN stack, but I’m always looking for new and interesting ways to make cool projects. Sass is my jam right now, and making slick responsive layouts just fills me with glee.

                Outside of all that you can find me chilling with dog, Journey, either in the woods or playing an RPG.</p>
            </div>
        );
    }
}

export default About;