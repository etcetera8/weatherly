import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header className='Header'>
      <h3 className='location'>{props.location}</h3>
      <h3 className='logo'>Weatherly</h3>
    </header>
    )
}

export default Header;