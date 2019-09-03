import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
        <section className="about-container">
          <header className="about">
            <h5>Who I Am</h5>
          </header>
          <p>
            When I am not coding, I am studying biology or practicing doing
            yoga.
          </p>
          <h5>What Motivates Me</h5>
          <p>
            What motivates me the most is the satisfaction that comes with
            problem solving and creating my own projects.
          </p>
          <h5>Where I Want To Go</h5>
          <p>
            5 years from now I would like to be able to combine some of my
            biology knowledge with my coding skills.
          </p>
        </section>
        <section>
          <a href="/#" className="waves-effect waves-light btn">
            View Resume
          </a>
        </section>
      </>
    )
  }
}

export default About
