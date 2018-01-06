import React from 'react';
import Search from './Search.js'


const ErrorPage = (props) => {

return (
  <div>
    <h3>Location Error</h3>
    <Search getData={props.getData} />
  </div>
  )
}

export default ErrorPage;