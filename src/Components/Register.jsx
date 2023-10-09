import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){


    const [userInfo, setUserInfo] = useState({
        email: "",
        userName: "",
        password: "",
      });

      function userInformation(e){

        const {name , value} = e.target;
        setUserInfo((prevUserInfo)=>({
            ...prevUserInfo,
            [name]: value,

        }))
        // console.log("userData",userInfo);

      }

      const nav=useNavigate()

      function registerFun (){
        console.log(userInfo);
        nav('/login')

      }



    return(
        <div>
            <input type="email" onChange={userInformation} name="email" value={userInfo.email} placeholder="Email" />
<br></br>
<input type="text" onChange={userInformation} name="userName" value={userInfo.userName} placeholder="User Name" />
<br></br>
<input type="password" onChange={userInformation} name="password" value={userInfo.password} placeholder="Password" />
<br></br>

            <button onClick={registerFun} >Register </button>


        </div>
    )
}