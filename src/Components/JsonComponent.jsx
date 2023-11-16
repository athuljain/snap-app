import { useContext } from "react";
import { myContext } from "../Context";

export default function JsonComponent() {
  const { json } = useContext(myContext);
  console.log(json);

  return (
    <div>
      <h1>Json Component</h1>
      <h3>Json Snap</h3>
      <div style={{display:"flex"}}>
        {json.map((data, index) => (
          <div>
            <img src={data.image} alt="img" />
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
