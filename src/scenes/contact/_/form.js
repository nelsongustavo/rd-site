import React, { Component } from "react";
import { sendData } from "../../../rdTracker"

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "",
      emailValid: false,
      formValid: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    const email = event.target.value;
    this.setState({ email: email }, () => { this.validateField(email) });
  }

  onFormSubmit(event) {
    event.preventDefault();
    sendData(this.state.email);
    this.setState({ email: "" });
    this.setState({ message: "Success!" });
  }

  validateField(value) {
    let emailValid = this.state.emailValid;
    let message = this.state.message;

    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    message = emailValid ? '' : `${value} is invalid`;
    this.setState({message: message, emailValid: emailValid}, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  render() {
    return (
      <div>
        <div className="result">{ this.state.message }</div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Email"
            className="form-control"
            value={this.state.email}
            onChange={this.onInputChange}
            name="email"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary" disabled={!this.state.formValid}>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}
