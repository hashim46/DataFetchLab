import { useEffect, useState } from 'react';
import './App.css';
import { getAllStarShips } from './services/sw-api'

function App() {

  let url = "https://swapi.dev/api/starships"

  let [starShip, setStarShip]= useState([])

  useEffect(()=> {fetchHandle()} , [])

//let starShipName = starShip.map((obj, index)=> <p key = {index} >{obj.name}</p>)

async function fetchHandle(){
  let data = await getAllStarShips(url)
  let starShipName = data.results.map((item, index)=> <li className = "cards" key = {index} >{item.name}</li>)
  setStarShip(starShipName)
}

console.log(starShip)

  return (
    <div className="App">
      <ul className="ul">
      {starShip}
      </ul>
    </div>
  );

  }

export default App;


