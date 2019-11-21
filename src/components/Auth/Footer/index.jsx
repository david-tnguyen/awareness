import React from 'react';
import './footer.scss';

const Footer = (props) => (
  <div className='account-footer'>
    <p className='signup-label'>
      {props.label}&nbsp;
      <a href='/account/signup'>{props.labelLink}</a>
    </p>
    <a href='/account/reset-password'>Forgot password?</a>
  </div>
);

export default Footer;