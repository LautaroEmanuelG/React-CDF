import React from "react";

const SearchCharracters = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState(null);

  const handleChangeTexto = (e) => {
    setTextoBusqueda(e.target.value);
  };

  const handleEnviarBusqueda = () => {
    fetch(
      `https://apisimpsons.fly.dev/api/personajes?limit=1&page=${textoBusqueda}`
    )
      .then((response) => response.json())
      .then((data) => setResultadoBusqueda(data))
      .catch((error) => console.error("Error en la búsqueda:", error));
  };

  return (
    <div className="buscar">
      <input
        className="text"
        type="text"
        value={textoBusqueda}
        onChange={handleChangeTexto}
        placeholder="Ingrese su búsqueda"
      />
      <button className="btn-enviar" onClick={handleEnviarBusqueda}>
        Enviar
      </button>
    </div>
  );
};

export default SearchCharracters;
