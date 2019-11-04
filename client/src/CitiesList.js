import React from 'react'
 
const CitiesList = ({cities}) =>
  cities.map(city => <li key={city}>{city}</li>)
 
export default CitiesList