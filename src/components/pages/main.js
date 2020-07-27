import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">Do you have an account?</h5>
        <div className="card-body">
          <p className="card-text">
            Please, <Link to="/signin/">sign in.</Link>
          </p>
          <p className="card-text">
            Or <Link to="/signup/">sign up</Link> the new account{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
