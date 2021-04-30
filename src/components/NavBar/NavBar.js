import { Link } from "react-router-dom";
import NavBarStyle from "./NavBar.css"
import React, { useState } from "react";

const brandStyle = {
  fontSize: "2rem",
  fontFamily: "'Sacramento', cursive"
}

const NavBar = () => {
  const [show, setShow] = useState("");

  return (
    <nav style={NavBarStyle} className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={brandStyle}>Carly Peyton</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
        aria-expanded="false" aria-label="Toggle navigation" onClick={() => (show === "" ? setShow("show") : setShow(""))}
      >
        <i class="fas fa-angle-down"></i>
      </button>
      <div className={`collapse navbar-collapse justify-content-end ${show}`} id="navigation">
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