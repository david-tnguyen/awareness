import React from 'react';
import './input.scss';

const Input = React.forwardRef((props, ref) => (
  <div>
    <label className='Label'>{props.label}</label>
    <div>
      <input className='Input' type={props.inputType} ref={ref}/>
    </div>
  </div>
));

export default Input;