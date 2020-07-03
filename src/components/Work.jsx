import React from "react";

function Work() {
  const pastDate = new Date("1/23/2020")
  const currentDate = new Date()
  //calculate time at company in months
  let timeDif = currentDate.getFullYear() * 12 + currentDate.getMonth() -
  (pastDate.getFullYear() * 12 + pastDate.getMonth());

  return (
    <>
      <section className="project-header">
        <h2>Work Experience</h2>

        <main className="work-container">
          <h4>Cloud Integration Developer</h4>
          <h5>United Techno</h5>
          <h5>Jan. 2020 - Present {timeDif} months</h5>
        </main>
      </section>
    </>
  )
}

export default Work