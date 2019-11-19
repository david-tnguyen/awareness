import React from "react"
import { Router, Route } from "react-router"
import LoginContainer from './components/container/LoginContainer'

export default (store, history) => {
	const requireAuth = (nextState, replace, callback) => {
		const { user: { authenticated } } = store.getState();
		if (!authenticated) {
			replace({
				pathname: "/login",
				state: { nextPathname: nextState.location.pathname }
			});
		}
		callback();
	}

	return (
		<Router history={history}>
			<Route path="/" component={LoginContainer}>
				<Route path="login" component={LoginContainer} />
			</Route>
		</Router>
	);
};

