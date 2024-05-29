import React from 'react';
import { useParams } from 'react-router-dom';
import { AdidasData, NikeProducts, PumaProducts } from './ShoesAdidas';

const getProductData = (brand) => {
  switch (brand) {
    case 'Adidas':
      return AdidasData;
    case 'Nike':
      return NikeProducts;
    case 'Puma':
      return PumaProducts;
    default:
      return [];
  }
};

const ProductEditParams = () => {
  const { brand, id } = useParams();
  const productData = getProductData(brand);
  const product = productData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Edit {product.name}</h1>
      <img src={product.img} alt={product.name} width="200" />
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      {/* Add your edit form here */}
    </div>
  );
};

export default ProductEditParams;
