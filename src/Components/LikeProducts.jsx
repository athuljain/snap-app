import { useContext } from "react";
import { myContext } from "../Context";
import {AiFillDislike} from 'react-icons/ai'

export default function LikeProducts() {
  const { likeProducts,setLikeProducts } = useContext(myContext);
  console.log("like product page", likeProducts);

  function UnlikeBtn(product){
     setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
  }

  
  return (
    <div>
      <h1>Like Products.....</h1>
      <div>
        {likeProducts.map((data) => (
          <div>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
            <h3>Price:{data.price}</h3>
            <button onClick={()=>UnlikeBtn(data)} ><AiFillDislike/></button>
          </div>
        ))}
      </div>
    </div>
  );
}
