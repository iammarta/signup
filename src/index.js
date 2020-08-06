import React from "react";
import ReactDOM from 'react-dom';
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
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
    root: {
        margin: 0,
        textTransform: 'capitalize',
        height: '100vh'
    },
    card: {
    position: 'absolute',
    top: '15%',
    right: '0',
    left: '0',
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: '50px',
    },
    cardTitle:{
        marginBottom: '20px'
    }
  });


const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            background:{
                default: "#e2d1c3"
            } 
          },
      });
    return (
      <Router>
        <div className="app">
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/signin" component={SignIn} exact/>
          <div className="container">
          <Route path="/" exact>
          <Container>
          <Card className={classes.card}>
        <CardContent>
        <Typography gutterBottom variant="h5" classname={classes.cardTitle} component="h2">
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
        </MuiThemeProvider>
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