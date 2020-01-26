import React from 'react';
import Button from '../Button/Button';
import './nav.scss';

const Nav = () => {
  return (
    <nav className= 'navCont'>
      <Button link= '/people' label= 'People' />
      <Button link= '/planets' label= 'Planets' />
      <Button link= '/starShips' label= 'Star Ships' />
    </nav>
  )
}

export default Nav;
