import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="nav">
         
          <ul className="main-menu-right">
            <li>
              <a
                className="nav"
                href="https://github.com/mallorysmith64?tab=repositories"
              >
                Projects
              </a>
            </li>
            <li>
              <a className="nav" href="https://github.com/mallorysmith64/MalloryASmith_Resume/blob/master/MalloryASmith_Resume.pdf">
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
