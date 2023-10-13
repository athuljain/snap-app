import { useContext } from "react";
import { myContext } from "../Context";

export default function Nike() {
  const { shoes ,likeProducts, setLikeProducts,} = useContext(myContext);

  const NikeShoes = shoes.filter((product) => product.brand === "Nike");
  console.log("Nike Products...", NikeShoes);


  const addToLikedProducts = (product) => {
    if (likeProducts.includes(product)) {
      setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
    } else {
      setLikeProducts([...likeProducts, product]);
    }
  };

  return (
    <div>
      <div className="Container">
        <h1>Nike Shoes...</h1>
        <div className="container">
          {NikeShoes.map((data) => (
            <div>
              <img src={data.img} alt="img"></img>
              <h1>{data.name}</h1>
              <h3>Brand : {data.brand}</h3>
              <button onClick={() => addToLikedProducts(data)}>
              {likeProducts.includes(data) ? "Unlike" : "Like"}
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
