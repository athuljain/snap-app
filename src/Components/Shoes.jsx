//import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

import "./Shoes.css";
import { useContext } from "react";

// All Shoe Products

export default function Shoes() {
  const { shoes, likeProducts, setLikeProducts, searchInput, setSearchInput } =
    useContext(myContext);
  console.log("Shoes Products", shoes);

  const addToLikedProducts = (product) => {
    if (likeProducts.includes(product)) {
      setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
    } else {
      setLikeProducts([...likeProducts, product]);
    }
  };
  console.log("shoes page", likeProducts);

  function handleSearch() {
    if (searchInput.toLowerCase().includes("adidas")) {
      return "/adidas";
    } else if (searchInput.toLowerCase().includes("nike")) {
      return "/nike";
    }
  }

  // const PathtoMap = {
  //   adi: "/adidas",
  //   ni: "/nike",
  // };

  // function handleSearch() {
  //   const lowercaseInput = searchInput.toLowerCase();

  //   // if(PathtoMap.hasOwnProperty(lowercaseInput)){
  //   //   return PathtoMap[lowercaseInput]
  //   // }
  //   // return "/not-found"

  //   for (const keyword in PathtoMap) {
  //     if (lowercaseInput.startsWith(keyword)) {
  //       return PathtoMap[keyword];
  //     }
  //   }
  // }

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
        <Link to={"/search"}>Search Page</Link>
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
            <Link to={`/viewproducts/${data.id}`}>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
          </Link>
            <button onClick={() => addToLikedProducts(data)}>
              {likeProducts.includes(data) ? <AiTwotoneDislike />  : <AiTwotoneLike /> }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
