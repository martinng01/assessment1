import React, { useState } from "react";
import AuthorForm from "./components/AuthorForm";
import Author from "./components/Author";

function App() {
  const [authors, setAuthors] = useState([]);

  return (
    <div className="flex flex-col items-center p-4 md:p-16 lg:p-20 lg:px-48">
      <AuthorForm authors={authors} setAuthors={setAuthors} />
      <div className="mt-4 flex flex-row flex-wrap">
        {authors.map((author, index) => (
          <Author key={index} authorName={author} />
        ))}
      </div>
    </div>
  );
}

export default App;
