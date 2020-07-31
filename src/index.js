import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignUp, SignIn, Dashboard } from "./components/pages";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./redux/reducer";
import thunk from "redux-thunk";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
    return (
      <Router>
        <div className="app">
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/signin" component={SignIn} exact/>
          <div className="container">
          <Route path="/" exact>
          <Container>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Do you have an account?
           </Typography>
           <Typography gutterBottom variant="body1" color="textSecondary" component="p">
              Please, <Link to="/signin/">sign in.</Link>
              </Typography>
              <Typography gutterBottom variant="body1" color="textSecondary" component="p">
              Or <Link to="/signup/">sign up</Link> the new account
          </Typography>
        </CardContent>
      </Card>
    </Container>
    </Route>
          </div>
        </div>
      </Router>
    );
  };

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );