import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    email: "",
    pass: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { email, pass } = this.state;
    return (
      <>
        <form className="sign__in" onSubmit={this.handleSubmit}>
          <legend>Sign In</legend>
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                value={email}
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <input
                type="password"
                className="form-control"
                value={pass}
                name="pass"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="btn btn-outline-danger">
                Sign In
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
