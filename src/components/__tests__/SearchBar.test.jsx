import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders input and search button", () => {
    render(<SearchBar onSearch={() => {}} />);

    expect(screen.getByPlaceholderText("Enter city name")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onSearch when Enter is pressed", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter city name");
    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.keyUp(input, { key: "Enter" });

    expect(mockOnSearch).toHaveBeenCalledWith("London");
  });

  it("calls onSearch when search button is clicked", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter city name");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Paris" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("Paris");
  });

  it("filters non-alphabetic characters", () => {
    render(<SearchBar onSearch={() => {}} />);

    const input = screen.getByPlaceholderText("Enter city name");
    fireEvent.input(input, { target: { value: "London123" } });

    expect(input.value).toBe("London");
  });
});
