import React from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {logout} from '/src/store/authSlice.js'
import authService from "../../appwrite/auth";

function Logout() {
    const dispatch = useDispatch();
    const logout = authService.logout;

  const handleLogout = () => {
    logout()
     .then(() => {
        dispatch(logout())
     })
    
  };

  return (
    <Button
      type="button"
      className="bg-red-600 text-white"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default Logout;