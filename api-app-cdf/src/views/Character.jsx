import { Link } from 'react-router-dom';
import './App.css';
import React ,{ useEffect, useState} from "react"


const Character = () => {
  return (
    <>
        <Link to={`/character/${character._id}`}></Link>
        <article className="card" key={character._id}>
            <p className='numT'>{character._id[0]}</p>
            <h2 className="charList__nombre">{character.Nombre}</h2>
            <img className="charList__img" src={character.Imagen} alt={character.Nombre} />
            <h3 className="charList__ocupacion">{character.Ocupacion}</h3>
            <p className='numB'>{character._id[0]}</p>
        </article>
    </>
  )
}

export default Character