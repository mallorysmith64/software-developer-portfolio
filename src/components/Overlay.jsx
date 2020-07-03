import React, { Component } from "react";
import BrandImage from "./images/develop_or_go_home.jpeg";

class Overlay extends Component {
  render() {
    return (
      <>
        <img
          src={BrandImage}
          className="overlay"
          alt="develop or go home background"
        />
      </>
    )
  }
}

export default Overlay