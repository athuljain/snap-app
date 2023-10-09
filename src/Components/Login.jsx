import { useContext } from "react"
import { myContext } from "../Context"
import { useNavigate } from "react-router-dom";

export default function Login(){

    const {userInfo,loginData, setLoginData} = useContext(myContext)
    console.log(userInfo);
    const nav=useNavigate()

    function LoginChange(e){
        const {name , value}= e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }

    console.log(loginData);


    function loginFun(){
        const { email, password } = loginData;

       const userExists = userInfo.find((user)=> user.email === email)

       if(userExists && userExists.password === password){
        nav('/home')
       }else{
        alert("Wrong entries")
       }
    }

    return(
        <div>
            <input type="email" name="email" value={loginData.email} onChange={LoginChange} placeholder="email" />
            <input type="text" name="password" value={loginData.password} onChange={LoginChange}  placeholder="password" />
            <button onClick={loginFun} >Login :</button>
        </div>
    )
}