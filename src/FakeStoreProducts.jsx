import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FakeStoreProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" height="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FakeStoreProducts;
