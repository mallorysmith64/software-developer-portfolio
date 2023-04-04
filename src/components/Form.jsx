import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className="contact-form"
        id="contact"
        onSubmit={this.submitForm}
        action="https://formspree.io/xzbdbdkj"
        method="POST"
        aria-describedby="form-instructions"
      >
        <div id="form-instructions" className="visually-hidden">
          <p>Fill out the form below to send Mallory a message.</p>
        </div>

        <section className="contact-header">
          <h2>Contact</h2>
        </section>

        <div className="input-field col s6">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
        </div>

        <div className="input-field col s6">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />
        </div>

        <div className="input-field col s6">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>

        <div className="input-field col s6">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            required="required"
            className="form-control"
          ></textarea>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="btn waves-effect waves-light message-btn">
              Send Message
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Form;
