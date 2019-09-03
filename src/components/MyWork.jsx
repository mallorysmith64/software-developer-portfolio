import React, { Component } from 'react'
import SpaceX from './images/space_x_screenshot.png'
import Octodex from './images/octodex_screenshot.png'
import Minesweeper from './images/minesweeper_screenshot.png'
import TV from './images/tv_guide_screenshot.png'
import Weather from './images/weather_screenshot.png'

class MyWork extends Component {
  render() {
    return (
      <>
        <main className="projects">
          <section className="space-x-container">
            <h1 className="space-x">SpaceX Project</h1>
            <img src={SpaceX} alt="space-x project overview" />
          </section>
          <section>
            <h1 className="octodex-container">Octodex Project</h1>
            <img src={Octodex} alt="octodex project overview" />
          </section>
          <section>
            <h1 className="minesweeper-container">Minesweeper</h1>
            <img src={Minesweeper} alt="minesweeper project overview" />
          </section>
          <section>
            <h1 className="tv-guide-container">TV Guide</h1>
            <img src={TV} alt="TV guide project overview" />
          </section>
          <section>
            <h1 className="weather-container">Weather</h1>
            <img src={Weather} alt="weather project overview" />
          </section>
        </main>
      </>
    )
  }
}

export default MyWork
