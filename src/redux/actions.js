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
};

export const startSignup = (content) => {
  return (dispatch) => {
    dispatch(signupProcessing());
    axios
      .post("http://localhost:3000/signup", content)
      .then((res) => {
        if (res.data.result === "register") {
          Swal.fire({
            text: `Success! Thank you for signing up ${content.firstName}`,
            confirmButtonColor: "#dc3545",
          });
          dispatch(signup(content));
        } else {
          Swal.fire({
            text: `User already exists with this email ${content.email}!`,
            confirmButtonColor: "#dc3545",
          });
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
