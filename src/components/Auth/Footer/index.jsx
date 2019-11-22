import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = (props) => (
  <div className='account-footer'>
    <p className='signup-label'>
      {props.label}&nbsp;
      <Link to={props.link} className='auth-link'>{props.labelLink}</Link>
    </p>
    <a className='auth-link' href='/account/reset-password'>Forgot password?</a>
  </div>
);

export default Footer;