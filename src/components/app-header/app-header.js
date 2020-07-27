import React from "react";
import "./app-header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header container-fluid">
      <Link to="/">
        <i className="fas fa-home home"></i>
      </Link>
      <ul className="header-list">
        <li>
          <Link to="/signup/">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin/">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
