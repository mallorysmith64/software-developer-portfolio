import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <ul className="right">
            <li>
              <a className="nav-item js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a className="nav-item js-scroll-trigger" href="#work">
                Work
              </a>
            </li>

            <li>
              <a className="nav-item js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>

            <li>
              <a className="nav-item js-scroll-trigger" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="nav-item js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav