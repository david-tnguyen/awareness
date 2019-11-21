import React from 'react';
import './footer.scss';

const Footer = (props) => (
  <div className='account-footer'>
    <p className='signup-label'>
      {props.label}&nbsp;
      <a className='auth-link' href={props.link}>{props.labelLink}</a>
    </p>
    <a className='auth-link' href='/account/reset-password'>Forgot password?</a>
  </div>
);

export default Footer;