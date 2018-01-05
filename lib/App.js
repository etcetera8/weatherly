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
            apiData: {}
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData(localStorage.city);
    }

    getData(location) {
        fetch(`https://api.wunderground.com/api/88c6470094b23a13/conditions/forecast/hourly/forecast10day/q/${location}.json`)
        .then( response => response.json() )
        .then( json => {
            this.setState( { apiData: json })
                // console.log(this.state.apiData.current_observation.display_location.city);
        })

    }

    render() {
      // if (!localStorage.city) {
      //   <Welcome getData = {this.getData}/>
      // }
        return(
    
          <div className='App'>
              {
                this.state.apiData &&
                //console.log(this.state.apiData)
              <Header location={this.state.apiData}
                      getData={this.getData} 
              />
              }
              {this.state.apiData && 
                <Current icon={currData.icon_url}
                temp={this.state.apiData}
                condition={currData.weather}
                low={currDay.low.fahrenheit}
                high={currDay.high.fahrenheit}
                description={wData.forecast.txt_forecast.forecastday[0].fcttext}
                item={this.state.apiData}
               />
              }
               <Cards uData={wData}/>
            
          </div>
        )
      
    }
}

