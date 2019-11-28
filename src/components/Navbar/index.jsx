import React from 'react';
import { connect } from 'react-redux';
import './navbar.scss';
import profile from '../../assets/user.png';
import NavItem from '../Navbar/NavItem';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='dashboard-nav'>
        <div className='profile-container'>
          <img src={profile} alt="profile" className='photo'/>
          <div className='name'>Jane</div>
        </div>
        <ul>
          <NavItem icon='home' label='home' active='active'/>
          <NavItem icon='outlined_flag' label='my goals'/>
          <NavItem icon='schedule' label='schedule'/>
          <NavItem icon='emoji_events' label='achievements'/>
          <NavItem icon='show_chart' label='statistics'/>
          <NavItem icon='brightness_low' label='settings'/>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(Navbar);