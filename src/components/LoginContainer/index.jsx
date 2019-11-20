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
      <div>
        <nav className='login-navbar'>
          <h1>Awareness</h1>
        </nav>
        <div className='login-wrapper'>
          <div className='login-card'>
            <div className='enter-creds'>Sign in with your credentials</div>
            <form className='form-wrapper' onSubmit={this.onLoginSubmit}>
              <div>
                <label className='Label'>Email Address</label>
                <div>
                  <input className='Input' type='email' ref='email'/>
                </div>
              </div>
              <div>
                <label className='Label'>Password</label>
                <div>
                  <input className='Input' type='password' ref='password'/>
                </div>
              </div>
              <div>
                <button className='Button' type='submit'>Log In</button>
              </div>
              <div className='account-footer'>
                <p className='signup-label'>
                  Don't have an account?&nbsp;
                  <a href='/account/signup'>Sign up now</a>
                </p>
                <a href='/account/reset-password'>Forgot password?</a>
              </div>
            </form>
          </div>
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