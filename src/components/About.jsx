import React, { Component } from "react";
import ProfilePic from "./images/mallory_profile_picture.jpeg";

class About extends Component {
  render() {
    return (
      <>
        <header className="about-me-title">
          <h2>About Me</h2>
        </header>

        <div className="about-me" id="about">
          <section className="profile-pic-container">
            <img
              className="img-style responsive-img"
              src={ProfilePic}
              alt="Mallory Smith's profile"
            />
          </section>

          <section className="about-container">
            <h5>Who I Am</h5>
            <p>
              I'm Mallory A. Smith, a passionate software developer from the
              Tampa Bay area.
            </p>

            <h5>What Motivates Me</h5>
            <p>
              What motivates me the most is the satisfaction that comes with
              problem solving and creating new projects.
            </p>

            <h5>Hobbies</h5>
            <p>
              I enjoy practicing yoga, meditation, reading, and writing book
              reviews.
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default About;
