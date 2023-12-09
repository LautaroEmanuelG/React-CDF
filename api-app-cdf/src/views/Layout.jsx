import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import SearchCharracters from "../components/SearchCharacter";

const Layout = () => {
  const [randomKey, setRandomKey] = useState(0);

  const handleRandomButtonClick = () => {
    // Incrementando la clave para forzar el re-renderizado
    setRandomKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <header>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <button>Home</button>
        </Link>
        <SearchCharracters />
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/Personaje-al-azar/"
        >
          <button onClick={handleRandomButtonClick}>Personaje al azar</button>
        </Link>
      </header>
      <main key={randomKey}>
        {/* Usando key para forzar el re-renderizado */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
