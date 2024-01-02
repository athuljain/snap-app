import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";

export default function Register() {
  const { user, setUser } = useContext(myContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const isUserAlreadyRegistered = () => {
    return user.find((userData) => userData.email === email);
  };

  const isEmailValid=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isPasswordValid = () => {
    
    return password.length >= 3;
  };

  const handleButtonClick = () => {

    if (!isEmailValid()) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid()) {
      alert("Password should be at least 3 characters long.");
      return;
    }


    if (isUserAlreadyRegistered()) {
      alert("User already registered. Please use a different email.");
      return;
    }

    const userData = { name, email, password };
    setUser([...user, userData]);

    nav("/login");
    console.log("hlooo", user);
  };
  

  return (
    <div>
      <h1>Register </h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={() => handleButtonClick()} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
