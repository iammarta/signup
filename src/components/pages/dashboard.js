import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dashboardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  let history = useHistory();

  return (
    <div className={classes.dashboardWrapper}>
      <h1>Dashboard</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        logout
      </Button>
    </div>
  );
};

export default memo(Dashboard);
