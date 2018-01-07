import React from 'react';
import Search from './Search.js'
import './styles/Header.css';

const Header = (props) => {
  return (
    <div> 
    {
      props.location.current_observation &&
    
      <header className='Header'> 
      <div className="header-info"> 
        <h3 className='location'>{props.location.current_observation.display_location.city}</h3>
        <h3 className='logo'>Weatherly</h3>
      </div>
      <Search getData= {props.getData} />
      </header>
    }  
    </div>
  )
}

export default Header;