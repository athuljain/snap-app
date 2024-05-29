import React from 'react';
import { Link } from 'react-router-dom';
import { AdidasData, NikeProducts, PumaProducts } from './ShoesAdidas';

const ShoesParams = () => {
  const allProducts = [
    ...AdidasData.map(product => ({ ...product, brand: 'Adidas' })),
    ...NikeProducts.map(product => ({ ...product, brand: 'Nike' })),
    ...PumaProducts.map(product => ({ ...product, brand: 'Puma' })),
  ];

  return (
    <div>
      {allProducts.map(product => (
        <div key={`${product.brand}-${product.id}`}>
          <img src={product.img} alt={product.name} width="100" />
          <h3>{product.name}</h3>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <Link to={`/shoeEdit/${product.brand}/${product.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShoesParams;
