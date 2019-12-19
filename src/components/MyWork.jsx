import React, { Component } from 'react'
import Collapsible from 'react-collapsible'

import SpaceX from './images/space_x_screenshot.png'
import Octodex from './images/octodex_screenshot_resized.png'
import Minesweeper from './images/minesweeper_screenshot.png'
import TV from './images/tv_guide_screenshot_resized.png'
import Reddit from './images/reddit_capstone_screenshot.png'

class MyWork extends Component {
  render() {
    return (
      <>
        <section className="project-header">
          <h2>Projects</h2>
        </section>
        
        <main className="photos-container">
        
        <header className="project">
          <a href="https://reddit-capstone.herokuapp.com/" id="reddit-project">Reddit Capstone</a>
          <section className="img-style">
            <img
              src={Reddit}
              alt="Reddit Clone project overview"
              height="400"
              width="300"
            />
          </section>
            <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <p>This full-stack app recreates the look and feel of Reddit.</p>
              <p>Features Included: Users can login and logout using Auth0 and see their profile, they can make new posts to the homepage and to a subreddit, and they can upvote and downvote posts created.</p>
              <p>Technologies Used: C#, .NET Core, Entity Framework, Auth0, Heroku, PostgreSQL, React.js, Bulma CSS Framework, CSS Flexbox, HTML5</p>
              <a href="https://github.com/mallorysmith64/Reddit-Capstone">Reddit Capstone's Code</a>
              </Collapsible>
            </article>
          </header>

        <header className="project">
        <a href="https://space-x-mallorysmith64.netlify.com/" id="spacex-project">SpaceX</a>
          <section className="img-style">
            <img
              src={SpaceX}
              alt="SpaceX project overview"
              height="400"
              width="300"
            />
          </section>
          <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <p>Objective: Use RESTful API to show user upcoming SpaceX launch information</p>
              <p>Technologies Used: Javascript, Netlify, CSS Flexbox, HTML5</p>
              <a href="https://github.com/mallorysmith64/space-x">SpaceX Code</a>
              </Collapsible>
            </article>
        </header>

        <header className="project">
        <a href="https://octodex-mallorysmith64.netlify.com/" id="octodex-project">Octodex</a>
          <section className="img-style">
            <img
              src={Octodex}
              alt="Octodex project overview"
              height="400"
              width="300"
            />
          </section>
          <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <a href="https://github.com/mallorysmith64/space-x">Octodex Code</a>
              </Collapsible>
            </article>
        </header>

        <header className="project">
        <a href="https://minesweeper-mallorysmith64.netlify.com/" id="minesweeper-project">Minesweeper</a>
          <section className="img-style">
            <img
              src={Minesweeper}
              alt="Minesweeper project overview"
              height="400"
              width="300"
            />
          </section>
          <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <a href="https://github.com/mallorysmith64/minesweeper">Minesweeper Code</a>
              </Collapsible>
          </article>
        </header>

        <header className="project">
        <a href="https://tv-guide-mallorysmith64.netlify.com/" id="tv-guide-project">TV Guide</a>
          <section className="img-style">
            <img
              src={TV}
              alt="TV guide project overview"
              height="400"
              width="300"
            />
          </section>
          <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <a href="https://github.com/mallorysmith64/tv-guide">TV Guide Code</a>
              </Collapsible>
            </article>
        </header>

        <header className="project">
        <a href="https://minimalist-tic-tac-toe-mallorysmith64.netlify.com/" id="tic-tac-toe-project">Minimalist Tic-Tac-Toe</a>
          <section className="img-style">
            <img
              src="https://previews.123rf.com/images/styleuneed/styleuneed1206/styleuneed120600111/13915155-tic-tac-toe-symbol.jpg"
              alt="Minimalist Tic-Tac-Toe project overview"
              height="400"
              width="300"
            />
          </section>
          <article className="after-collapse">
              <Collapsible className="before-collapse" trigger="Read More">
              <a href="https://github.com/mallorysmith64/minimalist-tic-tac-toe">Minimalist Tic-Tac-Toe Code</a>
              </Collapsible>
            </article>
        </header>

        </main>
      </>
    )
  }
}

export default MyWork
