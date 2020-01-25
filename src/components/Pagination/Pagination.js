import React from 'react';
import './pagination.scss';

const Pagination = (props) => {
  return (
    <div className= 'pagination'>
      <ul>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>1</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>2</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>3</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>4</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>5</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>6</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>7</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>8</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>9</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>10</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>11</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>12</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>13</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>14</li>
        <li onClick= {(e) => {props.func(e)}} className= 'page'>15</li>
       
      </ul>
    </div>
  )
}

export default Pagination;
