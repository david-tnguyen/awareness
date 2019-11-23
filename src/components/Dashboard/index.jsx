import React from 'react';
import { connect } from 'react-redux';
import './dashboard.scss';
import profile from '../../assets/profile.png';
import NavItem from '../Navbar/NavItem';

class Dashboard extends React.Component {
  render() {
    return (
      <nav className='dashboard-nav'>
        <div className='profile-container'>
          <img src={profile} alt="profile" className='photo'/>
          <div className='name'>David</div>
        </div>
        <ul>
          <NavItem />
          <li>My Goals</li>
          <li>Schedule</li>
          <li>Achievements</li>
          <li>Statistics</li>
          <li>Settings</li>
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

export default connect(mapStateToProps, null)(Dashboard);