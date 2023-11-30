import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  //const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { nombreCharacter } = useParams();

  // useEffect(() => {
  //   const getCharacters = async () => {
  //     const response = await fetch(
  //       `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
  //     );
  //     const data = await response.json();

  //     console.log("Data reult:", data.result);
  //     setCharacters(data.result);
  //   };
  //   getCharacters();
  // }, [nombreCharacter]);

  // useEffect(() => {
  //   const buscarCharacter = () => {
  //     console.log("Characters buscando:", characters);
  //     const found = characters.find(
  //       (character) => character.Nombre === nombreCharacter
  //     );
  //     setCurrentCharacter(found);
  //   };
  //   buscarCharacter();
  // }, [characters]);

  useEffect(() => {
    const buscarCharacter = async () => {
      console.log("Characters buscando:", nombreCharacter,"AAA");
      
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await response.json();
      console.log("Comparaacion: ",data.result, "=", nombreCharacter)
      const found = await data.result.find(
        (character) => character.Nombre.trim() === nombreCharacter.trim()
      );
      console.log("Found:", found);
      setCurrentCharacter(found);
    };
    buscarCharacter();
  }, [nombreCharacter]);

  return (
    <div className="Presentacion">
      {currentCharacter && (
        <>
          <h1>{currentCharacter.Nombre}</h1>
          <img src={currentCharacter.Imagen} alt={currentCharacter.Nombre} />
          <p>{currentCharacter.Ocupacion}</p>
          <p>Un poco de su historia: {currentCharacter.Historia}</p>
          <p>Género: {currentCharacter.Genero}</p>
          <p>Actualmente se encuentra: {currentCharacter.Estado}</p>
        </>
      )}
    </div>
  );
};

export default Character;
