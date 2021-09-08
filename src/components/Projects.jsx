import React, { Component } from "react";
import Collapsible from "react-collapsible";

import Reddit from "./images/reddit_capstone_screenshot.png";
import SpaceX from "./images/spacex_screenshot.png";
import Octodex from "./images/octodex_screenshot.png";
import Minesweeper from "./images/minesweeper_screenshot.png";
import TV from "./images/tv_guide_screenshot.png";
import TicTacToe from "./images/tic_tac_toe_screenshot.png";
// import Tetris from './images/tetris_screenshot.png'

class Projects extends Component {
  render() {
    return (
      <>
        <section className="header" id="projects">
          {/* the id is used for breadcrumb */}
          <h2>Projects</h2>
        </section>

        <main className="photos-container">
          <div className="row">
            <div className="project" id="reddit-project">
              <a
                href="https://reddit-capstone.herokuapp.com/"
                id="reddit-title"
              >
                Reddit Capstone
              </a>
              <section className="img-style">
                <img
                  src={Reddit}
                  alt="Reddit Clone project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse" id="reddit-collapsible">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>
                    This full-stack app recreates the look and feel of Reddit.
                  </p>
                  <p>
                    Features Included: Users can login and logout using Auth0
                    and see their profile, they can make new posts to the
                    homepage and to a subreddit, and they can upvote and
                    downvote posts created.
                  </p>
                  <p>
                    Technologies Used: C#, .NET Core, Entity Framework, Auth0,
                    Heroku, PostgreSQL, React.js, Bulma CSS Framework, CSS
                    Flexbox, HTML5
                  </p>
                  <a href="https://github.com/mallorysmith64/Reddit-Capstone">
                    Reddit Capstone's Code
                  </a>
                </Collapsible>
              </article>
            </div>

            <div className="project" id="spacex-project">
              <a
                href="https://space-x-mallorysmith64.netlify.com/"
                id="spacex-title"
              >
                SpaceX
              </a>
              <section className="img-style">
                <img
                  src={SpaceX}
                  alt="SpaceX project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>
                    Objective: Use RESTful API to show user upcoming SpaceX
                    launch information and show the picture of the day
                  </p>
                  <p>
                    Technologies Used: Javascript, Netlify, CSS Flexbox, HTML5
                  </p>
                  <a href="https://github.com/mallorysmith64/space-x">
                    SpaceX Code
                  </a>
                </Collapsible>
              </article>
            </div>

            <div className="project" id="octodex-project">
              <a
                href="https://octodex-mallorysmith64.netlify.com/"
                id="octodex-title"
              >
                Octodex
              </a>
              <section className="img-style">
                <img
                  src={Octodex}
                  alt="Octodex project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>Objective: Remake GitHub’s Octodex site</p>
                  <p>
                    Technologies Used: React.js, Netlify, Bulma CSS Framework,
                    CSS Flexbox, HTML5
                  </p>
                  <a href="https://github.com/mallorysmith64/space-x">
                    Octodex Code
                  </a>
                </Collapsible>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="project" id="minesweeper-project">
              <a
                href="https://minesweeper-mallorysmith64.netlify.com/"
                id="minesweeper-title"
              >
                Minesweeper
              </a>
              <section className="img-style">
                <img
                  src={Minesweeper}
                  alt="Minesweeper project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>
                    Objective: Use RESTful API for some of the game logic,
                    display a message to show player they won or lost, and allow
                    user to play multiple difficulty levels.
                  </p>
                  <p>React.js, Netlify, CSS Flexbox, HTML5</p>
                  <a href="https://github.com/mallorysmith64/minesweeper">
                    Minesweeper Code
                  </a>
                </Collapsible>
              </article>
            </div>

            <div className="project" id="tv-guide-project">
              <a
                href="https://tv-guide-mallorysmith64.netlify.com/"
                id="tv-guide-title"
              >
                TV Guide
              </a>
              <section className="img-style">
                <img
                  src={TV}
                  alt="TV guide project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse" id="tv-guide-collapsible">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>
                    Objective: Make an attractive design for a tv guide and show
                    users a list of top-rated shows with a description, a
                    highlighted random show at the top of the page, and details
                    for cast members.
                  </p>
                  <p>
                    Technologies Used: React.js, Netlify, CSS Flexbox, HTML5
                  </p>
                  <a href="https://github.com/mallorysmith64/tv-guide">
                    TV Guide Code
                  </a>
                </Collapsible>
              </article>
            </div>

            <div className="project" id="tic-tac-toe-project">
              <a
                href="https://minimalist-tic-tac-toe-mallorysmith64.netlify.com/"
                id="tic-tac-toe-title"
              >
                Tic-Tac-Toe
              </a>
              <section className="img-style">
                <img
                  src={TicTacToe}
                  alt="Minimalist Tic-Tac-Toe project overview"
                  className="responsive-img"
                />
              </section>
              <article className="after-collapse">
                <Collapsible className="before-collapse" trigger="Read More">
                  <p>Objective: Create a sleek design for a great game</p>
                  <p>
                    Technologies Used: React.js, Netlify, CSS Flexbox, HTML5
                  </p>
                  <a href="https://github.com/mallorysmith64/minimalist-tic-tac-toe">
                    Minimalist Tic-Tac-Toe Code
                  </a>
                </Collapsible>
              </article>
            </div>
          </div>

          {/* <div className="project" id="tetris-project">
        <a href="https://tetris-deluxe-mallorysmith64.netlify.com/" id="tetris-title">Tetris Deluxe</a>
          <section className="img-style">
            <img
              src={Tetris}
              alt="Tetris project overview"
              className="responsive-img"
            />
          </section>
          <article className="after-collapse" id="tetris-collapsible">
              <Collapsible className="before-collapse" trigger="Read More">
                <p>Objective: Create tetris and add audio and css animations for a better user experience</p>
                <p>Tetris Deluxe is currently being developed.</p>
                <p>Technologies Used: React.js, React Styled Components, Netlify</p>
                <a href="https://github.com/mallorysmith64/tetris-deluxe">Tetris Deluxe Code</a>
              </Collapsible>
          </article>
        </div> */}
        </main>
      </>
    );
  }
}

export default Projects;
