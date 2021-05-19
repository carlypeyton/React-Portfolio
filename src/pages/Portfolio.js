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
import petPandemonium from "../assets/images/Pet-Pandonium.png";

const Portfolio = () => (
  <div className="container col-xl-8 col-lg-10 col-xs-12 animate__animated animate__slideInLeft">
    <div className="row">
      <div className="col">
        <h1 className="page-header">Portfolio</h1>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Pet-Pandemonium" className="repo" target="_blank" rel="noreferrer">Pet Pandemonium</a>
          <a href="https://pet-pandemonium.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={petPandemonium} className="repo-image" alt="Pet Pandemonium Preview"></img></a>
        </Project>
        <Project>
          <a href="https://github.com/carlypeyton/Puppy-Party-Planner" className="repo" target="_blank" rel="noreferrer">Puppy Party Planner</a>
          <a href="https://jaortisi6.github.io/Puppy-Party-Planner/" target="_blank" rel="noreferrer">
            <img src={puppyPartyPlanner} className="repo-image" alt="Puppy Party Planner Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Code-Quiz" className="repo" target="_blank" rel="noreferrer">Code Quiz</a>
          <a href="https://carlypeyton.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
            <img src={codeQuiz} className="repo-image" alt="Code Quiz Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Day-Planner" className="repo" target="_blank" rel="noreferrer">Day Planner</a>
          <a href="https://carlypeyton.github.io/Day-Planner/" target="_blank" rel="noreferrer">
            <img src={dayPlanner} className="repo-image" alt="Day Planner Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Weather-Dashboard" className="repo" target="_blank" rel="noreferrer">Weather Dashboard</a>
          <a href="https://carlypeyton.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
            <img src={weatherDashboard} className="repo-image" alt="Weather Dashboard Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Team-Profile-Generator" className="repo" target="_blank" rel="noreferrer">Team Profile Generator</a>
          <a href="https://github.com/carlypeyton/Team-Profile-Generator" target="_blank" rel="noreferrer">
            <img src={teamProfileGenerator} className="repo-image" alt="Team Profile Generator Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Eat-Da-Burger" className="repo" target="_blank" rel="noreferrer">Eat Da Burger</a>
          <a href="https://pure-badlands-79583.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={eatDaBurger} className="repo-image" alt="Eat Da Burger Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Note-Taker" className="repo" target="_blank" rel="noreferrer">Note Taker</a>
          <a href="https://github.com/carlypeyton/Note-Taker" target="_blank" rel="noreferrer">
            <img src={noteTaker} className="repo-image" alt="Note Taker Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/DAYREC" className="repo" target="_blank" rel="noreferrer">DAYREC</a>
          <a href="https://dayrec.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={dayrec} className="repo-image" alt="DAYREC Preview"></img></a>
        </Project>
        <hr />
        <Project>
          <a href="https://github.com/carlypeyton/Employee-Directory" className="repo" target="_blank" rel="noreferrer">Employee Directory</a>
          <a href="https://tranquil-dusk-31741.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={employeeDirectory} className="repo-image" alt="Employee Directory Preview"></img></a>
        </Project>
        <hr />
        <Project><a href="https://github.com/carlypeyton/Fitness-Tracker" className="repo" target="_blank" rel="noreferrer">Fitness Tracker</a>
          <a href="https://infinite-spire-14205.herokuapp.com/?id=607de0908fc3a500158f039b" target="_blank" rel="noreferrer">
            <img src={fitnessTracker} className="repo-image" alt="Fitness Tracker Preview"></img></a>
        </Project>
      </div>
    </div>
  </div>
);

export default Portfolio;
