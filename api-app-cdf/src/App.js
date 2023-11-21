import React, { useState, useEffect } from 'react';
import './App.css';
import { CardCharacter } from './cardCharacter/CardCharacter';

function App() {
  const [characters, setcharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://apisimpsons.fly.dev/api/personajes`)
      const data = await response.json()

      setcharacters(data.docs)
    }

    fetchData()

  }, [])

  console.log(characters);

  return (
    <div className="App">
      <h1>Los simpson</h1>
      <ul className="cardList">
        {characters.map((character) => {
          console.log(character);
          return (
            <CardCharacter key={character._id} character={character} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
