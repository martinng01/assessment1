import React from "react";
import PropTypes from "prop-types";

const Author = ({ authorName }) => {
  if (!authorName || authorName.trim() === "") return null;

  return (
    <div data-testid="author" className="m-2 btn btn-outline no-animation">
      {authorName.trim()}
    </div>
  );
};

Author.propTypes = {
  authorName: PropTypes.string.isRequired,
};

export default Author;
