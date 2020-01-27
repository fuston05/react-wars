import React from 'react';
import Card from '../Card/Card';
import './homePage.scss';

const HomePage = (props) => {
  return (
    <div className= 'mainCont'>
    {props.data.map( (ele, i) => {
      return <Card key= {i} dataSet= {ele} />
    } )}
    </div>
  )
}

export default HomePage;
