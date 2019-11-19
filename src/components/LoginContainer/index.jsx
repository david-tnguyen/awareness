import React from 'react';
import ReactDOM from "react-dom";
import './login.scss';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';

class LoginContainer extends React.Component {
  onLoginSubmit = (event) => {
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    this.props.login({ email, password }, this.props.successPath);
  }

  render() {
    return (
      <div className='auth-wrapper'>
        <div className='login-wrapper'>
          <h2>Log In</h2>
          <div>Sign in with your credentials</div>
          <form className='form-wrapper' onSubmit={this.onLoginSubmit}>
            <div>
              <input type='email' ref='email' placeholder='Email'/>
            </div>
            <div>
              <input type='password' ref='password' placeholder='Password'/>
            </div>
            <div>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
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

export default connect(mapStateToProps, userActions)(LoginContainer);