/* eslint-disable react/prop-types */
import React from "react";

const User = ({ name, username, email }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl bg-white">
      <div className="card-body">
        <p>Name: {name.trim()}</p>
        <p>Username: {username.trim()}</p>
        <p>Email: {email.trim()}</p>
      </div>
    </div>
  );
};

export default User;
