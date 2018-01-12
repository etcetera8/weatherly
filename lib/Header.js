import React from 'react';
import Search from './Search.js';
import './styles/Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className='Header'> 
      <div className="header-info"> 
        <h3 className='location'>{props.location}</h3>
        <h2 className='logo'>Weatherly</h2>
      </div>
      <Search 
        getData= {props.getData}
        loadStatus={props.loadStatus}
      />
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.string,
  getData: PropTypes.func
};

export default Header;