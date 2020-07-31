import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();

  return (
    <div className="dashboard-wrapper">
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
