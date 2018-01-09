import React from 'react';
import './styles/Card.css';
import PropTypes from 'prop-types';

const HourCard = (props) => {
  return (
    <article className="display-card">
      <p>{props.time}</p>
      <h1 className="current-condition">{props.curCondition}°F</h1>
      <img className='hour-icon' src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`} />
      </article>
    );
};

HourCard.propTypes = {
  time: PropTypes.string,
  curCondition: PropTypes.string,
  icon: PropTypes.string
};

export default HourCard;
