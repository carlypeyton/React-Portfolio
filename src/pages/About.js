import React from "react";
import "../assets/style/style.css";

const avatarStyle = {
  width: "80%",
  maxWidth: "340px",
  paddingBottom: "2%",
  borderRadius: "50%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}

const bioStyle = {
  paddingRight: "3rem",
  paddingLeft: "3rem",
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "20px",
  textAlign: "left",
}

const About = () => (
    <div className="container col-xl-8 col-lg-10 col-xs-12">
      <div className="row">
        <div className="col text-center">
          <h1 className="page-header animate__animated animate__tada">Hello! I'm Carly</h1>
          <hr />
          <img src="https://i.imgur.com/FK8koWQ.jpg" className="animate__animated animate__pulse" alt="Carly Peyton" style={avatarStyle} id="avatar" />
          <h2 id="work-title" className="animate__animated animate__pulse">Full Stack Developer</h2>
          <p id="bio" style={bioStyle}>
            I am a northern Michigan native, based in Metro Detroit, with a passion for the outdoors, travel, good food,
            and web design. I am excited to utilize my skills in creative problem solving, collaboration and global thinking 
            to create exraordinary user experiences and build innovative applications. 
            <br />
          </p>
          <p id="bio" style={bioStyle} className="text-center mt-4">
              JavaScript
              <br />
              CSS/Bootstrap/Handlebars
              <br />
              HTML5
              <br />
              Express/Node/React
              <br />
              jQuery/APIs/AJAX
              <br />
              MongoDB/MySQL
              <br />
              Git/GitHub
              <br />
              Responsive/Mobile-First Web Design
              <br />
          </p>
        </div>
      </div>
    </div>
);

export default About;
