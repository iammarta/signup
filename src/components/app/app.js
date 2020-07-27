import React from "react";
import Header from "../app-header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignUp, SignIn, Main } from "../pages";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/signin" component={SignIn} exact />
        <div className="container">
          <Route path="/" component={Main} exact />
        </div>
      </div>
    </Router>
  );
};

export default App;
