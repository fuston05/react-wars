import React from 'react';
import {Link} from 'react-router-dom';
import './button.scss';

const Button = (props) => {
  return (
      <>
        <Link className= 'button' to= {props.link}>{props.label}</Link>
      </>
  )
}

export default Button;
