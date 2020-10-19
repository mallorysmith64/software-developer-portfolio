import React from "react";
import UT from "./images/united-techno.png";

function Work() {
  const pastDate = new Date("1/23/2020");
  const currentDate = new Date();
  //calculate time at company in months
  let timeDif =
    currentDate.getFullYear() * 12 +
    currentDate.getMonth() -
    (pastDate.getFullYear() * 12 + pastDate.getMonth());

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
            <h5>Jan. 2020 - Present {timeDif} months</h5>

            
            <ul className="work-accomplishments">
            <li className="work-list">
              Fulfilled business objectives for B2B and B2C integrations
            </li>

            <li className="work-list">
              Led and supported a team during production support and operational
              monitoring
            </li>

            <li className="work-list"> Experience with the Software Development Life Cycle (SDLC)</li>

            <li className="work-list"> Wrote API and process documentation</li>

            <li className="work-list"> Wrote reports for clients using Excel and Google Sheets</li>

            <li className="work-list">Earned numerous Dell Boomi certifications for this position</li>
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
