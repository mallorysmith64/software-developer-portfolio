import React, { Component } from "react";
import images from "./ImageHelper";
class Projects extends Component {
  render() {
    return (
      <>
        <header className="header" id="projects">
          <h2>Projects</h2>
        </header>

        <div className="project-container">
          <div className="row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.loading}
                  alt="coming soon"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Form Generator
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>

              <div className="card-action"></div>
              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Form Generator
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <p>Coming Soon! This project is still baking in the oven.</p>
              </div>
            </div>
          </div>

          <div className="row">
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
          </div>

          <div className="row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.spacex}
                  alt="spacex project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  SpaceX
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
                  href="https://github.com/mallorysmith64/space-x"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>

              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  SpaceX
                  <i className="material-icons right" alt="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>
                    Use RESTful API to show user upcoming SpaceX launch
                    information and show the picture of the day
                  </p>

                  <strong>Technologies Used:</strong>
                  <p>
                    Technologies Used: Javascript, Netlify, CSS Flexbox, HTML5
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div className="row">
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

          <div className="row">
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
          </div>

{/* octodex project */}
          <div className="row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.octodex}
                  alt="minesweeper project"
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
          </div>

          <div className="row">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={images.tictactoe}
                  alt="tic-tac-toe project"
                />
              </div>
              <div className="card-content">
                <div className="card-title activator">
                  Minimalist TicTacToe
                  <i
                    className="material-icons right"
                    arial-label="more options"
                  >
                    more_vert
                  </i>
                </div>
              </div>

              <div className="card-action">
                {/* <a
                  href="https://minimalist-tic-tac-toe-mallorysmith64.netlify.com/"
                  className="waves-effect waves-light btn"
                >
                  Live
                </a> */}
                <a
                  href="https://github.com/mallorysmith64/minimalist-tic-tac-toe"
                  className="waves-effect waves-light btn"
                >
                  Source
                </a>
              </div>

              <div className="card-reveal">
                <strong className="card-title grey-text text-darken-4">
                  Minimalist TicTacToe
                  <i className="material-icons right" arial-label="close">
                    close
                  </i>
                </strong>
                <article className="card-description">
                  <strong>Overview:</strong>
                  <p>Create a sleek design for a great game</p>

                  <strong>Technologies Used:</strong>
                  <p>React.js, Netlify, CSS Flexbox, HTML5</p>
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
