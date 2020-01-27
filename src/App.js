import React, {useState, useEffect} from 'react';
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

// ********************** API CALLS ***************************



// ***************************

function App() {
  const [people, setPeople]= useState([]); 

  const [postsPerPage, setPostsPerPage]= useState(5);
  const [pageNum, setPageNum]= useState(1);
  const [currentData, setCurrentData]= useState([]);
  const [totalPages, setTotalPages]= useState();

  function getCurrentData(data){
    //get index values for slicing pagination
    let startIndex= (pageNum*postsPerPage)-postsPerPage;
    let endIndex= ( startIndex+postsPerPage );
    console.log('data: ', data);
    return data.slice(startIndex, endIndex);
    //get array length for pagination use
    setTotalPages(people.length);
  }

  // **********people api*************
  useEffect(() => { //default initial page state

      // console.log('res: ', res.data);
      // setPeople(res.data.results);
      // let data= getCurrentData(res.data.results);
      // setCurrentData( data );
      //****** */
      let ready= true;
      let count= 2;
      // while(ready===true) {
      //   Axios
      //   .get(`https://swapi.co/api/people/?page= ${count}`)
      //   .then(res => {
      //     console.log('next: ', res.data.next);
      //     setPeople( {...people}, [res.data.results] );
      //     //is there another page?
      //     if (res.data.next === null) {
      //       //stop loop
      //       console.log('null');
      //       ready= false;
      //       return false;
      //     }//end if
      //     count++;
      //   })
      //   .catch(err => {console.log(err);})
        
      // }//end for

  }, [])

  console.log('CurrentData: ', currentData);

  return (
    <div className="App">
      <Route path='/'>
        <h1 className='mainHeading'>React Wars</h1>
      </Route>

      <Route path='/'>
        <HomePage data= {currentData}/>
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
