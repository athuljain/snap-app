import "./JsonData.css";
import { useContext } from "react";
import { myContext } from "../Context";
import "./JsonData.css";

export default function JsonData() {
  const { snap } = useContext(myContext);
  console.log(snap);
  return (
    <div>
      <h1>Snap Pics</h1>
      <div className="SnapDiv">
        {snap.map((data, index) => (
          <div>
            <img src={data.image} alt="img" />
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
