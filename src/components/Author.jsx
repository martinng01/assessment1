/* eslint-disable react/prop-types */
import React from "react";

const Author = ({ authorName }) => {
  if (!authorName || authorName.trim() === "") return null;

  return (
    <div data-testid="author" className="m-2 btn btn-outline no-animation">
      {authorName.trim()}
    </div>
  );
};

export default Author;
