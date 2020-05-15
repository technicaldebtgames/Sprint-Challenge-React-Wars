import React from 'react';
import axios from "axios";
import {API_URL, API_KEY, API_DATE_TAG} from "../constants.js"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Build the api url string
  let apiString = `${API_URL}${API_KEY}`;

  if (props.useCustomDate) {
      apiString += `${API_DATE_TAG}${props.customDate}`;
  }
  // done building api string

  // use api string to get data
  axios.get(`${apiString}`)
  .then(result => {
    console.log(result);
  })
  .catch (error => {
    console.log("Error fetching data from API.");
  })
  .finally ( () => {
    console.log("API call has finished.");
  });

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
