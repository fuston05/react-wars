import React from 'react';

//styles
import './loader.scss';

//images
// default loader image
import LoaderImg from './images/loader.svg';

// see the loaderReadMe file for 'image', 'text' and 'background' options
const Loader = ({image, text, background}) => {
  return (
    <div className= 'loaderCont'>
      {image ? <img className= {`loaderImg ${background}`} alt= 'loading' src= {image} /> : <img className= {`loaderImg ${background}`} alt= 'loading' src= {LoaderImg} />}

      {text ? <p className= 'loaderText'>{text}</p> : null}
    </div>
  )
}

export default Loader;

