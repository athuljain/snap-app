import { useContext } from "react";
import { myContext } from "../Context";
import { AiFillDislike } from 'react-icons/ai';

export default function LikeProducts() {
  const { likeProducts, setLikeProducts } = useContext(myContext);
  console.log("like product page", likeProducts);

  function increaseQty(product) {
    const updatedProducts = likeProducts.map((item) => {
      if (item === product) {
        const updatedQty = item.qty + 1;
        const updatedPrice = item.price * updatedQty; // Calculate price based on initial price and updated quantity
        return { ...item, qty: updatedQty, price: updatedPrice };
      }
      return item;
    });
    setLikeProducts(updatedProducts);
  }

  function decreaseQty(product) {
    const updatedProducts = likeProducts.map((item) => {
      if (item === product && item.qty > 0) {
        const updatedQty = item.qty - 1;
        const updatedPrice = item.price * updatedQty; // Calculate price based on initial price and updated quantity
        return { ...item, qty: updatedQty, price: updatedPrice };
      }
      return item;
    });
    setLikeProducts(updatedProducts);
  }

  function UnlikeBtn(product) {
    setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
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
