import React from "react";
import Author from "../components/Author";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Unit: Author component", () => {
  it("renders author name", () => {
    const authorName = "John Doe";
    render(<Author authorName={authorName} />);

    const authorElement = screen.getByText(authorName);
    expect(authorElement).toBeInTheDocument();
  });

  it("renders author name without leading and trailing whitespaces", () => {
    const authorName = "  John Doe  ";
    render(<Author authorName={authorName} />);

    const authorElement = screen.getByText("John Doe");
    expect(authorElement).toBeInTheDocument();
  });

  it("does not render an empty author name", () => {
    const authorName = "";
    const { container } = render(<Author authorName={authorName} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("does not render a whitespace author name", () => {
    const authorName = " ";
    const { container } = render(<Author authorName={authorName} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("does not render a null author name", () => {
    const authorName = null;
    const { container } = render(<Author authorName={authorName} />);

    expect(container).toBeEmptyDOMElement();
  });
});
