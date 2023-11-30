import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { nombreCharacter } = useParams();

  useEffect(() => {
    const buscarCharacter = async () => {

      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await response.json();
      const found = await data.result.find(
        (character) => character.Nombre.trim() === nombreCharacter.trim()
      );
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
