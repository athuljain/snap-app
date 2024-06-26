import { BrowserRouter, Route, Routes } from "react-router-dom";
import { myContext } from "./Context";
import { JsonDatas } from "./Components/Datas";
import { ShoeProducts } from "./Components/ShoeProducts";
import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import JsonData from "./Components/JsonData";
import FetchDatas from "./Components/FetchDatas";
import SnapData from "./Components/SnapData.json";
import JsonComponent from "./Components/JsonComponent";
import Shoes from "./Components/Shoes";
import Adidas from "./Components/Adidas";
import Nike from "./Components/Nike";
import LikeProducts from "./Components/LikeProducts";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dropdown from "./Components/Dropdown";
import Count from "./Components/Count";
//
//import SpecificProduct from "./Components/SpecificProduct";
import WithUseMemo from "./Components/WithUseMemo";
import Cart from "./Components/Cart";
import ViewProduct from "./Components/ViewProduct";
import Todo from "./Components/Todo";
import EditProducts from "./Components/EditProducts";

import 'bootstrap/dist/css/bootstrap.min.css';

import Factorial from "./Components/Fact";
import Admin from "./Components/Admin";
import Search from "./Components/Search";
import { InputExample } from "./Components/InputExample";
import PrimeChecker from "./Components/Prime";
import { AdidasData, NikeProducts } from "./Components/ShoesAdidas";
import ShoesParams from "./Components/ShoesParams";
import ProductEditParams from "./Components/ProductEditParams";

function App() {
  const data = "kadavanthra";

  const [snap, setSnap] = useState(JsonDatas);
  const [json, setJson] = useState(SnapData);
  const [shoes, setShoes] = useState(ShoeProducts);
  const [likeProducts, setLikeProducts] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  // const [likeCond, setLikeCond] = useState(false);
  const [user, setUser] = useState([]);
  const [logUser, setLogUser] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [AdidasShoes,setAdidasShoes]=useState(AdidasData)
  const [NikeShoes,setNikeShoes]=useState(NikeProducts)

 
  const values = {
    snap,
    setSnap,
    json,
    setJson,
    data,
    shoes,
    setShoes,
    likeProducts,
    setLikeProducts,
    searchInput,
    setSearchInput,
    // likeCond,
    // setLikeCond,
    user,
    setUser,
    logUser,
    setLogUser,
    selectedProduct,
    setSelectedProduct,
    NikeShoes,setNikeShoes,AdidasShoes,setAdidasShoes
  };

  // console.log("app.",likeProducts);

  return (
    <div className="App">
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Dropdown />
          <Todo />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/jsonDatas" element={<JsonData />} />
            <Route path="/fetch" element={<FetchDatas />} />
            <Route path="/countEffect" element={<Count />} />
            <Route path="/json" element={<JsonComponent />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/nike" element={<Nike />} />
            <Route path="/adidas" element={<Adidas />} />
            <Route path="/likeproducts" element={<LikeProducts />} />
            {/* <Route path="/specificproduct" element={<SpecificProduct product={selectedProduct} />} /> */}
            <Route path="/useMemo" element={<WithUseMemo />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/viewProducts/:id" element={<ViewProduct />} />
            <Route path="/editProduct" element={<EditProducts />}/>
            <Route path="/fact" element={<Factorial  />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/input" element={<InputExample />}/>
            <Route path="/prime" element={<PrimeChecker />}/>


            <Route path="/shoeParams" element={<ShoesParams />} />
      <Route path="/shoeEdit/:brand/:id" element={<ProductEditParams />} /> 
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
