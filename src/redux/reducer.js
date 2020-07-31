import {
    SIGNIN,
    SIGNUP,
    SIGNINPROCESSING,
    SIGNUPPROCESSING,
  } from "./actionTypes.js";
  
  export const reducer = (state = {}, action) => {
    switch (action.type) {
      case SIGNIN:
        return { ...state, signIn: true };
      case SIGNUP:
        return { ...state, signUp: true };
      case SIGNINPROCESSING:
        return { ...state, signinProcessing: true };
      case SIGNUPPROCESSING:
        return { ...state, signupProcessing: true };
      default:
        return state;
    }
  };