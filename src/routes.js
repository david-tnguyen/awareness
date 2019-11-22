import React from "react"
import LoginContainer from './components/LoginContainer';
import { Router, Route, Redirect } from 'react-router-dom';
import RegisterContainer from "./components/RegisterContainer";
import Dashboard from './components/Dashboard';
import store from './store';
import history from './history';

export default () => {
  const requireAuth = (nextState, replace, callback) => {
  const { user: { authenticated } } = store.getState();
      return authenticated;
  }

  return (
  <Router history={history}>
    <Route exact path="/" render={() => (
      requireAuth() ? (
        <Dashboard />
      ) : (
        <Redirect to ='/account/login' />
      )
    )} />
    <Route path="/account/login" component={LoginContainer} />
    <Route path="/account/register" component={RegisterContainer} />
  </Router>
  );
};
