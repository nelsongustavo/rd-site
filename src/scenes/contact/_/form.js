import React, { Component } from "react";
import { sendData } from "../../../rdTracker"

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ email: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    sendData(this.state.email);
    this.setState({ email: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Email"
          className="form-control"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
