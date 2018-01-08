import React from 'react';
import DayCard from './DayCard'
import HourCard from './HourCard';
import './styles/Cards.css';

const Cards = (props) => {
  return (
    <div>  
      <section className="Cards">
      { 
        props.hourData.slice(0, 7).map((val, i) => 
          <HourCard 
            curCondition={props.hourData[i].temp.english} 
            time={props.hourData[i].FCTTIME.civil}
            icon={props.hourData[i].icon} 
          /> 
        )
      }
      </section>

      <section className="Cards">
      {
        props.dayData.slice(0, 10).map((val, i) => 
          <DayCard 
            currDay={props.dayData[i].date.weekday}
            low={props.dayData[i].low.fahrenheit}
            high={props.dayData[i].high.fahrenheit}
            icon={props.dayData[i].icon} 
          /> 
        )
      }
      </section>
    </div> 
  )
}

export default Cards;