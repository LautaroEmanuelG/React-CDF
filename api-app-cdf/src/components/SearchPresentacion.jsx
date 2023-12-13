import React from 'react';
import './App.css';
import { CardCharacter } from './cardCharacter/CardCharacter';
import { Link } from 'react-router-dom';

function SearchPresentacion(characters) {

  return (
    <div className="App">
      <h1 className="title">{characters.Nombre}</h1>
      <ul className="cardList">
        {characters.map((character) => {
          return (
            <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/character/${character.Nombre}`} key={character._id}>
              <CardCharacter key={character._id} character={character} />
            </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default SearchPresentacion;
