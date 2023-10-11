import { useContext } from "react";
import { myContext } from "../Context";

export default function LikeProducts() {
  const { likeProducts } = useContext(myContext);
  console.log("like product page", likeProducts);
  return (
    <div>
      <h1>Like Products.....</h1>
      <div>
        {likeProducts.map((data) => (
          <div>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
