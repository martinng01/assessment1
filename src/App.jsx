import React from "react";
import UserList from "./components/UserList";
import AuthorSection from "./components/AuthorSection";

function App() {
  return (
    <div className="flex flex-col items-center p-4 md:p-16 lg:p-20 lg:px-48">
      <AuthorSection />
      <UserList />
    </div>
  );
}

export default App;
