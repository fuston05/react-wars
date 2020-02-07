import React from 'react';

//components
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

//styles
import './homePage.scss';

//images
import LoaderImg from '../../assets/images/loader-3.gif';

const HomePage = ({data, isLoading}) => {
  if(isLoading){ 
    return (
      <Loader background= 'withBg' text= 'Loading...' image= {LoaderImg} />
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
