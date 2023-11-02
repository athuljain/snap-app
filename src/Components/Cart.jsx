import React, { useState } from "react";

function Cart(){
    const [id,setId] = useState(0)
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [array,setArray] =useState([])

    function inputId(a){
        setId(a.target.value);
    }
    function inputName(b){
        setName(b.target.value)
    }
    function inputPrice(c){
        setPrice(c.target.value)
    }
    function inputQuantity(d){
        setQuantity(d.target.value)
    }

    function addList(){
        // let id = document.getElementsByClassName("inputId").value
        // let name = document.getElementsByClassName("inputName").value
        // let price = document.getElementsByClassName("inputPrice").value
        // let quantity = document.getElementsByClassName("inputQuantity").value
        // setArray((current) => [...current,{id,name,price,quantity}])
        setArray([...array,{id,name,price}])
    }
    console.log("array",array);
    
    return(
        <div className="main-div">
            <div className="item-box">
            <button className="head-button" id="head">Total Cart Items</button><br /><br />
            <label>Enter ID</label> <br /> <input onChange={inputId} className="inputId" type="number" /><br />
            <label>Enter Name</label> <br /> <input onChange={inputName} className="inputName" type="text" /><br />
           <label>Enter Price</label> <br /> <input onChange={inputPrice} className="inputPrice" type="number" /><br />
            <label>Enter Quantity</label> <br /> <input onChange={inputQuantity} className="inputQuantity" type="number" /><br /><br />
            <button className="add-button" onClick={addList}>Add</button><br /><br />
            <button className="remove-button">Remove</button><br /><br />
        </div>

        <div className="table-div">
        <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((data,index) => (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>Action</td>
                                </tr>
                        ))}
                    </tbody>
                </table>

        </div>
        </div>
        
    )
    
}
export default Cart