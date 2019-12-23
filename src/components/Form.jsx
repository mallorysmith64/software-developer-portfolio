import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
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
      >
        <section className="contact-header">
          <h5>Contact Me</h5>
        </section>

        <div className="input-field col s6">
            <label>First Name</label>
            <input type="text" name="name"/>
        </div>

        <div className="input-field col s6">
            <label>Last Name</label>
            <input type="text" name="name"/>
        </div>

        <div className="input-field col s6">
            <label>Email</label>
            <input type="email" name="email" />
        </div>

        <div className="input-field col s6">
        <label>Your Message</label>
        <textarea name="message" required="required" className="form-control"></textarea>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn waves-effect waves-light message-btn">Send Message</button>}
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

export default Form