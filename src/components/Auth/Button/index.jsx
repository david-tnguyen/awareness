import React from 'react';

const Button = (props) => (
  <div>
    <button className='Button' type='submit'>{props.label}</button>
  </div>
);

export default Button;