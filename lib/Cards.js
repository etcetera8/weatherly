import React from 'react';
import DayCard from './DayCard'
import HourCard from './HourCard';
import './styles/Cards.css';

const Cards = (props) => {
  return (
   <div>
      {  
        props.uData.hourly_forecast &&
        <div>  
          <section className="Cards">
          { 
            props.uData.hourly_forecast.slice(0, 7).map((val, i) => {
              return (
                <HourCard 
                  curCondition={props.uData.hourly_forecast[i].temp.english} 
                  time={props.uData.hourly_forecast[i].FCTTIME.civil}
                  icon={`../lib/weather-underground-icons/dist/icons/white/svg/${props.uData.hourly_forecast[i].icon}.svg`} 
                /> 
              )
            })
          }
          </section>

          <section className="Cards">
          {
            props.uData.forecast.simpleforecast.forecastday.slice(0, 10).map((val, i) => {
              return (
                <DayCard 
                  currDay={props.uData.forecast.simpleforecast.forecastday[i].date.weekday}
                  low={props.uData.forecast.simpleforecast.forecastday[i].low.fahrenheit}
                  high={props.uData.forecast.simpleforecast.forecastday[i].high.fahrenheit}
                  icon={`../lib/weather-underground-icons/dist/icons/white/svg/${props.uData.forecast.simpleforecast.forecastday[i].icon}.svg`} 
                /> 
              )
            })
          }
          </section>
        </div> 
      }
   </div>
  )
}

export default Cards;