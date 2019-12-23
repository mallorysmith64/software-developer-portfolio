import React, { Component } from 'react'
import CodeWars from './images/codewars_icon.jpeg'
import Linkedin from './images/linkedin_icon.png'
import GitHub from './images/github_icon.png'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer">
          <section className="copyright">
            <p>Copyright Mallory Smith 2019</p>
          </section>
          <section>
            <ul className="footer-link-container">

              <li>
                <a href="https://github.com/mallorysmith64">
                <img
                    className="github responsive-img"
                    src={GitHub}
                    alt="GitHub site icon"
                  />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/mallorysmith-64/">
                  <img
                    className="linkedin responsive-img"
                    src={Linkedin}
                    alt="linkedin site icon"
                  />
                </a>
              </li>

              <li>
                <a href="https://www.codewars.com/dashboard">
                  <img
                    className="codewars responsive-img"
                    src={CodeWars}
                    alt="codewars site icon"
                  />
                </a>
              </li>

            </ul>
          </section>
        </footer>
      </>
    )
  }
}

export default Footer
