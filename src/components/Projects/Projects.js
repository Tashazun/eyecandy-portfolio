import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
    render() {
        return (
            <div id='projects-container'>
                <h2>Projects</h2>
                <div id='projects-list'>
                    <div className='project-block'>
                        Project1
                        <p>Summary of project.</p>
                        <button>View on Github</button>
                    </div>
                    <div className='project-block'>
                        Project2
                        <p>Summary of second project.</p>
                        <button>View on Github</button>
                    </div>
                    <div className='project-block'>
                        Project3
                        <p>Summary of final project.</p>
                        <button>View on Github</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;