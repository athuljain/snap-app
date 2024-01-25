import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link } from "react-router-dom";

export default function Search() {
  const { shoes, searchInput, setSearchInput } = useContext(myContext);
  const [filteredShoes, setFilteredShoes] = useState([]);

  const handleSearch = () => {
    // Filter shoes based on searchInput
    const filtered = shoes.filter(
      (shoe) =>
        shoe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        shoe.brand.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredShoes(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {(filteredShoes.length ? filteredShoes : shoes).map((data, index) => (
          <div key={index}>
            <Link to={`/viewproducts/${data.id}`}>
              <img src={data.img} alt="img" />
              <h1>{data.name}</h1>
              <h3>Brand : {data.brand}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
