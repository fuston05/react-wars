import React from 'react';
import Pagination from './components/Pagination/Pagination';
import Card from './components/Card/Card';

import './styles/global.scss';
import './styles/app.scss';


function App() {
  return (
    <div className="App">
      <h1>React Wars</h1>
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
