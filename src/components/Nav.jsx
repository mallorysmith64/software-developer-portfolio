import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
      {/* todo: make breadcrumbs for projects, skills, about me, and contact sections */}
        <nav className="nav">
         
          <ul className="main-menu-right">
            <li>
              <a
                className="nav"
                href="https://github.com/mallorysmith64"
              >
                Projects
              </a>
            </li>
          </ul>

        </nav>
      </>
    )
  }
}

export default Nav
