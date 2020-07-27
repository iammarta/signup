import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Main = () => {
  return (
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
  );
};

export default Main;
