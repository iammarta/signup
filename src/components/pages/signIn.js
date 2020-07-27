import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const SignIn = () => {

    const [inputs, setInputs] = useState({
        email: '',
        pass: ''
    });
    const { email, pass } = inputs;


 const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };
  
 const handleSubmit = (e) => {
    e.preventDefault();
  };

    return (
      <>
        <form className="sign__in" onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="h3">Sign In</Typography>
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
                value={pass}
                name="pass"
                placeholder="Password"
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
}
export default SignIn;