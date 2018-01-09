import React from 'react';
import DayCard from './DayCard';
import HourCard from './HourCard';
import './styles/Cards.css';
import PropTypes from 'prop-types';

const Cards = (props) => {
  return (
    <div>  
      <h3> HOURLY FORECAST </h3>
      <section className="Cards">
      { 
        props.hourData.slice(0, 7).map((hour) => 
          <HourCard 
            key={hour.FCTTIME.epoch}
            curCondition={hour.temp.english} 
            time={hour.FCTTIME.civil}
            icon={hour.icon} 
          /> 
        )
      }
      </section>

      <h3> DAILY FORECAST </h3>
      <section className="Cards">
      {
        props.dayData.slice(0, 10).map((day, i) => 
          <DayCard
            key={i}
            currDay={day.date.weekday}
            low={day.low.fahrenheit}
            high={day.high.fahrenheit}
            icon={day.icon} 
          /> 
        )
      }
      </section>
    </div> 
  );
};

Cards.propTypes = {
  hourData: PropTypes.array,
  dayData: PropTypes.array,
  ['hourData.slice']: PropTypes.func
};
export default Cards;