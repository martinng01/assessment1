import React, { useState } from "react";
import AuthorForm from "./AuthorForm";
import Author from "./Author";

const AuthorSection = () => {
  const [authors, setAuthors] = useState([]);

  return (
    <>
      <AuthorForm authors={authors} setAuthors={setAuthors} />
      <div className="mt-4 flex flex-row flex-wrap">
        {authors.map((author, index) => (
          <Author key={index} authorName={author} />
        ))}
      </div>
    </>
  );
};

export default AuthorSection;
