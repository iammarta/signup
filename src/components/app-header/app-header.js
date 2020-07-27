import React from "react";
import "./app-header.css";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";

const Header = () => {
  return (
    <Container maxWidth={false} className="header">
      <Link to="/">
        <Icon className="home">home</Icon>
      </Link>
      <ul className="header-list">
        <li>
          <Link to="/signup/">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin/">Sign In</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
