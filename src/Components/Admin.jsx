import { useContext } from "react"
import { myContext } from "../Context"
import { Link } from "react-router-dom";

export default function Admin(){

    const {shoes, setShoes}=useContext(myContext)

    console.log(shoes);
    return(
        <div>
   <div className="container">
          {shoes.map((data) => (
            <div>
              
                <img src={data.img} alt="img"></img>
                <h1>{data.name}</h1>
                <h3>Brand : {data.brand}</h3>
              
             
            </div>
          ))}
        </div>
        </div>
    )
}