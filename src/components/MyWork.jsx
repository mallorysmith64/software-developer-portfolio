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
          <h5>My Work</h5>
        </section>
        <main className="photo-container">
          {/* <section className="space-x-container">
            <h1 className="space-x">SpaceX Project</h1>
            <img src={SpaceX} alt="space-x project overview" />
          </section> */}
          <section className="img-style">
            <img
              src={Octodex}
              alt="octodex project overview"
              height="400"
              width="300"
            />
          </section>
          <section>
            <img
              src={Minesweeper}
              alt="minesweeper project overview"
              height="400"
              width="300"
            />
          </section>
          <section>
            <img
              src={TV}
              alt="TV guide project overview"
              height="400"
              width="300"
            />
          </section>
        </main>
        <main className="photo-container">
          {/* <section className="space-x-container">
            <h1 className="space-x">SpaceX Project</h1>
            <img src={SpaceX} alt="space-x project overview" />
          </section> */}
          <section>
            <img
              src={Weather}
              alt="weather project overview"
              height="400"
              width="300"
            />
          </section>
          <section>
            <img
              src={Minesweeper}
              alt="minesweeper project overview"
              height="400"
              width="300"
            />
          </section>
          <section>
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
