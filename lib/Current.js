import React from 'react';
import './styles/Current.css';

const Current = (props) => {
  return(
    <div className='container'>
    {
      props.temp.current_observation &&

      <main className='main-weather'>
        <img className="icon" src={props.icon} />
        <p className='curr-temp'>{props.temp.current_observation.display_location.city}</p>
        <p className='curr-condition'>{props.condition}</p>

        <div className="bottom-info">
          <div className="left">
            <p className="low">Low: {props.low}</p>
            <p className="high">High: {props.high}</p>
          </div>
          <div className="right">
            <p className="condition-description">{props.description}</p>
          </div>
        </div>
      </main>
     } 
    </div>


    )
}

export default Current;