import React from "react";
import UserList from "./components/UserList";
import AuthorSection from "./components/AuthorSection";

function App() {
  return (
    <div className="flex flex-col items-center p-4 md:p-16 lg:p-20 lg:px-48">
      <h2 className="text-3xl font-bold text-center mb-8">Authors</h2>
      <AuthorSection />
      <h2 className="text-3xl font-bold text-center mt-8">User List</h2>
      <UserList />
    </div>
  );
}

export default App;
