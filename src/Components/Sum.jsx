import { useState } from "react"

export default function Sum(){

    const [sum,setSum]=useState('')
    const [fNum,setFNum]=useState()
    const [SNum,setSNum]=useState()

    console.log(fNum,SNum);
    
    function sumFun() {
        setSum(Number(fNum) + Number(SNum));
      }
    


    return(
        <div>
            <input type="number" placeholder="enter number" onChange={(e)=>setFNum(e.target.value)} />
            <input type="number" placeholder="enter number" onChange={(e)=>setSNum(e.target.value)} />
            <button onClick={sumFun}>Sum</button>   <br></br> 
            <h1>{sum}</h1>
                </div>
    )
}