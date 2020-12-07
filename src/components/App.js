/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import ShowFinder from "./containers/ShowFinder";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <div className="container">
            <h3>Show Finder</h3>
          </div>
        </header>
        <div className="container content-container">
          <Switch>
            <Route exact path="/" component={ShowFinder} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
