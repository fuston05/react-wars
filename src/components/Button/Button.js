import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
      <>
        <button>{props.label}</button>
      </>
  )
}

export default Button;
