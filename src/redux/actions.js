import axios from "axios";
import Swal from "sweetalert2";
import {
  SIGNIN,
  SIGNUP,
  SIGNINPROCESSING,
  SIGNUPPROCESSING,
} from "./actionTypes.js";

export const startSignin = (content) => {
  return (dispatch) => {
    dispatch(signinProcessing());
    axios
      .post("http://localhost:3000/signin", content)
      .then((res) => {
        if (res.data.result === "success") {
          dispatch(signin(content));
        } else if (res.data.result === "password") {
          Swal.fire("Password is incorrect!");
        } else {
          Swal.fire("User not found!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startSignup = (content) => {
  return (dispatch) => {
    dispatch(signupProcessing());
    axios
      .post("http://localhost:3000/signup", content)
      .then((res) => {
        if (res.data.result === "register") {
          Swal.fire(`Success! Thank you for signing up ${content.firstName}`);
          dispatch(signup(content));
        } else {
          Swal.fire(`User already exists with this email ${content.email}!`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const signinProcessing = () => {
  return {
    type: SIGNINPROCESSING,
    payload: "",
  };
};

const signin = (content) => {
  return {
    type: SIGNIN,
    payload: content,
  };
};

const signupProcessing = () => {
  return {
    type: SIGNUPPROCESSING,
    payload: "",
  };
};

export const signup = (content) => {
  return {
    type: SIGNUP,
    payload: content,
  };
};
