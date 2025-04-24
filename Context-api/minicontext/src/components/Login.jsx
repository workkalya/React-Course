import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [UserName, setName] = useState("");
    const [Password, setPassword] = useState("");
    const {setUser } = useContext(UserContext);
    const handleSumbit = (e) => {
        e.preventDefault()
        setUser({
           UserName,
            Password
        })


    }
   return(
    <div>
        <h2>Login</h2>
        <input 
        onChange={(e) => setName(e.target.value)}
        value={UserName} type="text" placeholder="Username" />
        <input 
        onChange={(e) => setPassword(e.target.value)}
        value={Password} 
        type="password" placeholder="Password" />
        <button onClick={handleSumbit}>Login</button>
    </div>
    );
};

export default Login;
