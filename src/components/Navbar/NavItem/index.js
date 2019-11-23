import React from 'react';
import './navItem.scss';

const NavItem = (props) => (
  <li>
    <a className='navitem-wrapper'>
      <i className='material-icons'>{props.icon}</i>
      <span className='navlink-text'>{props.label}</span>
    </a>
  </li>
);

export default NavItem;