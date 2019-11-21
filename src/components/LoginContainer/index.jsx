import React from 'react';
import Header from '../Auth/Header';
import Input from '../Auth/Input';
import Button from '../Auth/Button';
import Footer from '../Auth/Footer';
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
            <Header label='Sign in with your credentials'/>
            <form className='form-wrapper' onSubmit={this.onLoginSubmit}>
              <Input ref={emailRef} label='Email Address' inputType='email'/>
              <Input ref={passwordRef} label='Password' inputType='password'/>
              <Button label='Log In'/>
              <Footer label="Don't have an account?" labelLink='Sign up now'/>
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