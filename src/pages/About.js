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

const headerStyle = {
  fontFamily: "'Sacramento', cursive",
  fontSize: "3rem",
  textAlign: "center"
}

const bioStyle = {
  paddingRight: "5%",
  paddingLeft: "5%",
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "18px"
}

const About = () => (
  <div className="col">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={headerStyle}>Hello! I'm Carly.</h1>
          <hr />
          <img src="https://i.imgur.com/zo2xI29.jpg" alt="Carly Peyton" style={avatarStyle}/>
          <p id="bio" style={bioStyle}>
          I'm a northern Michigan native based in Metro Detroit, with a passion for the outdoors, travel, good food,
          and design. I graduated from the University of Michigan with a degree in environmetal
          science, and have recently completed my certification in Full-Stack Development from Michigan State University College of Engineering.
          <br />
          <br />
          I am passionate about building ___.
          </p>
          <br />
          <p id="bio" style={bioStyle} className="text-center">
          JavaScript
          <br/>
          CSS/Bootstrap/Handlebars
          <br/>
          HTML5
          <br/>
          Express/Node/React
          <br/>
          jQuery/APIs/AJAX
          <br/>
          MongoDB/MySQL
          <br />
          <br />
          <i className="far fa-envelope"></i> <a href={`mailto:${"carlypeyton@gmail.com"}`}>carlypeyton@gmail.com</a>
          <br/>
          <i class="fas fa-arrow-down"></i><a href="Resume.pdf" download="Carly Peyton Resume"> Download Resume</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
</div>
);

export default About;
