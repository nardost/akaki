import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import "assets/scss/material-kit-react.scss?v=1.9.0";

//Pages
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import FeedbackPage from "views/FeedbackPage/FeedbackPage";
import RegistrationPage from "views/RegistrationPage/RegistrationPage";
import ConfirmationPage from "views/RegistrationPage/ConfirmationPage";

var hist = createBrowserHistory();

const BASE_NAME = process.env.BASE_NAME;
/**
 * Redux store for session management and more...
 */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist} basename={BASE_NAME}>
      <Switch>
        <Route exact path="/confirm" component={ConfirmationPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/feedback" component={FeedbackPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
