import React from "react";
import "../assets/style/style.css";
import resume from "../assets/documents/Resume.pdf"

const avatarStyle = {
  width: "80%",
  maxWidth: "340px",
  paddingTop: "1%",
  paddingBottom: "4%",
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

const linkStyle = {
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "20px",
}

const About = () => (
    <div className="container col-xl-8 col-lg-10 col-xs-12">
      <div className="row">
        <div className="col text-center">
          <h1 className="page-header">Hello! I'm Carly.</h1>
          <hr />
          <img src="https://i.imgur.com/zo2xI29.jpg" alt="Carly Peyton" style={avatarStyle} id="avatar" />
          <h2 id="work-title">Full Stack Developer</h2>
          <i className="far fa-envelope"></i> <a href={`mailto:${"carlypeyton@gmail.com"}`} style={linkStyle} >carlypeyton@gmail.com</a>
          <br />
          <i className="fas fa-arrow-down mb-4"></i><a href={resume} download="Carly Peyton Resume" style={linkStyle} > Download Resume</a>
          <p id="bio" style={bioStyle}>
            I'm a northern Michigan native, based in Metro Detroit, with a passion for the outdoors, travel, good food,
            and design. I graduated from the University of Michigan with a degree in environmetal
            science, and have earned a certification in Full-Stack Development from Michigan State University College of Engineering.
            <br />
            <br />
            I am passionate about creating an extraordinary user experience, building innovative applications, creative problem-solving, and teamwork. Please check out my Portfolio!
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
              Responsive/Mobile-First Web Design
              <br />
          </p>
        </div>
      </div>
    </div>
);

export default About;
