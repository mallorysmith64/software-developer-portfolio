import React, { Component } from 'react'
import ProfilePic from './images/mallory_profile_picture.jpeg'

class About extends Component {
  render() {
    return (
      <>
      <div className="about-me">
        <section className="profile-pic-container">
        <img
          className="img-style responsive-img"
          src={ProfilePic}
          alt="Mallory Smith's profile"
        />
        </section>

        <section className="about-container">
            <h5>Who I Am</h5>
            <p>I am a passionate web developer and an alumni from a fully immersive coding bootcamp called Suncoast Developer Guild.</p>

            <h5>What Motivates Me</h5>
            <p>What motivates me the most is the satisfaction that comes with
              problem solving and creating projects.</p>

            <h5>Where I Want To Go</h5>
            <p>1) I am currently working on earning my AWS associate developer certification. </p>
            <p>2) I want to build more projects in C# and javascript.</p>
            <p>3) I am currently learning python and would like to start building in that language, as well.</p>
            <p>4) 5 years from now, I want to be able to teach others what I have learned.</p>

          </section>
        </div>
      </>
    )
  }
}

export default About
