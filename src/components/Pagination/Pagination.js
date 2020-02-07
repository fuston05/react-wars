import React from 'react';

//components
import Button from '../Button/Button';

//styles
import './pagination.scss';

const Pagination = ({isPreviousPage, isNextPage, nextFunction, prevFunction}) => {
  return (
    <div className= 'pagination'>
      {isPreviousPage ? <Button clickFunction= {prevFunction} dirClass= 'previous' label= 'Previous' /> : null}
      {isNextPage ? <Button clickFunction= {nextFunction} dirClass= 'next' label= 'Next' />: null}
      {/* <Button label= 'Previous' />
      <Button label= 'Next' /> */}
    </div>
  )
}

export default Pagination;
