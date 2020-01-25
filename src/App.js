import React from 'react';
import { gsap } from "gsap";
import Pagination from './components/Pagination/Pagination';
import Card from './components/Card/Card';

import './styles/global.scss';
import './styles/app.scss';

// ***************************
window.onload= function(){

  gsap.to( '.mainHeading', { duration: 1.5, opacity: '1' } )
  gsap.from( '.mainHeading', { duration: 2, y: '-130%', ease: 'circ.out' } )
};


function App() {
  return (
    <div className="App">
      <h1 className= 'mainHeading'>React Wars</h1>
      <div className= 'cardCont'>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
