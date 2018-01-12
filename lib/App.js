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
      loading: false
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState( {loading: false }), 1500);
    this.getData(localStorage.city);
  }

  getData(location, loadStatus) {
    let root = `https://api.wunderground.com/api/${api.key}`;
    let conditions = `geolookup/conditions/forecast`;
    let forecast = `hourly/forecast10day/q/${location}.json`;

    fetch(`${root}/${conditions}/${forecast}`)
    .then(this.setState({loading: true}))
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
      
      this.setState({ 
        apiData: json,
        icon,
        temp_f,
        condition: weather,
        hiLow: {low: low.fahrenheit, high: high.fahrenheit},
        currDateWeather: json.forecast.txt_forecast.forecastday[0].fcttext,
        response: json.response.results,
        error: false,
        loading:false
      });
    })
    .catch(() => {
      if (localStorage.city) {
        this.setState({error: true});
      }
    });
  }
  render() {
    const { loading, response, error, apiData } = this.state;
    
    if (!localStorage.getItem('city')) {
      return <Welcome getData = {this.getData} />;
    }

    if (response !== undefined || error) {
      return <ErrorPage getData = {this.getData} />;
    } 
  
    if (apiData) {
      
      return (
        <div className='App'>
          <Header 
            location={apiData.current_observation.display_location.full}
            getData={this.getData}
            loadStatus={this.state.loading} 
          />
          <Current 
            icon={this.state.icon}
            temp={this.state.temp_f}
            condition={this.state.condition}
            low={this.state.hiLow.low}
            high={this.state.hiLow.high}
            description={apiData.forecast.txt_forecast.forecastday[0].fcttext} 
          />            
         <Cards 
            hourData={apiData.hourly_forecast}
            dayData={apiData.forecast.simpleforecast.forecastday}
          />
          <Footer />
          <div className = 'blur'> </div>
        </div>
      );
    } 
  }
}