import React from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Swal from "sweetalert2";
import { setEmail, setPassword } from "../redux/signInActionTypes";
import { connect } from "react-redux";

const useStyles = makeStyles({
  sign__in: {
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

const SignIn = ({ setEmail, email, setPassword, password }) => {
  const classes = useStyles();

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/signin", { email, password })
      .then((res) => {
        if (res.data.result === "success") {
          history.push("/dasboard");
        } else if (res.data.result === "password") {
          Swal.fire({
            text: "Password is incorrect!",
            confirmButtonColor: "#dc3545",
          });
        } else {
          Swal.fire({
            text: "User not found!",
            confirmButtonColor: "#dc3545",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className={classes.sign__in} onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="h3">
          Sign In
        </Typography>
        <Input
          className={classes.input}
          color="secondary"
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <Input
          className={classes.input}
          color="secondary"
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          Sign In
        </Button>
      </form>
      <Link to="/">
        <Icon className={classes.back}>reply</Icon>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.signin.getIn(["userData", "email"]),
  password: state.signin.getIn(["userData", "password"]),
});

const mapDispatchToProps = {
  setEmail,
  setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
