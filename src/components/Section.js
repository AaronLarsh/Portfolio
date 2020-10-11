import React from 'react';

import PWG from '../components/pictures/passwordGeneratorWebsite.gif';
import WP from '../components/pictures/workplanner.gif';
import IQ from '../components/pictures/inQuotationsPic.jpg'
import Game from '../components/pictures/game gif.gif'




function Section() {
    return (
        <section className="content">
        <article>
            <a id="passwordGenerator" data-hs-anchor="true"></a>
            <img src={PWG} alt="Screen shot of my Password Generator website" className="float-left" />
            <a href="#"><h2>Password Generator</h2></a>
            <p>
                This project is a password generate based on user input.
            </p>
            <a href="https://github.com/AaronLarsh/Password-Generator" target="_blank">Password Generator Github Repo</a><br></br>
            <a href="https://aaronlarsh.github.io/Password-Generator/" target="_blank">Password Generator Github deployment</a>
        </article>
        <article>
            <a id="workdayScheduler" data-hs-anchor="true"></a>
            <img src={WP} alt="Screen shot of my Password Generator website" className="float-left" />
            <a href="#"><h2>Workday Scheduler</h2></a>
            <p>
                This project is a daily planner for record task and todo's based on user input.
            </p>
            <a href="https://github.com/AaronLarsh/Work-Day-Scheduler" target="_blank">Workday Scheduler Github Repo</a><br></br>
            <a href="https://aaronlarsh.github.io/Work-Day-Scheduler/" target="_blank">Workday Scheduler Github deployment</a>
        </article>        
        <article>
            <a id="inQuotations" data-hs-anchor="true"></a>
            <img src={IQ} alt="Screen shot of my Password Generator website" className="float-left" />
            <a href="#"><h2>In Quotations</h2></a>
            <p>
                This project is quote generate that generates up two five random quotes based on key word or author name.
            </p>
            <a href="https://github.com/tiffcrockett/In-Quotations.github.io" target="_blank">In Quotations Github Repo</a><br></br>
            <a href="https://tiffcrockett.github.io/In-Quotations.github.io/" target="_blank">In Quotations Github deployment</a>
        </article>
        <article>
            <a id="game" data-hs-anchor="true"></a>
            <img src={Game} alt="Screen shot of our game" className="float-left" />
            <a href="#"><h2>Box Up Game</h2></a>
            <p>
                This project contains a log in page where users can put in email and password to log into the game Box UP and play it.
            </p>
            <a href="https://github.com/TanJamBoy/Project_2_TB_AL" target="_blank">Box Up Game Github Repo</a><br></br>
            <a href="https://limitless-retreat-32247.herokuapp.com/" target="_blank">Box Up Game Heroku</a>
        </article>
    </section>
    );
}

export default Section;
