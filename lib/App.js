import React, { Component } from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import MockData from './mock-data';
import './App.css';
//example with my api key
//https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/q/39.7,104.3.json
const wData = MockData;
const currData = wData.current_observation;
const currDay = wData.forecast.simpleforecast.forecastday[0];
//console.log(wData);
//
// //var newData;
//     fetch("https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/hourly/forecast10day/q/80218.json")
//         .then(data => data.json())
//         .then(data => newData = data)
//         .then(()=> console.log(newData))
//         .catch(err => console.log("No data found"))

// console.log("hit", newData)

export default class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
      return (
        <div className='App'>
            <Header location={currData.display_location.city}
                    info={wData} />
            <Current icon={currData.icon_url}
                     temp={currData.temperature_string}
                     condition={currData.weather}
                     low={currDay.low.fahrenheit}
                     high={currDay.high.fahrenheit}
                     description={wData.forecast.txt_forecast.forecastday[0].fcttext}
            />
            <Cards uData={wData}/>
        </div>
      )
    }
}

