import React from 'react';
import Selfie from '../components/pictures/profilePic.jpeg';

import Linkedin from '../components/pictures/linkedinIcon.png';
import Github from '../components/pictures/githubIcon.png';
import Resume from '../components/pictures/resumeIcon.png'

function Aside() {
    return (
        <aside className="benefits">
        <article>
            <h2>Aaron Larsh</h2>
                <img src={Selfie} alt="Picutre of me"/>
            <p>
                Hi! I am Aaron Larsh. This is my profile showcasing my various web projects.            
            </p>
        </article>
        <article>
            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/in/aaron-l-011ab2141/" target="_blank"><img src={Linkedin} alt="Brand awareness icon"/></a>   
            <h3>Github</h3>
            <a href="https://github.com/AaronLarsh" target="_blank"><img src={Github} alt="Brand awareness icon"/></a>    
            <h3>Resume</h3>
            <a href="https://docs.google.com/document/d/1EOVcW_cpBiLMGVBVjIoOL0Mqcym7y_maFIR-W9QI7tM/edit?usp=sharing" target="_blank"><img src={Resume} alt="Brand awareness icon"/></a>   
        </article>
    </aside>
    );
}
export default Aside;
