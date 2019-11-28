import React from "react"
import LoginContainer from './components/LoginContainer';
import { Router, Route, Redirect } from 'react-router-dom';
import RegisterContainer from "./components/RegisterContainer";
import Navbar from './components/Navbar';
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
        <Navbar />
      ) : (
        <Redirect to ='/account/login' />
      )
    )} />
    <Route path="/account/login" component={LoginContainer} />
    <Route path="/account/register" component={RegisterContainer} />
  </Router>
  );
};
