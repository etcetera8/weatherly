import React from 'react';
import './styles/DayCard.css';
import PropTypes from 'prop-types';

const DayCard = (props) => {
  return (
      <section className='DayCard'>
        <p className = 'day'>{props.currDay}</p>
        <p>Low: {props.low}°F</p>
        <p>High: {props.high}°F</p>
        <img className = "daycard-icon" src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`}/>
      </section>
    );
};

DayCard.propTypes = {
  currDay: PropTypes.string,
  low: PropTypes.string,
  high: PropTypes.string,
  icon: PropTypes.string
};

export default DayCard;