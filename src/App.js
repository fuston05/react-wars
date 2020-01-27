import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { gsap } from "gsap";
//components
import HomePage from './components/HomePage/HomePage';
import Pagination from './components/Pagination/Pagination';
//styles
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

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [isNextPage, setIsNextPage]= useState(false);
  const [isPreviousPage, setIsPreviousPage]= useState(false);

  const [totalPages, setTotalPages] = useState();

  // https://swapi.co/api/people/?page=

  function getData(page){
    setIsLoading(true);
    Axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        setPeople(res.data.results);
        setTotalPages( Math.ceil(res.data.count/10) );

        // is there a 'next' page?
        if( res.data.next !== null ){
          setIsNextPage(true);
        }else{setIsNextPage(false);}

        //is there a 'previous' page?
        if(res.data.previous !== null){
          setIsPreviousPage(true);
        }else{
          setIsPreviousPage(false);
        }

        setIsLoading(false);
      })
      .catch(err => { console.log(err); })
  }//end func

    useEffect(() => {
      getData(1);
    }, [])
    
    

    return (
      <div className="App">
        <Route path='/'>
          <h1 className='mainHeading'>React Wars</h1>
        </Route>

        <Route path='/'>
          <HomePage isLoading={isLoading} data={people} />
        </Route>

        <Pagination />
      </div>
    );
}

export default App;
