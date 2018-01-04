import React, { Component } from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import MockData from './mock-data';
import './styles/App.css';
import Welcome from './Welcome.js';

const wData = MockData;
const currData = wData.current_observation;
const currDay = wData.forecast.simpleforecast.forecastday[0];


// api key ("https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/hourly/forecast10day/q/80218.json")


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            apiData: []
        };
    }

    componentDidMount() {
        this.getData(localStorage.city);
    }

    getData(location) {
        fetch(`https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/hourly/forecast10day/q/${location}.json`)
        .then( response => response.json() )
        .then( json => {
            this.setState( { apiData: json.response })
                console.log(json);
        })

    }

    render() {
      if (!localStorage.city) {
        return <Welcome getData = {this.getData}/>
      } 

      else {

      return (
        <div className='App'>
            <Header location={currData.display_location.city} 
                    getData={this.getData}
            />
            <Current icon={currData.icon_url}
                     temp={currData.temperature_string}
                     condition={currData.weather}
                     low={currDay.low.fahrenheit}
                     high={currDay.high.fahrenheit}
                     description={wData.forecast.txt_forecast.forecastday[0].fcttext}
                     item={this.state.apiData}
            />
            <Cards uData={wData}/>
        </div>
      )}
    }
}

