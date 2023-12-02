import React from 'react'

const Products = ({products}) => {
  return (
    <ul>
        {products.map(product => {
            return(
                <li key={product.id}>
                    <h1>{product.name}</h1>
                    <h2>{product.category}</h2>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                </li>
            )}
        )}
    </ul>
  )
}

export default Products