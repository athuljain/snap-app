import { useState } from "react"

export default function Factorial(){

    const[fact,setFact]=useState([])
    const [no,setNo]=useState("")
    function FindFact(){
        let factorial = 1;
        for (let i = 2; i <= no; i++) {
          factorial *= i;
        }
        setFact(factorial)
    }


    return(
        <div>
            <h1>Fact</h1>
            <input type="number" value={no} placeholder="enter a number" onChange={(e)=>setNo(e.target.value)} />
            <button onClick={FindFact}>Fact</button>
            <h3>Fact of {no} is : {fact}</h3>
        </div>
    )
}