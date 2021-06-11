import React from "react";
import { Route, Switch } from "react-router";
import Header from "../../features/frontend/header/Header";
import Home from "../../features/frontend/home/Home";
import Login from "../../features/frontend/login/Login";
import Vaccine from "../../features/frontend/vaccine/Vaccine";
const Blank = () => {
  return (
    <>
      {/* <h1>Blank Component</h1> */}
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/vaccine">
          <Vaccine />
        </Route>
      </Switch>
    </>
  );
};

export default Blank;
