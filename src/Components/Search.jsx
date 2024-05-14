// import { useContext, useState } from "react";
// import { myContext } from "../Context";
// import { Link } from "react-router-dom";

// export default function Search() {
//   const { shoes, searchInput, setSearchInput } = useContext(myContext);
//   const [filteredShoes, setFilteredShoes] = useState([]);

//   const handleSearch = () => {
//     // Filter shoes based on searchInput
//     const filtered = shoes.filter(
//       (shoe) =>
//         shoe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
//         shoe.brand.toLowerCase().includes(searchInput.toLowerCase())
//     );
//     setFilteredShoes(filtered);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         {(filteredShoes.length ? filteredShoes : shoes).map((data, index) => (
//           <div key={index}>
//             <Link to={`/viewproducts/${data.id}`}>
//               <img src={data.img} alt="img" />
//               <h1>{data.name}</h1>
//               <h3>Brand : {data.brand}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link } from "react-router-dom";

export default function Search() {
  const { shoes, searchInput, setSearchInput } = useContext(myContext);
  const [filteredShoes, setFilteredShoes] = useState([]);
  console.log("shoes",shoes);
  console.log("filter",filteredShoes);
  console.log("serarch",searchInput);

  // const handleSearch = () => {
  //   // Filter shoes based on searchInput
  //   const filtered = shoes.filter(
  //     (shoe) =>
  //       shoe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  //       shoe.brand.toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   setFilteredShoes(filtered);
  // };
  const handleSearch = () => {
    let filtered = [];

  if (searchInput.length === 1) {
    // Only consider the first letter of the search input
   filtered = shoes.filter(
      (shoe) =>
        shoe.name.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        shoe.brand.toLowerCase().startsWith(searchInput.toLowerCase())
    );
  } else {
    filtered = shoes.filter(
      (shoe) =>
        shoe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        shoe.brand.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  setFilteredShoes(filtered);
};



  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch(); // Call handleSearch on each change in the input field
          }}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      {searchInput && filteredShoes.length > 0 && (
        <div>
          {filteredShoes.map((data, index) => (
            <div key={index}>
              <Link to={`/viewproducts/${data.id}`}>
                <img src={data.img} alt="img" />
                <h1>{data.name}</h1>
                <h3>Brand : {data.brand}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!searchInput && (
        <div>
          {shoes.map((data, index) => (
            <div key={index}>
              <Link to={`/viewproducts/${data.id}`}>
                <img src={data.img} alt="img" />
                <h1>{data.name}</h1>
                <h3>Brand : {data.brand}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

