import React, { useState, useEffect } from "react";
import User from "./User";

// Check if the user object has the required properties for display
const isValidUser = (user) => {
  return (
    user &&
    "id" in user &&
    "name" in user &&
    "username" in user &&
    "email" in user
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || !data.every(isValidUser)) {
          throw new Error("Invalid data format");
        }
        setUsers(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default UserList;
