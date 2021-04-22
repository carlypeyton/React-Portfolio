import React from "react";
import { Link } from "react-router-dom";
import NavBarStyle from "./NavBar.css"

const brandStyle = {
  fontSize: "1.75rem",
  fontFamily: "'Sacramento', cursive"
}

function NavBar() {
  return (
      <nav style={NavBarStyle} className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" style={brandStyle}>Carly Peyton</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav navbar-nav ml-auto text-right">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >About</Link>
            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >Portfolio</Link>
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >Contact</Link>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;