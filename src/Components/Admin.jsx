import { useContext } from "react"
import { myContext } from "../Context"

export default function Admin(){

    const {shoes, setShoes}=useContext(myContext)

    console.log(shoes);
    return(
        <div>

        </div>
    )
}