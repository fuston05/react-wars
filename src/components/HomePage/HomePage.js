import React from 'react';
import Card from '../Card/Card';
import './homePage.scss';
import Loader from '../../assets/images/loader.svg';

const HomePage = ({data, isLoading}) => {
  if(isLoading){ 
    return (
      
      <img className= 'loaderImg' alt= 'loading' src= {Loader} />
    )
  }

  return (
    <div className= 'cardCont'>

      {data.map( (ele, i) => {
      return <Card key= {i} dataSet= {ele} />
    } )}
    </div>
  )
}

export default HomePage;
