import React from "react";
import User from "../components/User";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Unit: User component", () => {
  it("renders user details", () => {
    const name = "John Doe";
    const username = "johndoe";
    const email = "johndoe@gmail.com";

    render(<User name={name} username={username} email={email} />);
    const nameElement = screen.getByText(`Name: ${name}`);
    const usernameElement = screen.getByText(`Username: ${username}`);
    const emailElement = screen.getByText(`Email: ${email}`);

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  it("renders user details without leading and trailing whitespaces", () => {
    const name = "  John Doe  ";
    const username = "  johndoe  ";
    const email = "  johndoe@gmail.com  ";

    render(<User name={name} username={username} email={email} />);
    const nameElement = screen.getByText(`Name: ${name.trim()}`);
    const usernameElement = screen.getByText(`Username: ${username.trim()}`);
    const emailElement = screen.getByText(`Email: ${email.trim()}`);

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});
