import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../Context";

export default function ViewProduct() {
  const { id } = useParams();
  const { shoes } = useContext(myContext);

  console.log("ID from params:", id);

  const product = shoes.find((product) => product.id === parseInt(id));

  console.log("viewProduct", product);
  return (
    <div>
      <h1>View Product</h1>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>Brand: {product.brand}</p>
    </div>
  );
}
