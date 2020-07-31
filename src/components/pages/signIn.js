import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/signin", inputs)
      .then( res => {
        if (res.data.result === "success") {
          history.push("/dasboard");
        } else if (res.data.result === "password") {
          Swal.fire("Password is incorrect!");
        } else {
          Swal.fire("User not found!");
        }
      })
      .catch( err => {
        console.log(err);
      });
  };

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
export default SignIn;
