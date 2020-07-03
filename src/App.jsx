import React, { Component } from 'react'
import Nav from './components/Nav.jsx'
import Carousel from './components/Carousel.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import SocialMedia from './components/SocialMedia.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Carousel/>
        <Projects />
        <Work/>
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
