import React from 'react';
import './navItem.scss';

const NavItem = () => (
  <li>
    <a className='navitem-wrapper'>
      <i className='material-icons'>home</i>
      <span className='navlink-text'>Home</span>
    </a>
  </li>
);

export default NavItem;