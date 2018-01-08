import React from 'react';
import './styles/Card.css'

const HourCard = (props) => {
  return(
    <article className="display-card">
      <p>{props.time}</p>
      <h1 className="current-condition">{props.curCondition}</h1>
      <img className='hour-icon' src={props.icon} />
      </article>
    )

}

export default HourCard;
