import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <h1>My Profile</h1>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	let nextPathname = "/"

	try {nextPathname = ownProps.location.state.nextPathname}
	catch(err) {}

	return {
		user: state.user,
		nextPathname // this prop passed in by React Router
	}

}

export default connect(mapStateToProps, null)(Dashboard);