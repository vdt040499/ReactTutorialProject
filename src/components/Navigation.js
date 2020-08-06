import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand js-scroll-trigger" style={{ textDecoration: "none" }}>Start Bootsrap</NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/about" activeStyle={{
    fontWeight: "bold",
    color: "#EEE"
  }} className="nav-link js-scroll-trigger" style={{ textDecoration: "none" }} >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" activeStyle={{
    fontWeight: "bold",
    color: "#EEE"
  }} className="nav-link js-scroll-trigger" style={{ textDecoration: "none" }}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeStyle={{
    fontWeight: "bold",
    color: "#EEE"
  }} className="nav-link js-scroll-trigger" style={{ textDecoration: "none" }}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}