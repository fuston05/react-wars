import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { gsap } from "gsap";

import Card from '../Card/Card';

import './people.scss';


const People = (props) => {


  // vars

  //functions
  // animations on page-load
// window.onload = function () {
//   //card animation onload
//   //fade in cards as the move
//   gsap.to('.card', { duration: 1.8, opacity: '1' });

//   //first card animation
//   gsap.from('.card:first-child', { duration: 1.3, x: '-130%', ease: 'circ.out' });

//   //second card  y animation
//   gsap.from('.card:nth-child(2)', { duration: 1.6, y: '130%', ease: 'circ.out' });
//   //second card  x animation
//   gsap.from('.card:nth-child(2)', { duration: 0.8, x: '130%', ease: 'circ.out' });

//   //third card animation
//   gsap.from('.card:last-child', { duration: 1.2, x: '130%', ease: 'circ.out' });
// };

  

  return (
    <div className= 'pageCont'>
      {
        props.peopleData.map((ele, i) => {
          return <Card key= {i} name= {ele.name} />
        })
      }
    </div>
  )
}

export default People;
