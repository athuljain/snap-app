//import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import "./Shoes.css";
import { useContext } from "react";

// All Shoe Products

export default function Shoes() {
  const { shoes, likeProducts, setLikeProducts, searchInput, setSearchInput ,likeCond,setLikeCond} =
    useContext(myContext);
  console.log("Shoes Products", shoes);

  const addToLikedProducts = (product) => {
    if(product && (likeCond === false)){
      setLikeProducts([...likeProducts, product]);
      setLikeCond(true)
    } else {
      setLikeCond(false)
    }
    
  };
  console.log("shoes page", likeProducts);
  

  // function handleSearch() {
  //   if (searchInput.toLowerCase().includes("adidas")) {
  //     return "/adidas";
  //   } else if (searchInput.toLowerCase().includes("nike")) {
  //     return "/nike";
  //   }
  // }
const PathtoMap = {
  adidas : "/adidas",
  nike : '/nike'
}

  function handleSearch(){
    const lowercaseInput = searchInput.toLowerCase()
    
    // if(PathtoMap.hasOwnProperty(lowercaseInput)){
    //   return PathtoMap[lowercaseInput]
    // }
    // return "/not-found"

    for (const keyword in PathtoMap){
      if(lowercaseInput.startsWith(keyword)){
        return PathtoMap[keyword]
      }
    }

  }





  const nav = useNavigate();

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
        <button
          onClick={() => {
            nav("/likeproducts");
          }}
        >
          Like Items
        </button>
      </>
      <h1>Shoes Products ...</h1>
      <div className="containerMain">
        {shoes.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
            <button onClick={() => addToLikedProducts(data)}>{likeCond ? "Unlike" : "Like"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
