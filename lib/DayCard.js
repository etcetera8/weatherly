import React from 'react'
import './styles/DayCard.css'

const DayCard = (props) => {
  return (
      <section className='DayCard'>
        <p>{props.currDay}</p>
        <p>Low: {props.low}</p>
        <p>High: {props.high}</p>
        <img src={props.icon}/>
      </section>
    )
}

export default DayCard;