import React, { Component } from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import './styles/App.css';
import Welcome from './Welcome.js';
import ErrorPage from './ErrorPage.js'
import api from './apikey.js'

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
            error: false
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData(localStorage.city);
    }

    getData(location) {
        fetch(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/forecast/hourly/forecast10day/q/${location}.json`)
        .then( response => response.json() )
        .then( json => {
          this.setState({  apiData: json,
                           currData: json.current_observation,
                           currDataTemp: json.current_observation.temp_f,
                           currDataWeather: json.forecast.txt_forecast.forecastday[0].fcttext,
                           currIcon: json.current_observation.icon_url,
                           response: json.response.results,
                           error: false
                       })
        })
        .catch(() => {
          if (localStorage.city) {
            this.setState({error:true});
          }
        })
    }

    render() {
      if (!localStorage.city) {
        return <Welcome getData = {this.getData} />
      }

      if (this.state.response != undefined || this.state.error) {
        console.log("error response ", this.state.response, this.state.error)
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

