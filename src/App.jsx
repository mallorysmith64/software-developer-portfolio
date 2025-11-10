import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
// import Blog from "./components/Blog";

// google analytics
import ReactGA from "react-ga";
const TRACKING_ID = "G-7Q9PR1YE91"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/blog" element={<Blog />} /> */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
