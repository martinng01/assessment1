import React from "react";
import UserList from "../components/UserList";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("Integration: UserList", () => {
  it("renders user details", async () => {
    globalThis.fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "Martin Ng",
            username: "martinng",
            email: "martinng@example.com",
          },
          {
            id: 2,
            name: "Martin Lim",
            username: "martinlim",
            email: "martinlim@example.com",
          },
        ]),
    });

    render(<UserList />);
    const nameElement = await screen.findByText("Name: Martin Ng");
    const usernameElement = await screen.findByText("Username: martinng");
    const emailElement = await screen.findByText("Email: martinng@example.com");

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();

    const nameElement2 = await screen.findByText("Name: Martin Lim");
    const usernameElement2 = await screen.findByText("Username: martinlim");
    const emailElement2 = await screen.findByText(
      "Email: martinlim@example.com"
    );

    expect(nameElement2).toBeInTheDocument();
    expect(usernameElement2).toBeInTheDocument();
    expect(emailElement2).toBeInTheDocument();
  });

  it("handles fetch errors", async () => {
    globalThis.fetch.mockResolvedValueOnce(() => {
      Promise.resolve({
        ok: false,
        json: () => Promise.reject(new Error("Failed to fetch users")),
      });
    });

    render(<UserList />);
    const errorElement = await screen.findByText("Failed to fetch users", {
      exact: false,
    });

    expect(errorElement).toBeInTheDocument();
  });

  it("handles invalid data formats", async () => {
    // Fetch results do not have email field
    globalThis.fetch.mockResolvedValueOnce(
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Martin Ng",
              username: "martinng",
            },
          ]),
      })
    );

    render(<UserList />);

    const errorElement = await screen.findByText("Invalid data format", {
      exact: false,
    });

    expect(errorElement).toBeInTheDocument();
  });
});
