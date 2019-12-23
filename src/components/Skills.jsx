import React, { Component } from 'react'

import csharp from './images/csharp_logo.png'
import javascript from './images/javascript_logo.png'
import postgres from './images/postgreSQL_logo.png'
import css from './images/css_logo.png'
import html5 from './images/html5_logo.png'

import react from './images/react_js_logo.png'
import dotnetcore from './images/dotnetcore_logo.png'
import entity from './images/entity_framework_logo.png'

import oop from './images/oop.png'
import mvc from './images/mvc_photo.jpeg'
import api from './images/restful_api.png'
import mobile from './images/mobile_first_design.png'
import spas from './images/single_page_apps.png'

import vscode from './images/vs_code.svg'
import slack from './images/slack.png'
import trello from './images/trello.png'
import git from './images/git.png'
import github from './images/github.png'

import docker from './images/docker.png'
import aws from './images/aws_logo.png'
import netlify from './images/netlify_logo.jpeg'
import heroku from './images/heroku_logo.png'

class About extends Component {
  render() {
    return (
      <>
      <div className="skill-container" id="skills">

      <section className="language-container">
        <ul className="languages">
          <h5>Languages & Databases</h5>

          <h6 className="skill-icon">
          <img className="logo" src={csharp} alt="csharp logo"/>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={javascript} alt="Javascript logo"/>
          </h6>
          
          <h6 className="skill-icon">
          <img className="logo" src={postgres} alt="PostgreSQL logo"/>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={css} alt="CSS3 logo"/>
          </h6>
          
          <h6 className="skill-icon">
          <img className="logo" src={html5} alt="HTML5 logo"/>
          </h6>
          
        </ul>
      </section>

      <section className="framework-and-library-container">
        <ul className="frameworks-and-libraries">
          <h5>Frameworks & Libraries</h5>

          <h6 className="skill-icon">
          <img className="logo" src={react} alt="React.js logo"/>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={dotnetcore} alt=".NET Core logo"/>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={entity} alt="Entity Framework Core logo"/>
          </h6>
        </ul>
      </section>

      <section className="concept-container">
        <ul className="concepts">
          <h5>Programming Concepts</h5>

        <h6 className="skill-icon">
          <img className="logo" src={oop} alt="Object Oriented Programming"/>
          <li>Object Oriented Programming</li>
        </h6>

        <h6 className="skill-icon">
          <img className="logo" src={mvc} alt="Model View Control Diagram"/>
          <li>Model View Controller (MVC)</li>
        </h6>

        <h6 className="skill-icon">
          <img className="logo" src={api} alt="RESTful api"/>
          <li>RESTful API</li>
        </h6>


        <h6 className="skill-icon">
          <img className="logo" src={mobile} alt="mobile first design"/>
          <li>Mobile First Design</li>
        </h6>
        
        <h6 className="skill-icon">
          <img className="logo" src={spas} alt="single page application"/>
          <li>Single Page Apps</li>
        </h6>
        </ul>
      </section>

      <section className="software-tool-container">
        <ul className="software-tools">
          <h5>Software Tools</h5>

          <h6 className="skill-icon">
          <img className="logo" src={vscode} alt="csharp logo"/>
          <li>VS Code</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={slack} alt="csharp logo"/>
          <li>Slack</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={trello} alt="csharp logo"/>
          <li>Trello</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={git} alt="csharp logo"/>
          <li>Git</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={github} alt="csharp logo"/>
          <li>GitHub</li>
          </h6>
        </ul>
      </section>

      <section className="deployment-environment-container">
        <ul className="deployment-environments">
          <h5>Deployment Environments</h5>

          <h6 className="skill-icon">
          <img className="logo" src={docker} alt="csharp logo"/>
            <li>Docker</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={aws} alt="csharp logo"/>
            <li>AWS</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={netlify} alt="csharp logo"/>
            <li>Netlify</li>
          </h6>

          <h6 className="skill-icon">
          <img className="logo" src={heroku} alt="csharp logo"/>
            <li>Heroku</li>
          </h6>
        </ul>
      </section>
    </div>
      </>
    )
  }
}

export default About
