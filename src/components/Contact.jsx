import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <>
        <section className="form">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input
                    placeholder="Placeholder"
                    id="first_name"
                    type="text"
                    class="validate"
                  />
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input
                    placeholder="placeholder"
                    id="last_name"
                    type="text"
                    class="validate"
                  />
                  <label for="last_name">Last Name</label>
                </div>
                <div class="input-field col s12">
                  <input
                    placeholder="placeholder"
                    id="password"
                    type="password"
                    class="validate"
                  />
                  <label for="password">Password</label>
                </div>
                <div class="input-field col s12">
                  <input
                    placeholder="placeholder"
                    id="email"
                    type="email"
                    class="validate"
                  />
                  <label for="email">Email</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  ></span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default Contact
