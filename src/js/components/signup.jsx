import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Swal from "sweetalert2";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../redux/signUpActionTypes";
import { connect } from "react-redux";

const useStyles = makeStyles({
  sign__up: {
    position: "absolute",
    top: "15%",
    right: "0",
    left: "0",
    width: "50%",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "90px",
  },
  input: {
    marginTop: "20px",
  },
  button: {
    marginTop: "40px",
  },
  back: {
    position: "absolute",
    bottom: "30px",
    left: "30px",
    fontSize: "70px",
    color: "#dc3545",
  },
});

const SignUp = ({
  setFirstName,
  firstname,
  setLastName,
  lastname,
  setEmail,
  email,
  setPassword,
  password,
  setConfirmPassword,
  confirmpassword,
}) => {
  const classes = useStyles();

  const [errors, setErrors] = useState({});

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:3000/signup", {
          firstname,
          lastname,
          email,
          password,
          confirmpassword,
        })
        .then((res) => {
          if (res.data.result === "register") {
            Swal.fire({
              text: `Success! Thank you for signing up ${firstname}`,
              confirmButtonColor: "#dc3545",
            });
            history.push("/signin");
          } else if (res.data.result === "exist") {
            Swal.fire({
              text: `User already exists with this email ${email}!`,
              confirmButtonColor: "#dc3545",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!firstname) {
      isValid = false;
      errors.firstname = "Please enter your first name";
    }
    if (!lastname) {
      isValid = false;
      errors.lastname = "Please enter your last name";
    }
    if (!email) {
      isValid = false;
      errors.email = "Please enter your email Address";
    }
    if (typeof email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        isValid = false;
        errors.email = "Please enter a valid email address";
      }
    }
    if (!password) {
      isValid = false;
      errors.password = "Please enter your passwordword";
    }
    if (typeof password !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/
      );
      if (!pattern.test(password)) {
        isValid = false;
        errors.password =
          "Please enter a valid passwordword - 1 uppercase and 1 lowecase letters, 1 symbol and 1 number(min 8 max 64)";
      }
    }

    if (!confirmpassword) {
      isValid = false;
      errors.confirmpassword = "Please enter your confirm passwordword";
    }
    if (
      typeof password !== "undefined" &&
      typeof confirmpassword !== "undefined"
    ) {
      if (password !== confirmpassword) {
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
      <form className={classes.sign__up} onSubmit={handleSubmit} noValidate>
        <Typography gutterBottom variant="h5" component="h3">
          Sign Up
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Input
              className={classes.input}
              color="secondary"
              type="text"
              placeholder="First name"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
              fullWidth
            />
            <Typography variant="caption" color="error" component="p">
              {errors.firstname}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              className={classes.input}
              color="secondary"
              type="text"
              placeholder="Last name"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
            />
            <Typography variant="caption" color="error" component="p">
              {errors.lastname}
            </Typography>
          </Grid>
        </Grid>
        <Input
          className={classes.input}
          color="secondary"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.email}
        </Typography>
        <Input
          className={classes.input}
          color="secondary"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.password}
        </Typography>
        <Input
          className={classes.input}
          color="secondary"
          type="password"
          placeholder="Confirm password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          fullWidth
        />
        <Typography variant="caption" color="error" component="p">
          {errors.confirmpassword}
        </Typography>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          Sign Up
        </Button>
      </form>
      <Link to="/">
        <Icon className={classes.back}>reply</Icon>
      </Link>
    </>
  );
};
const mapStateToProps = (state) => ({
  firstname: state.signup.getIn(["userData", "firstname"]),
  lastname: state.signup.getIn(["userData", "lastname"]),
  email: state.signup.getIn(["userData", "email"]),
  password: state.signup.getIn(["userData", "password"]),
  confirmpassword: state.signup.getIn(["userData", "confirmpassword"]),
});

const mapDispatchToProps = {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
