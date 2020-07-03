import React from "react";

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
        <header className="project-header" id="work">
          {/* id is used for breadcrumb */}
          <h2>Work Experience</h2>
        </header>

        <h4>Cloud Integration Developer</h4>
        <h5>United Techno</h5>
        <h5>Jan. 2020 - Present {timeDif} months</h5>
      </section>
    </>
  );
}

export default Work