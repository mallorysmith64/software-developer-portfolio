import React, { Component } from "react";
import ProfilePic from "./images/mallory_profile_picture.jpeg";

class About extends Component {
  render() {
    return (
      <>
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
              I am a passionate software developer from The Sunshine
              State, FL.
            </p>

            <h5>What Motivates Me</h5>
            <p>
              What motivates me the most is the satisfaction that comes with
              problem solving and creating new projects.
            </p>

            {/* <h5>Where I Want To Go</h5>
            <p>
              1) I am currently learning C.
            </p>

            <p>
              2) 
            </p> */}

          </section>
        </div>
      </>
    )
  }
}

export default About
