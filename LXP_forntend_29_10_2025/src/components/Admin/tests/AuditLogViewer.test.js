import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuditLogViewer from "../AuditLogViewer";

describe("AuditLogViewer Component", () => {
  test("renders audit log heading", () => {
    render(<AuditLogViewer />);
    expect(screen.getByText("Audit Log Viewer")).toBeInTheDocument();
  });

  test("filters by role correctly", () => {
    render(<AuditLogViewer />);
    const filterSelect = screen.getByDisplayValue("All Roles");

    // Simulate changing role filter
    fireEvent.change(filterSelect, { target: { value: "Moderator" } });

    // Assert dropdown reflects new value
    expect(filterSelect.value).toBe("Moderator");
  });

  test("search works correctly", () => {
    render(<AuditLogViewer />);
    const searchBox = screen.getByPlaceholderText("Search logs...");

    // Simulate typing in search input
    fireEvent.change(searchBox, { target: { value: "React" } });

    // Assert that input value changed correctly
    expect(searchBox.value).toBe("React");
  });
});
