import React from 'react';
import { connect } from 'react-redux';
import './home.scss';
import Navbar from '../Navbar';
import LineChart from './LineChart/index.jsx';

const margin = 20;
const data = [
  {a: 1, b: 3},
  {a: 2, b: 6},
  {a: 3, b: 2},
  {a: 4, b: 9},
  {a: 5, b: 8},
  {a: 6, b: 3},
  {a: 7, b: 6},
  {a: 8, b: 2},
  {a: 9, b: 10},
  {a: 10, b: 8},
  {a: 11, b: 3},
  {a: 12, b: 6},
  {a: 13, b: 2},
  {a: 14, b: 14},
  {a: 15, b: 8},
]

class Home extends React.Component {
  render() {
    return (
      <div className='home-grid'>
        <div className='one'>
          <Navbar />
        </div>
        <div className='two'>
          <div>Net worth</div>
          <div className='line-wrapper'>
            <LineChart data={data} />
          </div>

        </div>
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