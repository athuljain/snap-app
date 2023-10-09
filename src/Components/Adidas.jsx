import { useContext } from "react";
import { myContext } from "../Context";

export default function Adidas (){
    const { shoes } = useContext(myContext);

    const AdidasProduct = shoes.filter((product) => product.brand === "Adidas");
    console.log("Adidas Product", AdidasProduct);
  
    return(
        <div>
 <div className="Container">
      <h1>Adidas Shoes...</h1>
      <div className="container">
        {AdidasProduct.map((data, index) => (
          <div>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
            <button>Like</button>
          </div>
        ))}
      </div>
    </div>
        </div>
    )
}