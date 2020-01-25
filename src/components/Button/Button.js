import React from 'react';
import {Link} from 'react-router-dom';
import './button.scss';

const Button = (props) => {
  return (
      <>
        <button><Link to= {props.link}>{props.label}</Link></button>
      </>
  )
}

export default Button;
