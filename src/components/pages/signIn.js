import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { startSignin } from "../../redux/actions";

const SignIn = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const { email, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signin(inputs);
  };
  if (props.loggedIn) {
    history.push("/dashboard");
  }

  return (
    <>
      <form className="sign__in" onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="h3">
          Sign In
        </Typography>
        <Input
          color="secondary"
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          fullWidth
        />
        <Input
          color="secondary"
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="secondary">
          Sign In
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
    loggedIn: state.signIn,
    signinProcessing: state.signinProcessing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => dispatch(startSignin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
