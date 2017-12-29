import React from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import MockData from './mock-data';
import './App.css'
//example with my api key
//https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/q/39.7,104.3.json
const wData = MockData;
console.log(wData);

const App = () => {
  return (
    <div className='App'>
    <Header location={wData.current_observation.display_location.city}
            info={wData} />
    <Current icon={wData.current_observation.icon_url}
             temp={wData.temperature_string}
             condition={wData.weather}
             low={wData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
             high={wData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
             description={wData.forecast.txt_forecast.forecastday[0].fcttext}

      />
    <Cards uData={wData}/>
    </div>

    )
}

export default App;