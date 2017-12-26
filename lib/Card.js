import React from 'react';
import './Card.css'

const Card = (props) => {
  return(
    <article className="display-card">
      <p>{props.time}</p>
      <h1 className="current-condition">{props.curCondition}</h1>
      <img src={props.icon} />
      </article>
    )

}

export default Card;