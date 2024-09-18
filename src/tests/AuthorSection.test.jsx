import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AuthorSection from "../components/AuthorSection";

describe("Integration: AuthorSection", () => {
  it("should add a new author and render it", () => {
    render(<AuthorSection />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    // Add a new author using author form
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    const authorElement = screen.getByText("John Doe");
    expect(authorElement).toBeInTheDocument();
  });

  it("should handle multiple authors", () => {
    render(<AuthorSection />);

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
    render(<AuthorSection />);

    const inputElement = screen.getByPlaceholderText(/author name/i);
    const submitButton = screen.getByText(/submit/i);

    // Add a new author using author form
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(submitButton);

    const authorElements = screen.queryAllByTestId("author");
    expect(authorElements).toHaveLength(0);
  });
});
