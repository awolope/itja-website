import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "./Logo.png";
import "./navbarh.css";
const Navbarh = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <img src="./Logo.png" alt="Logo"></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/course-enrollment">
                Course Enrollment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company">
                Company
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn " to="/signup">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btnn btn " to="/get-started">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarh;
