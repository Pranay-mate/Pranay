import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";


import { Link } from "react-scroll";


function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" href="/" activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          CLOCK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="home" activeClass="active"
            to="date_time"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}>
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link
            className="nav-item nav-link"
              activeClass="active"
              to="date_time"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Indian Time</Link>
            <Link
            className="nav-item nav-link"
              activeClass="active"
              to="world_clock"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >World Clock</Link>

          </div>
        </div>
      </nav>

    </div>

  );
}

export default Navbar;
