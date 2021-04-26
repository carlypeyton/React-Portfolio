import React from "react";
import GithubIcon from "../../assets/icons/Github.png";
import LinkedInIcon from "../../assets/icons/LinkedIn.png";
import FooterStyle from "./Footer.css"

function Footer() {
  return (
    <footer className="footer-margin fixed-bottom card-footer bg-light footer-font-style text-muted footer-position" style={FooterStyle}>
      <a href="https://github.com/carlypeyton" target="_blank" rel="noreferrer">
        <img src={GithubIcon} alt="Github Logo" className="icon"/></a>
      <a href="https://www.linkedin.com/in/carly-p-5141841ba/" target="_blank" rel="noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn Logo" className="icon"/></a>
    </footer>
  );
}

export default Footer;
