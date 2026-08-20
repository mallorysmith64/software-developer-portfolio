import React from "react";
import images from "./ImageHelper";
import Skills from "./Skills";
import About from "./About";
import Form from "./Form";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

function Home() {
  return (
    <>
      <div style={{ background: "black", width: "100%", height: "80vh", overflow: "hidden" }}>
        <img 
          src={images.github_carousel} 
          alt="GitHub" 
          className="carousel-image"
        />
      </div>
      <Skills />
      <About />
      <Form />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default Home;