import React, { useState } from "react";
import PropTypes from "prop-types";

const AuthorForm = ({ authors, setAuthors }) => {
  const [inputValue, setInputValue] = useState("");

  const validateInput = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid author name");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateInput()) {
      setInputValue("");
      return;
    }

    setAuthors([...authors, inputValue.trim()]);
    setInputValue("");
  };

  return (
    <div className="join">
      <input
        type="text"
        className="input input-bordered join-item"
        placeholder="Author Name"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button className="btn join-item" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

AuthorForm.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setAuthors: PropTypes.func.isRequired,
};

export default AuthorForm;
