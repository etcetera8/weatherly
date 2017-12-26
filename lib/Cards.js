import React from 'react';
import Card from './Card';
import MockData from './mock-data';
import './Cards.css'

const wData = MockData;


const Cards = (props) => {
  return (
      <section className="Cards">

      <Card temp={props.uData}/>
      <Card temp={props.uData}/>
      </section>

    )
}

export default Cards;