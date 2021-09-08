import React from "react";
import SDG from "./images/SDG_logo.png";

function Education() {
  return (
    <>
      <section className="work-container" id="education">
        <header className="header">
          <h2>Education</h2>
        </header>

        <article className="work-history-container">
          <section className="work-history-header">
            <h5>Full-Stack Web Development</h5>
            <h5>Suncoast Developers Guild</h5>

            <ul className="work-accomplishments">
              <li className="work-list">3 month immersive coding bootcamp</li>
              <li className="work-list">
                Built projects in semantic HTML, CSS, Javascript, React.js,
                PostgreSQL, C#, and .NET Core
              </li>
            </ul>
          </section>

          <div className="work-logo-container">
            <img
              className="work-logo responsive-img"
              src={SDG}
              alt="Suncoast Developers Guild logo"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default Education;
