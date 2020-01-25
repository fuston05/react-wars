import React from 'react';
import Button from '../Button/Button';
import './nav.scss';

const Nav = () => {
  return (
    <div className= 'navCont'>
      <Button link= '/people' label= 'People' />
      <Button link= '/planets' label= 'Planets' />
      <Button link= '/starShips' label= 'Star Ships' />
    </div>
  )
}

export default Nav;
