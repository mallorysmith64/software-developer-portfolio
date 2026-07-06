import React, { Component } from "react";
import images from "./ImageHelper";
class Projects extends Component {
  render() {
    let getYear = new Date().getFullYear();
    return (
      <>
        <header className="header" id="projects">
          <h2>Top Projects for {getYear} </h2>
        </header>

        <div className="project-container">
          {/* Row 1: Cat Search, Reddit, TV Guide */}
          <div className="project-row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.catsearch}
                  alt="reddit project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Cat Search
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                 <a
                  href="https://google-cat-search-engine.netlify.app/"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mallorysmith64/google-search"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Cat Search
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>You can search for cat memes and cat information.</p>
                  <strong>Technologies Used:</strong>
                  <p>
                    React.js, JavaScript, Flask, Python, ElasticSearch, CSS
                    Flexbox, HTML5
                  </p>
                </article>
              </div>
            </div>

            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.reddit}
                  alt="reddit project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Reddit
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://reddit-capstone.herokuapp.com/"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mallorysmith64/Reddit-Capstone"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Reddit
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>
                    This full-stack app recreates the look and feel of Reddit.
                  </p>
                  <strong>Features Included:</strong>
                  <p>
                    Users can login and logout using Auth0 and see their
                    profile, they can make new posts to the homepage and to a
                    subreddit, and they can upvote and downvote posts created.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>
                    C#, .NET Core, Entity Framework, Auth0, Heroku, PostgreSQL,
                    React.js, Bulma CSS Framework, CSS Flexbox, HTML5
                  </p>
                </article>
              </div>
            </div>

            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.tv}
                  alt="tv guide project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  TV Guide
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://bit.ly/tvguide-project"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mallorysmith64/tv-guide"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  TV Guide
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>
                    Make an attractive design for a tv guide and show users a
                    list of top-rated shows with a description, a highlighted
                    random show at the top of the page, and details for cast
                    members.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>React.js, Netlify, CSS Flexbox, HTML5</p>
                </article>
              </div>
            </div>
          </div>

          {/* Row 2: Minesweeper, Octodex, Snake Game */}
          <div className="project-row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.minesweeper}
                  alt="minesweeper project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Minesweeper
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://minesweeper-2.netlify.app/"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mallorysmith64/minesweeper"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Minesweeper
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>
                    Use RESTful API for some of the game logic, display a
                    message to show player they won or lost, and allow the user
                    to play multiple difficulty levels.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>React.js, Netlify, CSS Flexbox, HTML5</p>
                </article>
              </div>
            </div>

            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.octodex}
                  alt="octodex project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Octodex
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://react-octodex.netlify.app/"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/marscannon42/react-octodex"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Octodex
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>
                    Made a fun gallery of my favorite octocats based on
                    octodex.github.com
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>React.js, Netlify, CSS Flexbox, HTML5</p>
                </article>
              </div>
            </div>

            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.snake_game}
                  alt="snake game project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Snake Game
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://marssmith64.itch.io/snake-game-python"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/mallorysmith64/snake-game-python"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Snake Game
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>Built a classic fun game</p>
                  <strong>Technologies Used:</strong>
                  <p>Python, pygame</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
