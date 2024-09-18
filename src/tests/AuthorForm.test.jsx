import React from "react";
import AuthorForm from "../components/AuthorForm";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Unit: AuthorForm component", () => {
  it("renders the text and submit button", () => {
    const authors = [];
    const setAuthors = vi.fn();
    render(<AuthorForm authors={authors} setAuthors={setAuthors} />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    expect(inputElement).toBeInTheDocument();

    const submitButton = screen.getByText(/submit/i);
    expect(submitButton).toBeInTheDocument();
  });

  it("prevents submission with an empty author name", () => {
    const authors = [];
    const setAuthors = vi.fn();
    render(<AuthorForm authors={authors} setAuthors={setAuthors} />);

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(setAuthors).not.toHaveBeenCalled();
  });

  it("submits the author name", () => {
    const authors = [];
    const setAuthors = vi.fn();
    render(<AuthorForm authors={authors} setAuthors={setAuthors} />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    expect(setAuthors).toHaveBeenCalledWith([...authors, "John Doe"]);
  });

  it("trims the author name before submission", () => {
    const authors = [];
    const setAuthors = vi.fn();
    render(<AuthorForm authors={authors} setAuthors={setAuthors} />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(inputElement, { target: { value: "  John Doe  " } });
    fireEvent.click(submitButton);

    expect(setAuthors).toHaveBeenCalledWith([...authors, "John Doe"]);
  });

  it("clears the input field after submission", () => {
    const authors = [];
    const setAuthors = vi.fn();
    render(<AuthorForm authors={authors} setAuthors={setAuthors} />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    expect(inputElement.value).toBe("");
  });
});
