import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

//Pages
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage";

var hist = createBrowserHistory();

const BASE_NAME = process.env.BASE_NAME;

ReactDOM.render(
  <Router history={hist} basename={BASE_NAME}>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
