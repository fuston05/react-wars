import React from 'react';
import { Route } from 'react-router-dom';
import { gsap } from "gsap";
import Nav from './components/Nav/Nav';
import Planets from './components/Planets/Planets';
import People from './components/People/People';
import StarShips from './components/Starships/StarShips';
import Pagination from './components/Pagination/Pagination';

import './styles/global.scss';
import './styles/app.scss';

// ***************************
// animations on page-load
window.onload = function () {

  //header animation on load
  gsap.to('.mainHeading', { duration: 1.2, opacity: '1' });
  gsap.from('.mainHeading', { duration: 1.7, y: '-130%', ease: 'circ.out' });
};

// ***************************

function setActive(e) {
  document.querySelectorAll('.page').forEach((ele) => { ele.classList.remove('active') });
  e.target.classList.add('active');
}

// ***************************
// ***************************

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <h1 className='mainHeading'>React Wars</h1>
      </Route>

      <Route path='/'>
        <Nav />
      </Route>

      <Route exact path= '/people'>
        <People />
      </Route>

      <Route exact path= '/planets'>
        <Planets />
      </Route>

      <Route exact path= '/starShips'>
        <StarShips />
      </Route>

      <Route path='/'>
        <Pagination func={setActive} />
      </Route>

      

    </div>
  );
}

export default App;
