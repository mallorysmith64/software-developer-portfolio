import React, { Component } from 'react'
import SpaceX from './images/space_x_screenshot.png'
import Octodex from './images/octodex_screenshot_resized.png'
import Minesweeper from './images/minesweeper_screenshot.png'
import TV from './images/tv_guide_screenshot_resized.png'

class MyWork extends Component {
  render() {
    return (
      <>
        <section className="project-header">
          <h2>Projects</h2>
        </section>
        
        <main className="photo-container">

        <header className="project-title">Reddit
          <section className="img-style">
            <img
              src="https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg"
              alt="Reddit Clone project overview"
              height="400"
              width="300"
            />
          </section>
          </header>

        <header className="project-title">SpaceX
          <section className="img-style">
            <img
              src={SpaceX}
              alt="SpaceX project overview"
              height="400"
              width="300"
            />
          </section>
        </header>

        <header className="project-title">GitHub Octodex
          <section className="img-style">
            <img
              src={Octodex}
              alt="Octodex project overview"
              height="400"
              width="300"
            />
          </section>
        </header>

        <header className="project-title">Minesweeper
          <section className="img-style">
            <img
              src={Minesweeper}
              alt="Minesweeper project overview"
              height="400"
              width="300"
            />
          </section>
        </header>

        <header className="project-title">TV Guide
          <section className="img-style">
            <img
              src={TV}
              alt="TV guide project overview"
              height="400"
              width="300"
            />
          </section>
        </header>

        <header className="project-title">Minimalist Tic-Tac-Toe
          <section className="img-style">
            <img
              src="https://previews.123rf.com/images/styleuneed/styleuneed1206/styleuneed120600111/13915155-tic-tac-toe-symbol.jpg"
              alt="Minimalist Tic-Tac-Toe project overview"
              height="400"
              width="300"
            />
          </section>
        </header>

        </main>
      </>
    )
  }
}

export default MyWork
