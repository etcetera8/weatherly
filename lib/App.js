import React from 'react';
import Header from './Header';
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
    </div>

    )
}

export default App;