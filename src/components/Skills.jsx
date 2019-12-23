import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
      <div className="skill-container" id="skills">

      <section className="language-container">
        <ul className="languages">
          <h5>Languages & Databases</h5>
            <li>C#</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>SQL</li>
            <li>CSS Flexbox</li>
            <li>HTML5</li>
        </ul>
      </section>

      <section className="framework-and-library-container">
        <ul className="frameworks-and-libraries">
          <h5>Frameworks & Libraries</h5>
           <li>React.js</li>
           <li>.NET Core</li>
           <li>Entity Framework</li>
           <li></li>
        </ul>
      </section>

      <section className="concept-container">
        <ul className="concepts">
          <h5>Programming Concepts</h5>
          <li>Object Oriented Programming</li>
          <li>Model View Controller (MVC)</li>
          <li>RESTful API</li>
          <li>Mobile First Design</li>
          <li>Single Page Apps</li>
        </ul>
      </section>

      <section className="software-tool-container">
        <ul className="software-tools">
          <h5>Software Tools</h5>
          <li>Visual Studios Code</li>
          <li>Slack</li>
          <li>Trello</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </section>

      <section className="deployment-environment-container">
        <ul className="deployment-environments">
          <h5>Deployment Environments</h5>
            <li>Docker</li>
            <li>AWS</li>
            <li>Netlify</li>
            <li>Heroku</li>
        </ul>
      </section>
    </div>
      </>
    )
  }
}

export default About
