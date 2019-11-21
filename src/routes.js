import React from "react"
import LoginContainer from './components/LoginContainer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import RegisterContainer from "./components/RegisterContainer";
import Dashboard from './components/Dashboard';
import store from './store';
import { createBrowserHistory } from 'history';

export default () => {
	const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    console.log(authenticated);
		return authenticated;
	}

	return (
    <Router history={createBrowserHistory()}>
      <Route exact path="/" render={() => (
        requireAuth() ? (
          <Redirect to ='/account/login' />
        ) : (
          <Dashboard />
        )
      )} />
      <Route path="/account/login" component={LoginContainer} />
      <Route path="/account/register" component={RegisterContainer} />
    </Router>
	);
};

