import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const {User } = useContext(UserContext);
  if (!User) {
    return <h2>Please login</h2>
  }
    return (
        <div>
        <h2>Profile</h2>
        <p>UserName: {User.UserName}</p>
        <p>Password: {User.Password}</p>
        </div>
    );
};

export default Profile;