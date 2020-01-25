import React from 'react';
import './cardStyles.scss';

const Card = (props) => {
  return (
    <div className= 'card'>
      <h2>{props.name}</h2>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
      <p>card Info here</p>
    </div>
  )
}

export default Card;