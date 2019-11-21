import React from 'react';
import './header.scss';

const Header = (props) => (
  <h2 className='enter-creds'>{props.label}</h2>
);


export default Header;