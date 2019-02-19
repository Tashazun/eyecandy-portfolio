import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
    render() {
        return (
            <div id='projects-container'>
                <h2>Projects</h2>
                <div id='projects-list'>
                    <div className='project-block'>Project1</div>
                    <div className='project-block'>Project2</div>
                    <div className='project-block'>Project3</div>
                </div>
            </div>
        );
    }
}

export default Projects;