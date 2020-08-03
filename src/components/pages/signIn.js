import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { startSignin } from "../../redux/actions";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sign__in: {
        position: 'absolute',
        top: '15%',
        right: '0',
        left: '0',
        width: '50%',
        margin:'0 auto',
        textAlign: 'center',
        marginTop: '90px',
    },
    input:{
        marginTop:'20px',
    },
    button:{
        marginTop: '40px'
    },
    back: {
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        fontSize: '70px',
        color: '#dc3545',
    }
  });

const SignIn = (props) => {

    const classes = useStyles();

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
          onChange={handleChange}
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
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" className={classes.button} color="secondary">
          Sign In
        </Button>
      </form>
      <Link to="/">
        <Icon className={classes.back}>reply</Icon>
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
