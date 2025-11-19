import React from "react";
import GoUp from "./GoUp";

function Footer() {
  let getYear = new Date().getFullYear();

  return (
    <>
      <div className="go-back-up-container">
        <GoUp />
      </div>

      <footer className="page-footer-container">
        <section className="copyright">
          <p>Copyright Mars Cannon {getYear}</p>
        </section>
        <div className="wave-container">
          <div clasName="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
