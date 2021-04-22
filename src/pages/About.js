import React from "react";
import Footer from "../components/Footer/Footer";
import "../assets/style/style.css";

const avatarStyle = {
  width: "310px",
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
  fontSize: "20px"
}

const linkStyle = {
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "20px"
}

const About = () => (
  <div className="col">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="page-header">Hello! I'm Carly.</h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xl-4 col-lg-12 text-center">
          <img src="https://i.imgur.com/zo2xI29.jpg" alt="Carly Peyton" style={avatarStyle} id="avatar"/>
          <i className="far fa-envelope aboutLink"></i> <a href={`mailto:${"carlypeyton@gmail.com"}`} style={linkStyle} >carlypeyton@gmail.com</a>
          <br />
          <i className="fas fa-arrow-down aboutLink mb-4"></i><a href="Resume.pdf" download="Carly Peyton Resume" style={linkStyle} > Download Resume</a>
        </div>
        <div className="col-xl-8 col-lg-12 bio-section">
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
    <Footer />
  </div>
);

export default About;
