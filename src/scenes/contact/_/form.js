import React, { Component } from "react";
import { sendData } from "../../../rdTracker"
import { FormGroup, FormControl, Button } from 'react-bootstrap';

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
      <div className="lead-form">
        <div className="result">{ this.state.message }</div>
        <form onSubmit={this.onFormSubmit} className="form">
          <FormGroup bsSize="large">
           <FormControl
             bsSize="large"
             type="email"
             className="email"
             placeholder="E-mail"
             value={this.state.email}
             onChange={this.onInputChange}
             name="email" />
         </FormGroup>
         <Button type="submit" className="button" bsStyle="danger" bsSize="large" disabled={!this.state.formValid}>
           SUBMIT
         </Button>
        </form>
      </div>
    );
  }
}
