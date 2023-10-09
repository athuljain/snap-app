import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import "./Shoes.css";

// All Shoe Products

export default function Shoes() {
  const { shoes,  likeProducts,setLikeProducts } = useContext(myContext);
  console.log("Shoes Products", shoes);

  const addToLikedProducts = (product) => {

    
    setLikeProducts([...likeProducts, product]);

  
  };
  console.log("shoes page",likeProducts);



  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    if (searchInput.toLowerCase().includes("adidas")) {
      return "/adidas";
    } else if (searchInput.toLowerCase().includes("nike")) {
      return "/nike";
    }
  }

  const nav=useNavigate()

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={handleSearch()}>Search</Link>
        </div>
      </div>

      <>
        <Link to={"/nike"}>Nike Shoes... </Link>
        <Link to={"/adidas"}>Adidas Shoes...</Link> <br></br>
        <button onClick={()=>{ nav('/likeproducts')}} >Like Items</button>


      </>
      <h1>Shoes Products ...</h1>
      <div className="containerMain">
        {shoes.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
            <button onClick={()=> addToLikedProducts((data))}>Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}
