import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    input: {},
    errors: {},
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      let input = {};
      input["firstName"] = "";
      input["lastName"] = "";
      input["email"] = "";
      input["pass"] = "";
      input["confirmPass"] = "";
      this.setState({ input });
    }
  };

  validate = () => {
    let input = this.state;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your first name.";
    }
    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter a valid email address.";
      }
    }

    if (!input["pass"]) {
      isValid = false;
      errors["pass"] = "Please enter your password.";
    }

    if (typeof input["pass"] !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
      );
      if (!pattern.test(input["pass"])) {
        isValid = false;
        errors["pass"] =
          "Please enter a valid password - 1 uppercase and 1 lowecase letters, 1 symbol and 1 number(min 8 max 32).";
      }
    }

    if (!input["confirmPass"]) {
      isValid = false;
      errors["confirmPass"] = "Please enter your confirm password.";
    }

    if (
      typeof input["pass"] !== "undefined" &&
      typeof input["confirmPass"] !== "undefined"
    ) {
      if (input["pass"] !== input["confirmPass"]) {
        isValid = false;
        errors["pass"] = "Passwords don't match.";
      }
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  };

  render() {
    return (
      <>
        <form className="sign__up" onSubmit={this.handleSubmit} noValidate>
          <legend>Sign Up</legend>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                value={this.state.input.firstName}
                onChange={this.handleChange}
                required
              />
              <div className="text-danger">{this.state.errors.firstName}</div>
            </div>
            <div className="col-xs-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                value={this.state.input.lastName}
                onChange={this.handleChange}
                required
              />
              <div className="text-danger">{this.state.errors.lastName}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                required
              />
              <div className="text-danger">{this.state.errors.email}</div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="pass"
                value={this.state.input.pass}
                onChange={this.handleChange}
                required
              />
              <div className="text-danger">{this.state.errors.pass}</div>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPass"
                value={this.state.input.confirmPass}
                onChange={this.handleChange}
                required
              />
              <div className="text-danger">{this.state.errors.confirmPass}</div>
              <button type="submit" className="btn btn-outline-danger">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <Link to="/">
          <i
            data-toggle="tooltip"
            data-placement="top"
            title="back to home!"
            className="fas fa-arrow-circle-left"
          ></i>
        </Link>
      </>
    );
  }
}
