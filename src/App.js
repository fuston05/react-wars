import React from 'react';
import { gsap } from "gsap";
import Pagination from './components/Pagination/Pagination';
import Card from './components/Card/Card';
import loader from './assets/images/loader.svg';

import './styles/global.scss';
import './styles/app.scss';

// ***************************
window.onload= function(){
  //card animation onload
  gsap.to( '.card', { duration: 1.8, opacity: '1' } );

  //first card animation
  gsap.from( '.card:first-child', { duration: 2, x: '-130%', ease: 'circ.out' } );

  //second card  y animation
  gsap.from( '.card:nth-child(2)', { duration: 2.4, y: '130%', ease: 'circ.out' } );
  //second card  x animation
  gsap.from( '.card:nth-child(2)', { duration: 1.6, x: '130%', ease: 'circ.out' } );

  //third card animation
  gsap.from( '.card:last-child', { duration: 2.6, x: '130%', ease: 'circ.out' } );

  //header animation on load
  gsap.to( '.mainHeading', { duration: 1.5, opacity: '1' } );
  gsap.from( '.mainHeading', { duration: 2, y: '-130%', ease: 'circ.out' } );
};


function App() {
  return (
    <div className="App">
      <h1 className= 'mainHeading'>React Wars</h1>
      {/* <img src= {loader}/> */}
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
