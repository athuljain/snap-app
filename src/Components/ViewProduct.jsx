import { useContext } from "react"
import { useParams } from "react-router-dom"
import { myContext } from "../Context"

export default function ViewProduct(){

    const {id}= useParams()
    const {shoes} = useContext(myContext)

    console.log("ID from params:", id);
   // console.log("Shoes array:", shoes);
    const parsedId= parseInt(id,10)
    const product= shoes.find((product)=> product.id === parsedId)
console.log("viewProduct",product);
    return(
        <div>
            <h1>View Product</h1>
        </div>
    )
}