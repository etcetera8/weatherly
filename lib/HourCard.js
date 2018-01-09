import React from 'react';
import './styles/Card.css'

const HourCard = (props) => {
  return(
    <article className="display-card">
      <p>{props.time}</p>
      <h1 className="current-condition">{props.curCondition}°F</h1>
      <img className='hour-icon' src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`} />
      </article>
    )

}

export default HourCard;
