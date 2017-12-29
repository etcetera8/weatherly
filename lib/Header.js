import React from 'react';
import './Header.css';

const Header = (props) => {
  function getLoc(e) {
    e.preventDefault();
    console.log("HO")
    let input = document.getElementById("search").value;
    console.log(input)
    document.getElementById("search").value = "";
  }
  return (
    <header className='Header'>
      <div className="header-info">
        <h3 className='location'>{props.location}</h3>
        <h3 className='logo'>Weatherly</h3>
      </div>
      <form>
      <input id="search" type="text" placeholder="search" />
        <button onClick={getLoc}>
          submit
        </button>
      </form>
    </header>
    )
}

export default Header;