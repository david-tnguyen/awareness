import React from 'react';
import Header from '../Auth/Header';
import Input from '../Auth/Input';
import Button from '../Auth/Button';
import Footer from '../Auth/Footer';
import '../LoginContainer/login.scss';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';

const emailRef = React.createRef();
const passwordRef = React.createRef();
const firstName = React.createRef();
const lastName = React.createRef();

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  onRegisterSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    this.props.register({ email, password });
  }

  render() {
    return (
      <div>
        <nav className='login-navbar'>
          <h1>Awareness</h1>
        </nav>
        <div className='login-wrapper'>
          <div className='login-card'>
            <Header label='Create account'/>
            <form className='form-wrapper' onSubmit={this.onRegisterSubmit}>
              <Input ref={firstName} label='First Name' inputType='text'/>
              <Input ref={lastName} label='Last Name' inputType='text'/>
              <Input ref={emailRef} label='Email Address' inputType='email'/>
              <Input ref={passwordRef} label='Password' inputType='password'/>
              <Button label='Create account'/>
              <Footer label="Already have an account?" labelLink='Sign in' link='/account/login'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	return {
		user: state.user,
	}

}

export default connect(mapStateToProps, userActions)(RegisterContainer);