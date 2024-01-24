import { useContext } from "react";
import { myContext } from "../Context";
import { Link } from "react-router-dom";

export default function Search(){

    const { shoes, searchInput, setSearchInput } =
    useContext(myContext);

    return(
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
        <div>
        {shoes.map((data, index) => (
          <div key={index}>
            <Link to={`/viewproducts/${data.id}`}>
            <img src={data.img} alt="img"></img>
            <h1>{data.name}</h1>
            <h3>Brand : {data.brand}</h3>
          </Link>
           
          </div>
        ))}
        </div>
        </div>
    )
}