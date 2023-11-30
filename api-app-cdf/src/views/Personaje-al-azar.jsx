import React, { useState } from "react";

const Personaje = () => {
  const [character, setCharacter] = useState([]);
  const [azar, setAzar] = useState(0);

  let numAzar = () => {
    setAzar = Math.floor(Math.random() * (10 - 1) + 1);
  };

  useEffect(() => {
    numAzar();
    const getCharacter = async () => {
      const data = await fetch(
        `https://apisimpsons.fly.dev/api/personajes?limit=1&page=${azar}`
      );
      const character = await data.json();
      setCharacter(character.docs[0]);
    };
    getCharacter();
  }, [azar]);

  return (
    <>
      <button onClick={numAzar}>RULETA</button>
      <article className="card cardCharacter" key={character._id}>
        <p className="numT">{character._id[0]}</p>
        <h2 className="charList__nombre">{character.Nombre}</h2>
        <img
          className="charList__img"
          src={character.Imagen}
          alt={character.Nombre}
        />
        <h3 className="charList__ocupacion">{character.Ocupacion}</h3>
        <p className="numB">{character._id[0]}</p>
      </article>
      <section>{character.Historia}</section>
    </>
  );
};

export default Personaje;
