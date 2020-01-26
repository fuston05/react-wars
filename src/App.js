import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { gsap } from "gsap";
//components
import Nav from './components/Nav/Nav';
import Planets from './components/Planets/Planets';
import People from './components/People/People';
import StarShips from './components/Starships/StarShips';
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

// ********************** API CALLS ***************************



// ***************************

function App() {
  const [people, setPeople]= useState([]); 
  const [planets, setPlanets]= useState([]); 
  const [starShips, setStarShips]= useState([]); 

  const [postsPerPage, setPostsPerPage]= useState(3);
  const [pageNum, setPageNum]= useState(2);
  const [currentData, setCurrentData]= useState([]);

  function getCurrentData(data){
    //get index values for slicing pagination
    let startIndex= (pageNum*postsPerPage)-postsPerPage;
    let endIndex= ( startIndex+postsPerPage )-1;
    console.log('data: ', data);
    return data.slice(startIndex, endIndex);
  }

  // **********people api*************
  useEffect(() => { //default initial page state
    Axios
    .get('https://swapi.co/api/people')
    .then(res => {
      // console.log('res: ', res.data.results);
      setPeople(res.data.results);
      let data= getCurrentData(people)
      setCurrentData( data );
      
    })
    .catch(err => {console.log(err);})
  }, [])

  console.log('data: ', currentData);

  return (
    <div className="App">
      <Route path='/'>
        <h1 className='mainHeading'>React Wars</h1>
      </Route>

      {/* <Route path='/'>
        <Nav />
      </Route> */}
      
      {/* <Route exact path= '/people'>
        <People  peopleData= {people}/>
      </Route> */}
      

      {/* <Route exact path= '/planets'>
        <Planets />
      </Route> */}

      {/* <Route exact path= '/starShips'>
        <StarShips />
      </Route> */}

      {/* <Route path='/'>
        <Pagination func={setActive} />
      </Route> */}

      <Pagination />
    </div>
  );
}

export default App;
