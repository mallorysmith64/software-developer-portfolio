import React, { Component } from 'react'
import Nav from './components/Nav.jsx'
import Carousel from './components/Carousel.jsx'
import Work from './components/Work.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import SocialMedia from './components/SocialMedia.jsx'
// google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "G-7Q9PR1YE91"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Carousel/>
        <Projects />
        <Work/>
        <Education/>
        <Skills/>
        <About />
        <Form/>
        <SocialMedia/>
        <Footer />
      </>
    )
  }
}

export default App
