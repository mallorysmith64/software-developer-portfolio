import React, { Component } from 'react'
import SpaceX from './images/space_x_screenshot.png'

class MyWork extends Component {
  render() {
    return (
      <>
        <main className="projects">
          <section className="space-x-container">
            <h1 className="space-x">SpaceX Project</h1>
            <img
              src={SpaceX}
              alt="space-x project overview"
              height="400"
              width="400"
            />
          </section>
          <section>
            <h1 className="space-x">SpaceX Project</h1>
            <img
              src={SpaceX}
              alt="space-x project overview"
              height="400"
              width="400"
            />
          </section>
          <section>
            <h1 className="space-x">SpaceX Project</h1>
            <img
              src={SpaceX}
              alt="space-x project overview"
              height="400"
              width="400"
            />
          </section>
          <section>
            <h1 className="space-x">SpaceX Project</h1>
            <img
              src={SpaceX}
              alt="space-x project overview"
              height="400"
              width="400"
            />
          </section>
          <section>
            <h1 className="space-x">SpaceX Project</h1>
            <img
              src={SpaceX}
              alt="space-x project overview"
              height="400"
              width="400"
            />
          </section>
        </main>
      </>
    )
  }
}

export default MyWork
