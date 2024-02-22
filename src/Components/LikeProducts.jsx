import { useContext } from "react";
import { myContext } from "../Context";
import { AiFillDislike } from 'react-icons/ai';

export default function LikeProducts() {
  const { likeProducts, setLikeProducts } = useContext(myContext);
  console.log("like product page", likeProducts);

  function UnlikeBtn(product) {
    setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
  }

  function increaseQty(product) {
    const updatedProducts = likeProducts.map((shoe) => {
      if (shoe === product) {
        return {
          ...shoe,
          qty: shoe.qty + 1,
          price: shoe.price * 2 // Double the price when increasing quantity
        };
      }
      return shoe;
    });
    setLikeProducts(updatedProducts);
  }

  function decreaseQty(product) {
    const updatedProducts = likeProducts.map((shoe) => {
      if (shoe === product && shoe.qty > 0) {
        return {
          ...shoe,
          qty: shoe.qty - 1,
          price: shoe.price / 2 // Halve the price when decreasing quantity
        };
      }
      return shoe;
    });
    setLikeProducts(updatedProducts);
  }

  return (
    <div>
      <h1>Like Products.....</h1>
      <div>
        {likeProducts.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt="img" />
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
            <h3>Price: {data.price}</h3>
            <h3>Qty: {data.qty}</h3>
            <button onClick={() => increaseQty(data)}>+</button>
            <button onClick={() => decreaseQty(data)} disabled={data.qty === 0}>-</button> {/* Disable when quantity is 0 */}
            <button onClick={() => UnlikeBtn(data)}><AiFillDislike/></button>
          </div>
        ))}
      </div>
    </div>
  );
}
