import React from "react";
import Project from "../components/Project/Project"
import "../assets/style/style.css";
import codeQuiz from "../assets/images/Code-Quiz.png";
import dayPlanner from "../assets/images/Day-Planner.png";
import dayrec from "../assets/images/Dayrec.png";
import eatDaBurger from "../assets/images/Eat-Da-Burger.png";
import employeeDirectory from "../assets/images/Employee-Directory.png";
import fitnessTracker from "../assets/images/Fitness-Tracker.png";
import noteTaker from "../assets/images/Note-Taker.png";
import puppyPartyPlanner from "../assets/images/Puppy-Party-Planner.png";
import teamProfileGenerator from "../assets/images/Team-Profile-Generator.png";
import weatherDashboard from "../assets/images/Weather-Dashboard.png";
import petPandemonium from "../assets/images/Pet-Pandemonium.png";

const Portfolio = () => (
  <div className="container col-xl-8 col-lg-10 col-xs-12 animate__animated animate__slideInLeft">
    <div className="row">
      <div className="col">
        <h1 className="page-header">Portfolio</h1>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Pet-Pandemonium" className="repo" target="_blank" rel="noreferrer">Pet Pandemonium</a>
          <p className="project-description">A Battleship-style game, with a twist! Compete as cats or dogs for the coveted spot in the yard.</p>
          <p className="project-description">JavaScript | CSS | React | Node | Express | MongoDB | Socket.io | Howler.js | Heroku | Passport | Axios | Bootstrap </p>
          <a href="https://pet-pandemonium.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={petPandemonium} className="repo-image" alt="Pet Pandemonium Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Puppy-Party-Planner" className="repo" target="_blank" rel="noreferrer">Puppy Party Planner</a>
          <p className="project-description">An application for planning outings with your pup, based on location and weather preferences.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Materialize | jQuery</p>         
          <a href="https://jaortisi6.github.io/Puppy-Party-Planner/" target="_blank" rel="noreferrer">
            <img src={puppyPartyPlanner} className="repo-image" alt="Puppy Party Planner Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Code-Quiz" className="repo" target="_blank" rel="noreferrer">Code Quiz</a>
          <p className="project-description">Test your coding knowledge with this Code Quiz.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Bootstrap | jQuery</p>  
           <a href="https://carlypeyton.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
            <img src={codeQuiz} className="repo-image" alt="Code Quiz Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Day-Planner" className="repo" target="_blank" rel="noreferrer">Day Planner</a>
          <p className="project-description">Day planning application to help users track schedule and tasks.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Bootstrap | jQuery</p>  
          <a href="https://carlypeyton.github.io/Day-Planner/" target="_blank" rel="noreferrer">
            <img src={dayPlanner} className="repo-image" alt="Day Planner Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Weather-Dashboard" className="repo" target="_blank" rel="noreferrer">Weather Dashboard</a>
          <p className="project-description">Weather application allows users to search for cities and view current weather and 5-day forecast.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Bootstrap | jQuery | AJAX | Moment.js | Open Weather Map API </p>            
          <a href="https://carlypeyton.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
            <img src={weatherDashboard} className="repo-image" alt="Weather Dashboard Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Team-Profile-Generator" className="repo" target="_blank" rel="noreferrer">Team Profile Generator</a>
          <p className="project-description">Command-line application to create a complete software engineering team profile.</p>
          <p className="project-description">JavaScript | Node | Jest </p>            
          <a href="https://github.com/carlypeyton/Team-Profile-Generator" target="_blank" rel="noreferrer">
            <img src={teamProfileGenerator} className="repo-image" alt="Team Profile Generator Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Eat-Da-Burger" className="repo" target="_blank" rel="noreferrer">Eat Da Burger</a>
          <p className="project-description">Restaurant application to track tasty burger menu.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Express | Express-Handlebars | MySQL </p>  
          <a href="https://pure-badlands-79583.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={eatDaBurger} className="repo-image" alt="Eat Da Burger Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Note-Taker" className="repo" target="_blank" rel="noreferrer">Note Taker</a>
          <p className="project-description">Write and save notes with this note taking application.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Express | UUID </p>  
          <a href="https://github.com/carlypeyton/Note-Taker" target="_blank" rel="noreferrer">
            <img src={noteTaker} className="repo-image" alt="Note Taker Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/DAYREC" className="repo" target="_blank" rel="noreferrer">DAYREC</a>
          <p className="project-description">Betting application for virtual classroom and instructions.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Node | Swagger | MySQL </p>  
          <a href="https://dayrec.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={dayrec} className="repo-image" alt="DAYREC Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Employee-Directory" className="repo" target="_blank" rel="noreferrer">Employee Directory</a>
          <p className="project-description">Search through and filter employees in this Employee Directory.</p>
          <p className="project-description">JavaScript | CSS | React | Bootstrap | React-Bootstrap | Axios | Node </p>           
          <a href="https://tranquil-dusk-31741.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={employeeDirectory} className="repo-image" alt="Employee Directory Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Fitness-Tracker" className="repo" target="_blank" rel="noreferrer">Fitness Tracker</a>
          <p className="project-description">Fitness Tracker application to track daily workout routines and view a weekly summary of workouts, to help users reach fitness goals.</p>
          <p className="project-description">JavaScript | CSS | HTML5 | Express | Mongoose | Morgan </p>            
          <a href="https://infinite-spire-14205.herokuapp.com/?id=607de0908fc3a500158f039b" target="_blank" rel="noreferrer">
            <img src={fitnessTracker} className="repo-image" alt="Fitness Tracker Preview"></img></a>
        </Project>
      </div>
    </div>
  </div>
);

export default Portfolio;
