import React from 'react';
import ReactDOM from "react-dom";
import Input from '../Auth/Input';
import './login.scss';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';

const emailRef = React.createRef();
const passwordRef = React.createRef();

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  onLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
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
              <Input ref={emailRef} label='Email Address' inputType='email'/>
              <Input ref={passwordRef} label='Password' inputType='password'/>

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