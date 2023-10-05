import { useContext } from "react"
import { myContext } from "../Context"

export default function Shoes(){

    const {shoes}=useContext(myContext)
    console.log(shoes);

    return(
        <div>
            <h1>Shoes Products ...</h1>

        </div>
    )
}