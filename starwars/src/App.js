import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character.js'
import {CHAR_TAG, EP_TAG, LOC_TAG, API_URL} from "./constants.js"
import './App.css';

const AppContainer = styled.div`

`;

const AppTitle = styled.div`

`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let [characters, setCharacters] = useState([]);

  useEffect(() => {

    // Build the api url string
    let apiString = `${API_URL}${CHAR_TAG}`;
    // done building api string
  
    // use api string to get data
    axios.get(`${apiString}`)
    .then(result => {
      console.log(result);
      setCharacters(result.data.results);
      console.log(characters);
    })
    .catch (error => {
      console.log("Error fetching data from API.");
    })
    .finally ( () => {
      console.log("API call has finished.");
    });

  });

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(characterData => {
        return <Character key={characterData.id} character={characterData}/>
        console.log("passing these as key and character to props:");
        console.log(characterData.id);
        console.log(characterData);
      })}
    </div>
  )
}

export default App;
