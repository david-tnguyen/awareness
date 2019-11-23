import React from 'react';
import './input.scss';
import { connect } from 'react-redux';

const Input = React.forwardRef((props, ref) => (
  <div>
    <label className='Label'>{props.label}</label>
    <div>
      <input className={`Input ${props.user.error}`} type={props.inputType} ref={ref}/>
    </div>
  </div>
));

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(Input);