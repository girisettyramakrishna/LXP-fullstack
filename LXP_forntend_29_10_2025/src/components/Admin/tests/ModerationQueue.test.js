import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModerationQueue from "../ModerationQueue"; // adjust if file is nested

describe("ModerationQueue Component", () => {
  test("renders moderation queue heading", () => {
    render(<ModerationQueue />);
    expect(screen.getByText(/Moderation Queue/i)).toBeInTheDocument();
  });

  test("shows pending and approved items", () => {
    render(<ModerationQueue />);
    const allItems = screen.getAllByRole("checkbox");
    expect(allItems.length).toBeGreaterThan(0);
  });

  test("filters pending content correctly", () => {
    render(<ModerationQueue />);
    const filterSelect = screen.getByDisplayValue(/All/i);
    fireEvent.change(filterSelect, { target: { value: "Pending" } });
    const pendingTexts = screen.getAllByText(/Pending/i);
    expect(pendingTexts.length).toBeGreaterThan(0);
  });

  test("approves selected items", () => {
    render(<ModerationQueue />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    const approveBtn = screen.getByText(/Approve Selected/i);
    expect(approveBtn).toBeEnabled();
    fireEvent.click(approveBtn);
  });

  test("rejects selected items", () => {
    render(<ModerationQueue />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    const rejectBtn = screen.getByText(/Reject Selected/i);
    expect(rejectBtn).toBeEnabled();
    fireEvent.click(rejectBtn);
  });
});
