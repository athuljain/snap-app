export default function SpecificProduct({ product }) {
    console.log(product);
    return (
      <div>
        <h1>Specific Product</h1>
        <img src={product.img} alt="img" />
        <h1>{product.name}</h1>
        <h3>Brand: {product.brand}</h3>
        
      </div>
    );
    }  