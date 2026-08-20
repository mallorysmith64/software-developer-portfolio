import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";

// google analytics
import ReactGA from "react-ga";
const TRACKING_ID = "G-7Q9PR1YE91"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  render() {
    return (
      <>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;