import React from 'react';
import Card from '../Card/Card';
import './homePage.scss';
import Loader from '../../assets/images/loader.svg';

const HomePage = (props) => {
  if(props.isLoading === true){ 
    return <img src= {Loader} />
  }

  return (
    <div className= 'mainCont'>
      {props.data.map( (ele, i) => {
      return <Card key= {i} dataSet= {ele} />
    } )}
    </div>
  )
}

export default HomePage;
