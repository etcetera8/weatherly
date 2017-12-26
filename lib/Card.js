import React from 'react';
import './Card.css'

const Card = (props) => {
  return(
    <article className="display-card">
      <p>and I'm a weather card</p>
      <h1 className="current-temp">{props.temp.current_observation.temp_f}</h1>
      </article>
    )

}

export default Card;