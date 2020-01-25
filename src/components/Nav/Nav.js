import React from 'react';
import Button from '../Button/Button';
import './nav.scss';

const Nav = () => {
  return (
    <div className= 'navCont'>
      <Button label= 'People' />
      <Button label= 'Planets' />
      <Button label= 'Starships' />
    </div>
  )
}

export default Nav;
