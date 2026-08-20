import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <ul className="right">

          <li>
            <a className="nav-item js-scroll-trigger" href="#skills" onClick={() => navigate("/")}>
              Skills
            </a>
          </li>

          <li>
            <a className="nav-item js-scroll-trigger" href="#about" onClick={() => navigate("/")}>
              About
            </a>
          </li>

          <li>
            <a className="nav-item js-scroll-trigger" href="#contact" onClick={() => navigate("/")}>
              Contact
            </a>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Nav;
