import React from 'react';
import Search from './Search';


export default function Welcome(props) {
  return (
    <div>
      <h1> Welcome </h1>
      <Search 
        getData = {props.getData} />
    </div>
    )
}