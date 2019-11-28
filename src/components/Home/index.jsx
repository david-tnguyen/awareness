import React from 'react';
import { connect } from 'react-redux';
import './home.scss';
import Navbar from '../Navbar';

class Home extends React.Component {
  render() {
    return (
      <div className='home-grid'>
        <div className='one'>
          <Navbar />
        </div>
        <div className='two'>Net worth over time</div>
        <div className='three'>Cash over time</div>
        <div className='four'>Investments over time</div>
        <div className='five'>Credit over time</div>
        <div className='six'>Budgeting goals</div>
        <div className='seven'>Budgeting by categories</div>
        <div className='eight'>Saving goals</div>
        <div className='eleven'>Retirement</div>
        <div className='home-account'>Current account balances</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(Home);