import React, { Component } from "react";
import ProfilePic from "./images/social_images/mars_profile_picture.jpeg";

class About extends Component {
  render() {
    return (
      <>
        <header className="about-me-header" id="about">
          <h2>About Me</h2>
        </header>

        <div className="about-me">
          <section className="profile-pic-container">
            <img
              className="img-style responsive-img"
              src={ProfilePic}
              alt="Mars Smith's profile"
            />
          </section>

          <section className="about-container">
            <u>Who I Am</u>
            <p>
              Formally, my name is Mallory A. Smith. However, I go by Mars Cannon. 
              I'm a passionate software developer from the
              Tampa Bay area. 
            </p>

            <u>What Motivates Me</u>
            <p>
              What motivates me the most is the satisfaction that comes with
              problem solving and creating new projects.
            </p>

            <u>Favorite Hobbies</u>
            <p>
              My favorite hobbies includes the following: writing, investing, meditating, reading, writing,
              petting puppies, drinking tea, writing...Hmmm, did I mention
              writing yet? I really love to write.
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default About;
