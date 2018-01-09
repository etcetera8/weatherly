import React from 'react';
import Search from './Search';
import './styles/Welcome.css'


export default function Welcome(props) {
  return (
    <div className= 'Welcome'>
     <h2 className='logo'>Weatherly</h2>
      <div className = 'greeting'>
        <h1> WELCOME </h1>
        <Search 
          getData = {props.getData} />
      </div> 
      <div className = "blured"></div>  
    </div>
    )
}