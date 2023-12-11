// import React, { useContext } from "react";
// import { myContext } from "../Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../Context";
import homeImg from "../Pics/mern1.jpg";
import reactlogo from "../logo.svg";
import BodyScoll from "./BodyScoll";

export default function Home() {
  const navigate = useNavigate();

  // const { snap } = useContext(myContext);
  // console.log(snap);
  // const data = useContext(myContext);
  // console.log(data);
  const { logUser } = useContext(myContext);
  console.log("loguser", logUser);
  console.log("logUserName", logUser.name);

  return (
    <div>
      <h1>Home Page</h1>
      <h4>welcome {logUser.name}</h4>

      <>
        <button onClick={() => navigate("/jsonDatas")}>Context Datas</button>
        <button onClick={() => navigate("/fetch")}>Fetch Datas</button>
        <button onClick={() => navigate("/json")}>Json Data</button> <br></br>
        <button onClick={() => navigate("/countEffect")}>Count</button>
        <button onClick={() => navigate("/useMemo")}>useMemo & </button>
        <button onClick={() => navigate("/cart")}>Cart</button>
        <button onClick={()=>navigate("/editProduct")}>Edit Product</button>

<button onClick={()=>navigate('/fact')}>Fact</button>

        <BodyScoll />
        <img src={homeImg} alt="helo" />
        <img src={reactlogo} alt="hi" />
      </>

      <Link to={"/shoes"}>Shoes...</Link>
    </div>
  );
}
