import React from "react";
import CodeWars from "./images/codewars_logo.png";
import Linkedin from "./images/linkedin_icon.png";
import GitHub from "./images/github_icon.png";
import LeetCode from "./images/leetcode_icon.png"

function Footer() {
  let getYear = new Date().getFullYear();

  return (
    <>
      <footer className="page-footer">
        <section className="copyright">
          <p>Copyright Mallory Smith {getYear}</p>
        </section>
        <section>
          <ul className="footer-link-container">
            <li>
              <a href="https://github.com/mallorysmith64">
                <img
                  className="github responsive-img"
                  src={GitHub}
                  alt="GitHub site icon"
                />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/mallorysmith-64/">
                <img
                  className="linkedin responsive-img"
                  src={Linkedin}
                  alt="linkedin site icon"
                />
              </a>
            </li>

            <li>
              <a href="https://leetcode.com/mallorysmith64/">
                <img
                  className="leetcode responsive-img"
                  src={LeetCode}
                  alt="leetcode site icon"
                />
              </a>
            </li>

            <li>
              <a href="https://www.codewars.com/dashboard">
                <img
                  className="codewars responsive-img"
                  src={CodeWars}
                  alt="codewars site icon"
                />
              </a>
            </li>

          </ul>
        </section>
      </footer>
    </>
  )
}

export default Footer