import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CardCharacter } from "../cardCharacter/CardCharacter";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { nombreCharacter } = useParams();
  console.log(nombreCharacter);

  const buscarCharacter = () => {
    const character = characters.find(
      (character) => character.Nombre === nombreCharacter
    );
    return setCurrentCharacter(character);
  };

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await response.json();
      setCharacters(data.result);
      buscarCharacter();
    };
    getCharacter();
  }, [nombreCharacter]);

  return (
    <div className="App">
      <h1 className="title">Relacionados con {`${nombreCharacter}`}</h1>
      <section className="btn-count"></section>
      <ul className="cardList">
        {characters.map((character) => {
          return (
            <Link to={`/character/${character.Nombre}`} key={character._id}>
              <CardCharacter key={character._id} character={character} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Character;
