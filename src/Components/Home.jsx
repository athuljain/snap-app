import React, { useContext } from "react";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const { snap } = useContext(myContext);
  console.log(snap);
  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/jsonDatas")}>Context Datas</button>
      <button onClick={() => navigate("/fetch")}>Fetch Datas</button>
    </div>
  );
}
