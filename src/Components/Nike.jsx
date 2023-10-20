import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link } from "react-router-dom";
import SpecificProduct from "./SpecificProduct";

export default function Nike() {
  const { shoes, likeProducts, setLikeProducts, searchInput, setSearchInput } =
    useContext(myContext);

  const NikeShoes = shoes.filter((product) => product.brand === "Nike");
  console.log("Nike Products...", NikeShoes);

  const addToLikedProducts = (product) => {
    if (likeProducts.includes(product)) {
      setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
    } else {
      setLikeProducts([...likeProducts, product]);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSearch() {
    const searchedProduct = NikeShoes.find(
      (product) => product.name.toLowerCase() === searchInput.toLowerCase()
    );

    if (searchedProduct) {
      //console.log("Found product:", searchedProduct);
      setSelectedProduct(searchedProduct);
    } else {
      console.log("Product not found");
    }
  }
  if (selectedProduct) {
    return (
      <div>
        <SpecificProduct product={selectedProduct} />
      </div>
    );
  }

  return (
    <div>
      <div className="Container">
        <h1>Nike Shoes...</h1>

        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={handleSearch()}>Search</Link>
        </div>

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
