import React from 'react'
import './styles/Current.css'

const Current = (props) => {
  return(
    <div className='container'>
      <main className='main-weather'>
        <img className="icon" src={props.icon} />
        <p className='curr-temp'>{props.temp}</p>
        <p className='curr-condition'>{props.condition}</p>

        <div className="bottom-info">
          <div className="left">
            <p className="low">Low: {props.low}</p>
            <p className="high">High: {props.high}</p>
          </div>
          <div className="right">
            <p className="condition-description">{props.description}</p>
            <p> "this is it" + {props.item.title} </p>
          </div>
        </div>
      </main>
    </div>


    )
}

export default Current;