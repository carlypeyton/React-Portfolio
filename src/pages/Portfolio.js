import React from "react";
import Project from "../components/Project/Project"
import Footer from "../components/Footer/Footer";
import "../assets/style/style.css";

const headerStyle = {
  fontFamily: "'Sacramento', cursive",
  fontSize: "3rem"
}

const Portfolio = () => (
  <div>
    <div className="container" id="portfolio-container">
      <h1 style={headerStyle}>Portfolio</h1>
      <hr />
      <div className="row image-row">
        <Project />
      </div>
    </div>
    <Footer />
  </div>
);

export default Portfolio;
