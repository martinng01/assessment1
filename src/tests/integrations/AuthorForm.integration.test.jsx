import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AuthorForm from "../../components/AuthorForm";
import Author from "../../components/Author";

const TestComponent = () => {
  const [authors, setAuthors] = useState([]);
  return (
    <div>
      <AuthorForm authors={authors} setAuthors={setAuthors} />
      {authors.map((author, index) => (
        <Author key={index} authorName={author} />
      ))}
    </div>
  );
};

describe("AuthorForm and Author", () => {
  it("should add a new author and render it", () => {
    render(<TestComponent />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    // Add a new author using author form
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    const authorElement = screen.getByText("John Doe");
    expect(authorElement).toBeInTheDocument();
  });

  it("should handle multiple authors", () => {
    render(<TestComponent />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    // Add a new author using author form
    fireEvent.change(inputElement, { target: { value: "John Doe 1" } });
    fireEvent.click(submitButton);

    fireEvent.change(inputElement, { target: { value: "John Doe 2" } });
    fireEvent.click(submitButton);

    const authorElement1 = screen.getByText("John Doe 1");
    const authorElement2 = screen.getByText("John Doe 2");

    expect(authorElement1).toBeInTheDocument();
    expect(authorElement2).toBeInTheDocument();
  });

  it("should not render an author if the input is empty", () => {
    render(<TestComponent />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    // Add a new author using author form
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(submitButton);

    const authorElements = screen.queryAllByTestId("author");
    expect(authorElements).toHaveLength(0);
  });
});
