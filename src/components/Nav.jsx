import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="nav">
         
          <ul className="main-menu-right">
            <li>
              <a className="nav" href="/#">
                Home
              </a>
            </li>
            <li>
              <a
                className="nav"
                href="https://github.com/mallorysmith64?tab=repositories"
              >
                Work
              </a>
            </li>
            <li>
              <a className="nav" href="/#">
                Resume
              </a>
            </li>
            <li>
              <a className="nav" href="/#">
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav
