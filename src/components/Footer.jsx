import React, { Component } from 'react'
import CodeWars from './images/codewars_icon.jpeg'

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
                <a href="https://github.com/mallorysmith64?tab=repositories">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mallorysmith-42/">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.codewars.com/dashboard">
                  <img
                    className="codewars"
                    src={CodeWars}
                    alt="codewars site icon"
                    height="42"
                    width="42"
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
