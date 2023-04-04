import React, { Component } from "react";
import images from "./ImageHelper";

class About extends Component {
  render() {
    return (
      <>
        <header className="header">
          <h2 id="skills">Skills and Interests</h2>
        </header>

        <div className="skills-container">
          <ul className="col">
            <h5 className="row">Front-End</h5>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                <img className="logo" src={images.css} alt="css3 logo" />
                <li className="skill">CSS</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/HTML5">
                <img className="logo" src={images.html} alt="html5 logo" />
                <li className="skill">HTML</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/JavaScript">
                <img
                  className="logo"
                  src={images.javascript}
                  alt="javascript logo"
                />
                <li className="skill">Javascript</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/React_(web_framework)">
                <img className="logo" src={images.react} alt="react.js logo" />
                <li className="skill">React.js</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/TypeScript">
                <img
                  className="logo"
                  src={images.typescript}
                  alt="typescript logo"
                />
                <li className="skill">TypeScript</li>
              </a>
            </h6>
          </ul>

          <ul className="col">
            <h5 className="row">Back-End</h5>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Flask_(web_framework)">
                <img className="logo" src={images.flask} alt="flask logo" />
                <li className="skill">Flask</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/MongoDB">
                <img className="logo" src={images.mongo} alt="mongodb logo" />
                <li className="skill">MongoDB</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                <img className="logo" src={images.python} alt="python logo" />
                <li className="skill">Python</li>
              </a>
            </h6>
          </ul>

          <ul className="col">
            <h5 className="row">Dev Tools</h5>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Docker_%28software%29">
                <img className="logo" src={images.docker} alt="docker logo" />
                <li className="skill">Docker</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Git">
                <img className="logo" src={images.git} alt="git logo" />
                <li className="skill">Git</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/GitHub">
                <img className="logo" src={images.github} alt="github logo" />
                <li className="skill">GitHub</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code">
                <img className="logo" src={images.vscode} alt="vscode logo" />
                <li className="skill">VS Code</li>
              </a>
            </h6>
          </ul>

          <ul className="col">
            <h5 className="row">Teamwork</h5>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Slack_(software)">
                <img className="logo" src={images.slack} alt="slack logo" />
                <li className="skill">Slack</li>
              </a>
            </h6>

            <h6 className="row">
              <a href="https://en.wikipedia.org/wiki/Trello">
                <img className="logo" src={images.trello} alt="trello logo" />
                <li className="skill">Trello</li>
              </a>
            </h6>
          </ul>
        </div>
      </>
    );
  }
}

export default About;
