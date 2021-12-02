import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navigationBar">
        {/* <nav className="justify-content-end navbar navbar-dark navbar-expand-sm bg-light">
          <ul className="navbar-nav"> */}

        <nav id="navbar-example2" fixed="top" className="navbar navbar-dark bg-secondary ">
          <h2 style = {{color: "#1a1b1d" }}className="title">


{/* 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              fill="currentColor"
              className="bi bi-123"
              viewBox="0 0 16 16"
            >
              <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z" />
            </svg> */}


            BibSense
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="white"
              className="bi bi-camera"
              viewBox="0 0 16 16"
            >
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
          </h2>

          <ul  className="nav nav-pills">
            <li className="nav-item ">
              <NavLink className="btn btn-light btn-outline-secondary" to="/">
                Home
              </NavLink>
            </li>

            {/* <li className="nav-item ">
              <NavLink
                className="btn btn-light btn-outline-secondary "
                to="/bib"
              >
                Bib Number
              </NavLink>
            </li> */}

            <li className="nav-item ">
              <NavLink
                className="btn btn-light btn-outline-secondary "
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="btn btn-light btn-outline-secondary "
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
        </nav>
      </div>
    );
  }
}

export default Navbar;
