import React, { Component } from 'react'
// import SpaceX from './images/space_x_screenshot.png'
import Octodex from './images/octodex_screenshot_resized.png'
import Minesweeper from './images/minesweeper_screenshot.png'
import TV from './images/tv_guide_screenshot_resized.png'
import Weather from './images/weather_screenshot.png'

class MyWork extends Component {
  render() {
    return (
      <>
        <section className="project-header">
          <h2>Projects</h2>
        </section>
        
        <main className="photo-container">
          <section className="img-style">
            <img
              src={Octodex}
              alt="octodex project overview"
              height="400"
              width="300"
            />
          </section>
          <section className="img-style">
            <img
              src={Minesweeper}
              alt="minesweeper project overview"
              height="400"
              width="300"
            />
          </section>

          <section className="img-style">
            <img
              src={TV}
              alt="TV guide project overview"
              height="400"
              width="300"
            />
          </section>
        </main>
        <main className="photo-container">

          <section className="img-style">
            <img
              src={Weather}
              alt="weather project overview"
              height="400"
              width="300"
            />
          </section>

          <section className="img-style">
            <img
              src={Minesweeper}
              alt="minesweeper project overview"
              height="400"
              width="300"
            />
          </section>

          <section className="img-style">
            <img
              src={TV}
              alt="TV guide project overview"
              height="400"
              width="300"
            />
          </section>
        </main>
      </>
    )
  }
}

export default MyWork
