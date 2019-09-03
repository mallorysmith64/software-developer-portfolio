import React, { Component } from 'react'

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
              <li className="github">GitHub</li>
              <li className="linkedin">LinkedIn</li>
              <li className="codewars">CodeWars</li>
            </ul>
          </section>
        </footer>
      </>
    )
  }
}

export default Footer
