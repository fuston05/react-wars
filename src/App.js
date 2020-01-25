import React from 'react';
import { gsap } from "gsap";
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';

import './styles/global.scss';
import './styles/app.scss';

// ***************************
// animations on page-load
window.onload = function () {
  //card animation onload
  //fade in cards as the move
  gsap.to('.card', { duration: 1.8, opacity: '1' });

  //first card animation
  gsap.from('.card:first-child', { duration: 1.3, x: '-130%', ease: 'circ.out' });

  //second card  y animation
  gsap.from('.card:nth-child(2)', { duration: 1.6, y: '130%', ease: 'circ.out' });
  //second card  x animation
  gsap.from('.card:nth-child(2)', { duration: 0.8, x: '130%', ease: 'circ.out' });

  //third card animation
  gsap.from('.card:last-child', { duration: 1.2, x: '130%', ease: 'circ.out' });

  //header animation on load
  gsap.to('.mainHeading', { duration: 1.2, opacity: '1' });
  gsap.from('.mainHeading', { duration: 1.7, y: '-130%', ease: 'circ.out' });
};

// ***************************

  function setActive(e){
    document.querySelectorAll('.page').forEach( (ele)=> {ele.classList.remove('active')} );
    e.target.classList.add('active');
  }

// ***************************
// ***************************

function App() {
  return (
    <div className="App">
      <h1 className='mainHeading'>React Wars</h1>
      <Nav />
      <div className='cardCont'>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination func= {setActive} />
    </div>
  );
}

export default App;
