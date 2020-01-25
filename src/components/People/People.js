import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { gsap } from "gsap";

import Card from '../Card/Card';


const People = () => {
  // state
  const [people, setPeople]= useState([]);

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

  useEffect(() => {
    Axios
    .get('https://swapi.co/api/people')
    .then(res => {
      // console.log('res: ', res.data.results);
      setPeople(res.data.results);
    })
    .catch(err => {console.log(err);})

  }, [])

  return (
    <div className= 'pageCont'>
      <p>people page</p>
      {console.log('people: ', people)}
      {
        people.map((ele, i) => {
          return <Card key= {i} name= {ele.name} />
        })
      }
    </div>
  )
}

export default People;
