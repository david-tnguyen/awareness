import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className='account-footer'>
    <p className='signup-label'>
      Don't have an account?&nbsp;
      <a href='/account/signup'>Sign up now</a>
    </p>
    <a href='/account/reset-password'>Forgot password?</a>
  </div>
);

export default Footer;