import React from 'react';
import './styles/Current.css';

const Current = (props) => {
  return(
    <div className='container'>
    {
      props.temp.current_observation &&

      <main className='main-weather'>
        <img className="icon" src={`../lib/weather-underground-icons/dist/icons/white/svg/${props.icon.current_observation.icon}.svg`} />
        <p className='curr-temp'>{props.temp.current_observation.temp_f}°F</p>
        <p className='curr-condition'>{props.temp.current_observation.weather}</p>

        <div className="bottom-info">
          <div className="left">
            <p className="low">Low: {props.low.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F</p>
            <p className="high">High: {props.high.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F</p>
          </div>
          <div className="right">
            <p className="condition-description">{props.description.forecast.txt_forecast.forecastday[0].fcttext}</p>
          </div>
        </div>
      </main>
     } 
    </div>


    )
}

export default Current;