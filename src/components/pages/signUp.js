import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});

  const { firstName, lastName, email, pass, confirmPass } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      let input = {};
      input.firstName = "";
      input.lastName = "";
      input.email = "";
      input.pass = "";
      input.confirmPass = "";
      setInputs(input);

      axios
        .post("../../server.js", inputs)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = () => {
    let input = inputs;
    let errors = {};
    let isValid = true;

    if (!input.firstName) {
      isValid = false;
      errors.firstName = "Please enter your first name";
    }
    if (!input.lastName) {
      isValid = false;
      errors.lastName = "Please enter your last name";
    }
    if (!input.email) {
      isValid = false;
      errors.email = "Please enter your email Address";
    }
    if (typeof input.email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input.email)) {
        isValid = false;
        errors.email = "Please enter a valid email address";
      }
    }
    if (!input.pass) {
      isValid = false;
      errors.pass = "Please enter your password";
    }
    if (typeof input.pass !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/
      );
      if (!pattern.test(input.pass)) {
        isValid = false;
        errors.pass =
          "Please enter a valid password - 1 uppercase and 1 lowecase letters, 1 symbol and 1 number(min 8 max 64)";
      }
    }

    if (!input.confirmPass) {
      isValid = false;
      errors.confirmPass = "Please enter your confirm password";
    }
    if (
      typeof input.pass !== "undefined" &&
      typeof input.confirmPass !== "undefined"
    ) {
      if (input.pass !== input.confirmPass) {
        isValid = false;
        errors.confirmPass = errors.confirmPass
          ? "Please enter your confirm password"
          : "Passwords don't match";
      }
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <>
      <form className="sign__up" onSubmit={handleSubmit} noValidate>
        <Typography gutterBottom variant="h5" component="h3">
          Sign Up
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Input
              color="secondary"
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              fullWidth
            />
            <Typography variant="caption" color="error" component="p">
              {errors.firstName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              color="secondary"
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
              fullWidth
            />
            <Typography variant="caption" color="error" component="p">
              {errors.lastName}
            </Typography>
          </Grid>
        </Grid>
        <Input
          color="secondary"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.email}
        </Typography>
        <Input
          color="secondary"
          type="password"
          placeholder="Password"
          name="pass"
          value={pass}
          onChange={handleChange}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.pass}
        </Typography>
        <Input
          color="secondary"
          type="password"
          placeholder="Confirm Password"
          name="confirmPass"
          value={confirmPass}
          onChange={handleChange}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.confirmPass}
        </Typography>
        <Button type="submit" variant="contained" color="secondary">
          Sign Up
        </Button>
      </form>
      <Link to="/">
        <Icon className="back">reply</Icon>
      </Link>
    </>
  );
};

export default SignUp;
