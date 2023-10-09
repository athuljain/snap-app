import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";

export default function Register() {
  const { userInfo, setUserInfo,newUser, setNewUser } = useContext(myContext);

  // const [newUser, setNewUser] = useState({
  //   email: "",
  //   userName: "",
  //   password: "",
  // });


  function userInformation(e) {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
 
  }

  const nav = useNavigate();

  function registerFun() {
    setUserInfo([...userInfo,newUser])
    console.log("Registered users", userInfo);

    nav("/login");
  }

  return (
    <div>
      <input
        type="email"
        onChange={userInformation}
        name="email"
        value={newUser.email}
        placeholder="Email"
      />
      <br></br>
      <input
        type="text"
        onChange={userInformation}
        name="userName"
        value={newUser.userName}
        placeholder="User Name"
      />
      <br></br>
      <input
        type="password"
        onChange={userInformation}
        name="password"
        value={newUser.password}
        placeholder="Password"
      />
      <br></br>

      <button onClick={registerFun}>Register </button>
    </div>
  );
}
