import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute.js";
import Login from "./containers/About";
import Home from "./containers/Home";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/about" exact component={Login} appProps={appProps} />
    </Switch>
  );
}
