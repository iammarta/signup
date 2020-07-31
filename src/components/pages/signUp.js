import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { startSignup } from "../../redux/actions";

const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  let history = useHistory();

  const { firstName, lastName, email, password, confirmpassword } = inputs;

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
      input.password = "";
      input.confirmpassword = "";
      setInputs(input);
      props.signup(inputs);
    }
  };
  if (props.registered) {
    history.push("/signin");
  }

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
    if (!input.password) {
      isValid = false;
      errors.password = "Please enter your passwordword";
    }
    if (typeof input.password !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/
      );
      if (!pattern.test(input.password)) {
        isValid = false;
        errors.password =
          "Please enter a valid passwordword - 1 uppercase and 1 lowecase letters, 1 symbol and 1 number(min 8 max 64)";
      }
    }

    if (!input.confirmpassword) {
      isValid = false;
      errors.confirmpassword = "Please enter your confirm passwordword";
    }
    if (
      typeof input.password !== "undefined" &&
      typeof input.confirmpassword !== "undefined"
    ) {
      if (input.password !== input.confirmpassword) {
        isValid = false;
        errors.confirmpasswordword = errors.confirmpassword
          ? "Please enter your confirm password"
          : "password don't match";
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
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.password}
        </Typography>
        <Input
          color="secondary"
          type="password"
          placeholder="Confirm password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.confirmpassword}
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

const mapStateToProps = (state) => {
  return {
    registered: state.registered,
    signupProcessing: state.signupProcessing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (content) => dispatch(startSignup(content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
