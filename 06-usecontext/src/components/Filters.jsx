import React, { useContext } from "react";
import { useState } from "react";
import { FilterContext } from "../context/ContextFilter";

const Filters = () => {
  const { setFilters } = useContext(FilterContext);

  //Sacar el valor de minPrice del contexto
  const [minPrice, setMinPrice] = useState();

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }));
  };

  const handleCategory = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }));
  };

  return (
    <>
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="range"
          id="price"
          name="price"
          min={0}
          max={50}
          value={minPrice}
          onChange={handleMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="" id="category" onChange={handleCategory}>
          <option value="all">Todos</option>
          <option value="Electrodomésticos">Electrodomésticos</option>
          <option value="Hogar">Hogar</option>
          <option value="Limpieza">Limpieza</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
