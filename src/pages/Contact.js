import React from "react";
// import Form from "../components/Form/Form"
import resume from "../assets/documents/Resume.pdf"
import "../assets/style/style.css";
import GithubIcon from "../assets/icons/Github.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";

const linkStyle = {
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "1.25rem",
  lineHeight: "50px",
}

const iconStyle ={
  height: "20px"
}

const Contact = () => (
  <div className="container col-xl-8 col-lg-10 col-xs-12 animate__animated animate__slideInUp">
    <div className="row">
      <div className="col">
        <h1 className="page-header">Contact</h1>
        <hr />
        {/* <Form /> */}
        <div className="text-center">
          <span><i className="far fa-envelope pr-2"></i> <a href={`mailto:${"carlypeyton@gmail.com"}`} style={linkStyle} className="contact">carlypeyton@gmail.com</a></span>
          <br />
          <span><a href="https://github.com/carlypeyton" target="_blank" rel="noreferrer" style={linkStyle} className="contact">
            <img src={GithubIcon} alt="Github Logo" className="icon" style={iconStyle} />https://github.com/carlypeyton</a></span>
          <br />
          <span><a href="https://www.linkedin.com/in/carly-p-5141841ba/" target="_blank" rel="noreferrer" style={linkStyle} className="contact">
            <img src={LinkedInIcon} alt="LinkedIn Logo" className="icon" style={iconStyle}/>https://www.linkedin.com/in/carlypeyton/</a></span>
          <br />
          <span><i className="fas fa-arrow-down mb-4 pr-2"></i><a href={resume} download="Carly Peyton Resume" style={linkStyle} className="contact"> Download Resume</a></span>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
