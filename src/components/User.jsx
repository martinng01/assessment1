/* eslint-disable react/prop-types */
import React from "react";

const User = ({ name, username, email }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl bg-white">
      <div className="card-body">
        <h1>{name}</h1>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default User;
