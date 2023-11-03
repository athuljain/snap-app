import { useContext, } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";


export default function Nike() {
  const { shoes, likeProducts, setLikeProducts, searchInput, setSearchInput, setSelectedProduct } =
    useContext(myContext);

    const nav=useNavigate()

  const NikeShoes = shoes.filter((product) => product.brand === "Nike");
  console.log("Nike Products...", NikeShoes);

  const addToLikedProducts = (product) => {
    if (likeProducts.includes(product)) {
      setLikeProducts(likeProducts.filter((shoe) => shoe !== product));
    } else {
      setLikeProducts([...likeProducts, product]);
    }
  };

  

  function handleSearch() {
    const searchedProduct = NikeShoes.find(
      (product) => product.name.toLowerCase() === searchInput.toLowerCase()
    );

    if (searchedProduct) {
      //console.log("Found product:", searchedProduct);
      setSelectedProduct(searchedProduct);
      nav('/specificproduct')
    } else {
      console.log("Product not found");
    }
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
              <Link to={`/viewProducts/${data.id}`}>
              <img src={data.img} alt="img"></img>
              <h1>{data.name}</h1>
              <h3>Brand : {data.brand}</h3>
              </Link>
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
