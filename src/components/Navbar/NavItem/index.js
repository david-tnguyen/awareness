import React from 'react';
import './navItem.scss';

const NavItem = (props) => (
  <li className={`navitem-container-${props.active}`}>
    <a className={`navitem-wrapper ${props.active}`}>
      <i className='material-icons'>{props.icon}</i>
      <span className='navlink-text'>{props.label}</span>
    </a>
  </li>
);

export default NavItem;