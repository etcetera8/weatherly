import React from 'react';
import './styles/Current.css';

const Current = (props) => {
  return(
      <main className='main-weather'>
        <img className="icon" src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`} />
        <p className='curr-temp'>{props.temp}°F</p>
        <p className='curr-condition'>{props.condition}</p>

        <div className="bottom-info">
          <div className="left">
            <p className="low">Low: {props.low}°F</p>
            <p className="high">High: {props.high}°F</p>
          </div>
          <div className="right">
            <p className="condition-description">{props.description}</p>
          </div>
        </div>
      </main>
    )
}

export default Current;