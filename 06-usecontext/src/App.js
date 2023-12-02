import React from "react";
import { products } from './data/productos'
import Products from './components/Products'
import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filtersProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' ||
          product.category === filters.category))
    })
  }

  return (
    <>
      <Header setFilters={setFilters}/>
      <Products products={filtersProducts(products)} />
    </>
  );
}

export default App;
