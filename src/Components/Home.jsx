import React,{useContext} from "react"
import { myContext } from "../Context"

export default function Home(){
    const {snap}= useContext(myContext)
    console.log(snap);
    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
}