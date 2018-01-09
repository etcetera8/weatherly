import React from 'react'
import './styles/DayCard.css'

const DayCard = (props) => {
  return (
      <section className='DayCard'>
        <p className = 'day'>{props.currDay}</p>
        <p>Low: {props.low}°F</p>
        <p>High: {props.high}°F</p>
        <img className = "daycard-icon" src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon}.svg`}/>
      </section>
    )
}

export default DayCard;