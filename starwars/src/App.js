import React, { useState } from 'react';
import axios from 'axios';
import Character from './components/Character.js'
import {CHAR_TAG, API_URL} from "./constants.js"
import './App.css';

// create App component
const App = () => {

  // create state vars
  let [characters, setCharacters] = useState([]);

  // prevents an infinite loop that was happening
  if (characters.length === 0){

    // Build the api url string
    let apiString = `${API_URL}${CHAR_TAG}`;

    // use api string to get data and insert into state vars when results from call
    axios.get(`${apiString}`)
    .then(result => {
        setCharacters(result.data.results);
    })
    .catch (error => {
        console.log("Error fetching data from API.");
    });
  }

  // return elements
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(characterData => {
        return <Character key={characterData.id} character={characterData}/>
      })}
    </div>
  )
}

export default App;
