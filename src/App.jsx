import React, { Component } from 'react'
import Nav from './components/Nav.jsx'
import Overlay from './components/Overlay.jsx'
import MyWork from './components/MyWork.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Overlay/>
        <MyWork />
        <About />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default App
