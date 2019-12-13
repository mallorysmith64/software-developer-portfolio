import React, { Component } from 'react'
import ProfilePic from './images/mallory_profile_picture.jpeg'

class About extends Component {
  render() {
    return (
      <>
        <section className="about-me">
          <img
            className="img-style"
            src={ProfilePic}
            alt="Mallory Smith's profile"
            height="200"
            width="200"
          />
          <section className="about-container">
            <header className="about">
              <h5>Who I Am</h5>
            </header>

            <p>
            I am an alumni from a fully immersive coding bootcamp called Suncoast Developer Guild.
            </p>

            <h5>What Motivates Me</h5>
            <p>
              What motivates me the most is the satisfaction that comes with
              problem solving and creating my own projects. Development is so much fun!
            </p>

            <h5>Where I Want To Go</h5>
            <p>
              Short-Term Goals:
            - I would like to earn my AWS associate developer certification. 
            - I want to increase my ability to code in C#, javascript, and python.
            </p>
            <p>
              Long-Term Goals:
            - 5 years from now, I want to be able to teach others my skill set.
            </p>

            <section>
              <a href='./resume/MalloryASmith_Resume.pdf' className="waves-effect waves-light btn" download>Download Resume</a>
            </section>

          </section>
        </section>
      </>
    )
  }
}

export default About
