import React from "react"
import LoginContainer from './components/LoginContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterContainer from "./components/RegisterContainer";

export default () => {
	// const requireAuth = (nextState, replace, callback) => {
	// 	const { user: { authenticated } } = store.getState();
	// 	if (!authenticated) {
	// 		replace({
	// 			pathname: "/login",
	// 			state: { nextPathname: nextState.location.pathname }
	// 		});
	// 	}
	// 	callback();
	// }

	return (
    <Router>
      {/* <Route path="/" component={LoginContainer} /> */}
      <Route path="/account/login" component={LoginContainer} />
      <Route path="/account/register" component={RegisterContainer} />
    </Router>
	);
};

