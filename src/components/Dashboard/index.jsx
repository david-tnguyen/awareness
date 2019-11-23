import React from 'react';
import { connect } from 'react-redux';
import './dashboard.scss';
import profile from '../../assets/profile.png';

class Dashboard extends React.Component {
  render() {
    return (
      <nav className='dashboard-nav'>
        <div className='dashboard-profile'>
          <img src={profile} alt="profile" className='profile'/>
        </div>
        <ul>
          <li>Test</li>
          <li>Test 2</li>
          <li>Test 3</li>
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