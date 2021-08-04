import React from "react";
import Codewars from "./images/codewars_logo.png";
import Linkedin from "./images/linkedin_icon.png";
import GitHub from "./images/github_icon.png";
import LeetCode from "./images/leetcode_icon.png"

const SocialMedia = () => {
  return (
    <>
      <div className="fab-container">
        <div className="fab fab-icon-holder green" id="link-icon">
          <i className="medium material-icons white-text">link</i>
        </div>

        <ul className="fab-options">
          <li>
            <span className="fab-label"></span>
            <div className="fab-icon-holder fab-icon">
              <a
                href="https://github.com/mallorysmith64"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github responsive-img"
                  src={GitHub}
                  alt="hyperlink to GitHub"
                />
              </a>
            </div>
          </li>

          <li>
            <span className="fab-label"></span>
            <div className="fab-icon-holder fab-icon">
              <a
                href="https://www.linkedin.com/in/mallorysmith-64/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin responsive-img"
                  src={Linkedin}
                  alt="hyperlink to Linkedin"
                />
              </a>
            </div>
          </li>

          <li>
            <span className="fab-label"></span>
            <div className="fab-icon-holder fab-icon">
              <a
                href="https://www.codewars.com/users/mallorysmith64"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="codewars responsive-img"
                  src={Codewars}
                  alt="hyperlink to Codewars"
                />
              </a>
            </div>
          </li>

          <li>
            <span className="fab-label"></span>
            <div className="fab-icon-holder fab-icon">
              <a
                href="https://leetcode.com/mallorysmith64/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="leetcode responsive-img"
                  src={LeetCode}
                  alt="hyperlink to LeetCode"
                />
              </a>
            </div>
          </li>

        </ul>
      </div>
    </>
  )
}

export default SocialMedia