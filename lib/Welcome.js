import React from 'react';
import Search from './Search';
import './styles/Welcome.css';
import PropTypes from 'prop-types';

export default function Welcome(props) {
  return (
    <div className= 'welcome'>
     <h2 className='logo'>Weatherly</h2>
      <div className = 'greeting'>
        <h1> WELCOME </h1>
        <Search 
          getData = {props.getData} />
      </div> 
      <div className = "blured"></div>  
    </div>
  );
}

Welcome.propTypes = {
  getData: PropTypes.func
};