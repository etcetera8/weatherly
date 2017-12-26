import React from 'react';
import Card from './Card';
import './Cards.css'



const Cards = (props) => {
   let hours = 7;
    let forecastCards = props.uData.hourly_forecast.slice(0, hours).map((val, i) => {
      return <Card curCondition={props.uData.hourly_forecast[i].condition} />
    })
  return (
   
      <section className="Cards">
        {forecastCards}
      </section>
    )
}

export default Cards;