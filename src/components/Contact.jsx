import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact-header">
          <h5>Contact Me</h5>
        </section>

        <section className="form">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="row">

                <div class="input-field col s6">
                  <input
                    placeholder="first name"
                    id="first_name"
                    type="text"
                    class="validate"
                  />
                  <label for="first_name">First Name</label>
                </div>

                <div class="input-field col s6">
                  <input
                    placeholder="last name"
                    id="last_name"
                    type="text"
                    class="validate"
                  />
                  <label for="last_name">Last Name</label>
                </div>
                
                <div class="input-field col s12">
                  <input
                    placeholder="work email address"
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
  
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" spellcheck="true"></textarea>
                      <label for="textarea1">Send Message</label>
                  </div>
                </div>
                    
              <button class="btn waves-effect waves-light" type="submit" name="action">Send Message</button>

              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default Contact
