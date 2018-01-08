import React from 'react';
import Search from './Search.js'
import './styles/Header.css';

const Header = (props) => {
  return (
    <header className='Header'> 
      <div className="header-info"> 
        <h3 className='location'>{props.location}</h3>
        <h3 className='logo'>Weatherly</h3>
      </div>
      <Search getData= {props.getData} />
    </header>
  )
}

export default Header;