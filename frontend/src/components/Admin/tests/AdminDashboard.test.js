import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";

// Polyfill for React Router v7 TextEncoder issue in Jest
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("AdminDashboard Component", () => {
  test("renders dashboard heading", () => {
    renderWithRouter(<AdminDashboard />);
    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
  });

  test("renders navigation buttons if present", () => {
    renderWithRouter(<AdminDashboard />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("handles navigation actions safely", () => {
    renderWithRouter(<AdminDashboard />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toBeEnabled();
  });
});
