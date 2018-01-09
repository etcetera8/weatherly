import React from 'react';
import './styles/Current.css';
import PropTypes from 'prop-types';

const Current = (props) => {
  return (
      <main className='main-weather'>
        <div className = 'container'>
          <img className="icon" src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`} />
          <div className= "temp-cond">
            <p className='curr-temp'>{props.temp}<sup>°F </sup> </p>
            <p className='curr-condition'>{props.condition}</p>
            </div>
        </div>
        <div className="bottom-info">
          <div className="low-high">
            <p className="low">Low: {props.low}°F </p>
            <p className= "high">High: {props.high}°F</p>
          </div>
          <div className="right">
            <p className="condition-description">{props.description}</p>
          </div>
        </div>
      </main>
    );
};

Current.propTypes = {
  temp: PropTypes.string,
  icon: PropTypes.string,
  condition: PropTypes.string,
  low: PropTypes.string,
  high: PropTypes.string,
  description: PropTypes.string
};

export default Current;