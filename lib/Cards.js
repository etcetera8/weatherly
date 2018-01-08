import React from 'react';
import DayCard from './DayCard'
import HourCard from './HourCard';
import './styles/Cards.css';

const Cards = (props) => {
  return (
      <div>  
        <section className="Cards">
        { 
          props.uData.hourly_forecast.slice(0, 7).map((val, i) => {
            return (
              <HourCard 
                curCondition={props.uData.hourly_forecast[i].temp.english} 
                time={props.uData.hourly_forecast[i].FCTTIME.civil}
                icon={props.uData.hourly_forecast[i].icon_url} 
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
                icon={props.uData.forecast.simpleforecast.forecastday[i].icon_url} 
              /> 
            )
          })
        }
        </section>
      </div> 
  )
}

export default Cards;