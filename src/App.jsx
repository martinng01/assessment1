import React, { useEffect, useState } from "react";
import AuthorForm from "./components/AuthorForm";
import Author from "./components/Author";
import User from "./components/User";

function App() {
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <div className="flex flex-col items-center p-4 md:p-16 lg:p-20 lg:px-48">
      <AuthorForm authors={authors} setAuthors={setAuthors} />
      <div className="mt-4 flex flex-row flex-wrap">
        {authors.map((author, index) => (
          <Author key={index} authorName={author} />
        ))}
      </div>
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
    </div>
  );
}

export default App;
