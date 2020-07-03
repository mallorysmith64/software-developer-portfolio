import React, { Component } from "react";

import csharp from "./images/csharp_logo.png";
import javascript from "./images/javascript_logo.png";
import postgres from "./images/postgreSQL_logo.png";
import css from "./images/css_logo.png";
import html5 from "./images/html5_logo.png";

import react from "./images/react_js_logo.png";
import dotnetcore from "./images/dotnetcore_logo.png";
import entity from "./images/entity_framework_logo.png";

import oop from "./images/oop.png";
import mvc from "./images/mvc_photo.jpeg";
import api from "./images/restful_api.png";
import mobile from "./images/mobile_first_design.png";
import spas from "./images/single_page_apps.png";

import vscode from "./images/vs_code.svg";
import slack from "./images/slack.png";
import trello from "./images/trello.png";
import git from "./images/git.png";
import github from "./images/github.png";

import docker from "./images/docker.png";
import aws from "./images/aws_logo.png";
import netlify from "./images/netlify_logo.jpeg";
import heroku from "./images/heroku_logo.png";

class About extends Component {
  render() {
    return (
      <>
        <header className="skill-header">
          <h2>Skills</h2>
        </header>

        <div className="skill-container" id="skills">
          <section className="language-container">
            <ul className="languages">
              <h5>Languages & Databases</h5>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29">
                  <img className="logo" src={csharp} alt="csharp logo" />
                  <li>C#</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/JavaScript">
                  <img
                    className="logo"
                    src={javascript}
                    alt="Javascript logo"
                  />
                  <li>Javascript</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/PostgreSQL">
                  <img className="logo" src={postgres} alt="PostgreSQL logo" />
                  <li>PostgreSQL</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                  <img className="logo" src={css} alt="CSS3 logo" />
                  <li>CSS3</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/HTML5">
                  <img className="logo" src={html5} alt="HTML5 logo" />
                  <li>HTML5</li>
                </a>
              </h6>
            </ul>
          </section>

          <section className="framework-and-library-container">
            <ul className="frameworks-and-libraries">
              <h5>Frameworks & Libraries</h5>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/React_(web_framework)">
                  <img className="logo" src={react} alt="React.js logo" />
                  <li>React.js</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/.NET_Core">
                  <img className="logo" src={dotnetcore} alt=".NET Core logo" />
                  <li>.NET Core</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Entity_Framework">
                  <img
                    className="logo"
                    src={entity}
                    alt="Entity Framework Core logo"
                  />
                  <li>Entity Framework Core</li>
                </a>
              </h6>
            </ul>
          </section>

          <section className="concept-container">
            <ul className="concepts">
              <h5>Programming Concepts</h5>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
                  <img
                    className="logo"
                    src={oop}
                    alt="Object Oriented Programming"
                  />
                  <li>Object Oriented Programming</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">
                  <img
                    className="logo"
                    src={mvc}
                    alt="Model View Control Diagram"
                  />
                  <li>Model View Controller (MVC)</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">
                  <img className="logo" src={api} alt="RESTful api" />
                  <li>RESTful API</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Responsive_web_design">
                  <img
                    className="logo"
                    src={mobile}
                    alt="mobile first design"
                  />
                  <li>Mobile First Design</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Single-page_application">
                  <img
                    className="logo"
                    src={spas}
                    alt="single page application"
                  />
                  <li>Single Page Apps</li>
                </a>
              </h6>
            </ul>
          </section>

          <section className="software-tool-container">
            <ul className="software-tools">
              <h5>Software Tools</h5>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code">
                  <img className="logo" src={vscode} alt="csharp logo" />
                  <li>VS Code</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Slack_(software)">
                  <img className="logo" src={slack} alt="csharp logo" />
                  <li>Slack</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Trello">
                  <img className="logo" src={trello} alt="csharp logo" />
                  <li>Trello</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Git">
                  <img className="logo" src={git} alt="csharp logo" />
                  <li>Git</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/GitHub">
                  <img className="logo" src={github} alt="csharp logo" />
                  <li>GitHub</li>
                </a>
              </h6>
            </ul>
          </section>

          <section className="deployment-environment-container">
            <ul className="deployment-environments">
              <h5>Deployment Environments</h5>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Docker_%28software%29">
                  <img className="logo" src={docker} alt="csharp logo" />
                  <li>Docker</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services">
                  <img className="logo" src={aws} alt="csharp logo" />
                  <li>AWS</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Netlify">
                  <img className="logo" src={netlify} alt="csharp logo" />
                  <li>Netlify</li>
                </a>
              </h6>

              <h6 className="skill-icon">
                <a href="https://en.wikipedia.org/wiki/Heroku">
                  <img className="logo" src={heroku} alt="csharp logo" />
                  <li>Heroku</li>
                </a>
              </h6>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default About