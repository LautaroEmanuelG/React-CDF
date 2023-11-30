import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./character.css";

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
    <div className="presentacion">
      {currentCharacter && (
        <>
          <div className="contenedor">
            <img
              className="img"
              src={currentCharacter.Imagen}
              alt={currentCharacter.Nombre}
            />
            <div className="titulos">
              <h1 className="nombre">{currentCharacter.Nombre}</h1>
              <p className="ocupacion">{currentCharacter.Ocupacion}</p>
            </div>
          </div>
          <div className="contenedor-lore">
            <p className="historia">
              <strong>Historia:</strong> {currentCharacter.Historia}
            </p>
            <span className="datos">
              <p className="genero">
                <strong>{currentCharacter.Genero}</strong>
              </p>
              <p className="estado">
                <strong>{currentCharacter.Estado}</strong>
              </p>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
