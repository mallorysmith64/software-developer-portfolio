import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="main-menu-right">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav
