import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";
import BodyScoll from "./BodyScoll";

export default function Login() {
  const { user,setLogUser } = useContext(myContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  function loginBtn() {
    const loggedUser=user.find(
        (userData) => userData.email === email && userData.password === password
      )
    if(loggedUser){
      setLogUser(loggedUser)
      alert("Login successful !!!");
      nav("/home");
    } else {
      alert("invalid email or password");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={loginBtn}>Login</button>
      </div>
    </div>
  );
}
