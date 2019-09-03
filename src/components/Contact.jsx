import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <>
        {/* <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
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
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Contact
