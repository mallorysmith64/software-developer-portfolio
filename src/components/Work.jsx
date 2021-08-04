import React from "react";
import UT from "./images/united-techno.png";

function Work() {

  return (
    <>
      <section className="work-container">
        <header className="header">
          <h2>Work Experience</h2>
        </header>

        <article className="work-history-container">
          <section className="work-history-header">
            <h5>Software Developer</h5>
            <h5>United Techno</h5>
            <h5>January 2020 - October 2020</h5>

            <ul className="work-accomplishments">
              <li className="work-list">
                Fulfilled business objectives for B2B and B2C integrations
              </li>

              <li className="work-list">
                Led and supported a team during production support and
                operational monitoring
              </li>

              <li className="work-list">
                {" "}
                Experience with the Software Development Life Cycle (SDLC)
              </li>

              <li className="work-list">
                {" "}
                Wrote API and process documentation
              </li>

              <li className="work-list">
                {" "}
                Wrote reports for clients using Excel and Google Sheets
              </li>

              <li className="work-list">
                Earned numerous Dell Boomi certifications for this position
              </li>
            </ul>
          </section>

          <div className="work-logo-container">
            <img
              className="work-logo responsive-img"
              src={UT}
              alt="United Techno logo"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default Work;
