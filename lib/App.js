import React, { Component } from 'react';
import Header from './Header';
import Current from './Current';
import Cards from './Cards';
import Footer from './Footer';
import Welcome from './Welcome.js';
import ErrorPage from './ErrorPage.js';
import api from './apikey.js';
import './styles/App.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            apiData: {},
            response: [],
            error: false,
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

          let {
            icon,
            weather,
            temp_f
          } = json.current_observation;

          let {
            low,
            high
          } = json.forecast.simpleforecast.forecastday[0];
          
          this.setState({  apiData: json,
                           icon: icon,
                           temp_f: temp_f,
                           condition: weather,
                           hiLow: {low: low.fahrenheit, high: high.fahrenheit},
                           currDateWeather: json.forecast.txt_forecast.forecastday[0].fcttext,
                           response: json.response.results,
                           error: false,
                       })
        })
        .catch(() => {
          if (localStorage.city) {
            this.setState({error:true});
          }
        })
    }
    render() {
      if (!localStorage.getItem('city')) {
        return <Welcome getData = {this.getData} />
      }

      if (this.state.response != undefined || this.state.error) {
        return <ErrorPage getData = {this.getData} />
      } 
    
      if (this.state.apiData) {
        return(
          <div className='App'>
          
                <Header 
                    location={this.state.apiData.current_observation.display_location.full}
                    getData={this.getData} 
                />

                <Current 
                    icon={this.state.icon}
                    temp={this.state.temp_f}
                    condition={this.state.condition}
                    low={this.state.hiLow.low}
                    high={this.state.hiLow.high}
                    description={this.state.apiData.forecast.txt_forecast.forecastday[0].fcttext} 
                />            
               <Cards 
                    hourData={this.state.apiData.hourly_forecast}
                    dayData={this.state.apiData.forecast.simpleforecast.forecastday}
                />
                <Footer />
                <div className = 'blur'> </div>
          </div>
        )
      } 
    }
}