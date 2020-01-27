import React from 'react';
import './cardStyles.scss';

const Card = (props) => {
  return (
    <div className= 'card'>
      <h2>{props.dataSet.name}</h2>
    </div>
  )
}

export default Card;