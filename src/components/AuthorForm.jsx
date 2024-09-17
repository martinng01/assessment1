/* eslint-disable react/prop-types */
import React, { useState } from "react";

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

export default AuthorForm;
