import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
        <header className="skill-header">
            <h2>Technical Skills</h2>
        </header>
      <div className="skill-container">
      <section className="frontend-column">
            <ul className="frontend-skills">
            <h5>Front-End</h5>
            <li>React.js</li>
            <li>Javascript</li>
            <li>Bulma (CSS Framework)</li>
            <li>Materialize CSS</li>
            <li>CSS Flexbox</li>
            <li>HTML5</li>
       </ul>
      </section>

    <section className="backend-column">
        <ul className="backend-skills">
            <h5>Back-End</h5>
            <li>C#</li>
            <li>.NET Core</li>
            <li>Entity Framework</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>Model-View-Controller (MVC)</li>
        </ul>
    </section>

    <section className="aws-column">
        <ul className="aws-skills">
            <h5>AWS</h5>
            <li>IAM (Identity and Access Management)</li>
            <li>S3</li>
        </ul>
    </section>

    <section className="other-skills-column">
        <ul className="other-skills">
            <h5>Other</h5>
            <li>Git</li>
            <li>Swagger API</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>RESTful API</li>
        </ul>
    </section>
  </div>
      </>
    )
  }
}

export default About
