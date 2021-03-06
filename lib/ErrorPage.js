import React from 'react';
import Search from './Search.js';
import './styles/Welcome.css';
import PropTypes from 'prop-types';


const ErrorPage = (props) => {
  return (
    <div>
      <h3>LOCATION ERROR </h3>
      <h3> SEARCH AGAIN </h3>
      <div className= 'greeting'>
        <Search getData={props.getData}/>
      </div>  
      <div className = 'blured'> </div>
    </div>
    );
};

ErrorPage.propTypes = {
  getData: PropTypes.func
};

export default ErrorPage;