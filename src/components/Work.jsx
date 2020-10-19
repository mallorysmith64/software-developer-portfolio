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

        <section className="work-history">
      
          <h5>Software Developer</h5>
          <h5>United Techno</h5>

          <h5>Jan. 2020 - Present {timeDif} months</h5>

          <img
            className="work-logo responsive-img"
            src={UT}
            alt="United Techno logo"
          />

          <ul>
            <li>
              Fulfilled business objectives for B2B and B2C integrations via
              requirement gathering, design, development, testing, debugging,
              post-mortems, and root-cause analysis or RCA
            </li>

            <li>
              Led and supported team during production support and operational
              monitoring
            </li>

            <li> Experience with Software Development Life Cycle (SDLC)</li>

            <li> Wrote API and process documentation</li>

            <li> Wrote reports for clients using Excel and Google Sheets</li>

            <li>Earned numerous Dell Boomi certifications for this position</li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Work;
