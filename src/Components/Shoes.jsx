import { useContext } from "react"
import { myContext } from "../Context"
import { Link } from "react-router-dom";
import './Shoes.css'



// All Shoe Products

export default function Shoes(){

    const {shoes}=useContext(myContext)
    console.log("Shoes Products",shoes);

    return(
        <div className="Container">
            <>
            <Link to={'/nike'}>Nike Shoes... </Link>
            <Link to={'/adidas'}>Adidas Shoes...</Link>
            </>
            <h1>Shoes Products ...</h1>
            <div className="container">
            {shoes.map((data,index)=>
            <div >
            <img  src={data.img} alt="img"></img>
            <h4>{data.name}</h4>
            <h5>{data.brand}</h5>
            </div>
            )}
            </div>

        </div>
    )
}


// Nike Shoe Products

export function Nike(){
    const {shoes} = useContext(myContext)
    

    const NikeShoes = shoes.filter(
        (product) => product.brand === "Nike"
      );
      console.log("Nike Products...",NikeShoes);
    return(
        <div className="Container">
<h1>Nike Shoes...</h1>
<div className="container">
{NikeShoes.map((data)=>
    <div >
<img src={data.img} alt="img" ></img>
<h1>{data.brand}</h1>
</div>

)}
</div>
        </div>
    )
}


// Adidas Shoe Product

export function Adidas(){
    const {shoes}=useContext(myContext)

    const AdidasProduct= shoes.filter((product)=> product.brand === "Adidas" )
    console.log("Adidas Product", AdidasProduct);

    return(
        <div className="Container">
            <h1>Adidas Shoes...</h1>
             <div className="container">
                {AdidasProduct.map((data,index)=>
                <div >
                <img src={data.img} alt="img" ></img>
                <h1>{data.name}</h1>
                </div>
                )}
                </div>
        </div>
    )
}