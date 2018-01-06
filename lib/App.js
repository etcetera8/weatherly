import React, { Component } from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import MockData from './mock-data';
import './styles/App.css';
import Welcome from './Welcome.js';
import ErrorPage from './ErrorPage.js'

const wData = MockData;
const currData = wData.current_observation;
const currDay = wData.forecast.simpleforecast.forecastday[0];

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            apiData: {},
            currData: {},
            currDataTemps: {},
            currDataWeather: {},
            currIcon: {},
            sevenHour: [],
            tenDay:[],
            response: [],
            error: true
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData(localStorage.city);
    }

    getData(location) {
        fetch(`https://api.wunderground.com/api/88c6470094b23a13/geolookup/conditions/forecast/hourly/forecast10day/q/${location}.json`)
        .then( response => response.json() )
        .then( json => {
            console.log(json)
            this.setState( { apiData: json,
                             currData: json.current_observation,
                             currDataTemp: json.current_observation.temp_f,
                             currDataWeather: json.forecast.txt_forecast.forecastday[0].fcttext,
                             currIcon: json.current_observation.icon_url,
                             response: json.response.results
                         })
        })
    }

    render() {
      if (!localStorage.city) {
        return <Welcome getData = {this.getData} />
      }

      if (this.state.response != undefined && this.) {
        console.log("error response ", this.state.response)
        return <ErrorPage getData = {this.getData} />
      } 
    
      if (this.state.apiData) {
        return(
          <div className='App'>
                <Header 
                    location={this.state.apiData}
                    getData={this.getData} 
                />

                <Current 
                    icon={this.state.apiData}
                    temp={this.state.apiData}
                    condition={this.state.apiData}
                    low={this.state.apiData}
                    high={this.state.apiData}
                    description={this.state.apiData} 
                />
              
               <Cards uData={this.state.apiData} />
          </div>
        )
      } 
    }
}

