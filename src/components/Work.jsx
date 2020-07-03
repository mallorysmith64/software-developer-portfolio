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
        <header className="header" id="work">
          <h2>Work Experience</h2>
        </header>

        <div className="work-history" id="work">
          <section className="work">
            <h5>Cloud Integration Developer</h5>
            <h5>United Techno</h5>

            <h5>Jan. 2020 - Present {timeDif} months</h5>
            <p>
              - I built integrations on the Dell Boomi
              atmosphere platform.
            </p>
            <p>
              - I provided production support and responded to clients.
            </p>
            <p>
              - I earned 5 Dell Boomi certifications for this position.
            </p>
          </section>

          <section className="work-logo">
            <img
              className="img-style responsive-img"
              src={UT}
              alt="United Techno logo"
            />
          </section>
        </div>
      </section>
    </>
  );
}

export default Work;