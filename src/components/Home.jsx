import React from "react";
import Skills from "./Skills";
import About from "./About";
import Carousel from "./Carousel";
import Projects from "./Projects";
import Form from "./Form";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";

function Home() {
  return (
    <>
      <Carousel />
      <Projects />
      <Skills />
      <About />
      <Form />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default Home;
