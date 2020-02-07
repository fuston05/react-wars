import React from 'react';
import './button.scss';

const Button = ({label, dirClass, clickFunction}) => {
  return (
      <>
        <button onClick= { () => {clickFunction()} } className= {` paginationButton ${dirClass} `}>{label}</button>
      </>
  )
}

export default Button;
