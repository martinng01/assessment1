import React from "react";
import PropTypes from "prop-types";

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

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
