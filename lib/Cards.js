import React from 'react';
import DayCard from './DayCard'
import Card from './Card';
import './Cards.css'



const Cards = (props) => {
   let days = 10;
   let tenDayForecast = props.uData.forecast.simpleforecast.forecastday.slice(0, days).map((val, i) => {
      return <DayCard currDay={props.uData.forecast.simpleforecast.forecastday[i].date.weekday}
                      low={props.uData.forecast.simpleforecast.forecastday[i].low.fahrenheit}
                      high={props.uData.forecast.simpleforecast.forecastday[i].high.fahrenheit}
                      icon={props.uData.forecast.simpleforecast.forecastday[i].icon_url}
                      /> 
   })
   let hours = 7;
   let forecastCards = props.uData.hourly_forecast.slice(0, hours).map((val, i) => {
      return <Card curCondition={props.uData.hourly_forecast[i].temp.english} 
                   time={props.uData.hourly_forecast[i].FCTTIME.civil}
                   icon={props.uData.hourly_forecast[i].icon_url} 
              /> 
    })
  return (
   <div>
      <section className="Cards">
        {forecastCards}
      </section>
      <section className="ten-day">
        {tenDayForecast}
      </section>
   </div>
    )
}

export default Cards;