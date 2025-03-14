import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WeatherDisplay from "../WeatherDisplay";

describe("WeatherDisplay", () => {
  const mockWeatherData = {
    temp: 20,
    city: "London",
    humidity: 60,
    windSpeed: 5,
    weatherIcon: "clear",
  };

  it("displays weather information when data is provided", () => {
    render(<WeatherDisplay weatherData={mockWeatherData} error={false} />);

    expect(screen.getByText("20°c")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("5 km/h")).toBeInTheDocument();
  });

  it("displays error message when error is true", () => {
    render(<WeatherDisplay error={true} />);

    expect(screen.getByText("Invalid city name")).toBeInTheDocument();
  });

  it("renders nothing when no data and no error", () => {
    const { container } = render(<WeatherDisplay error={false} />);

    expect(container.firstChild).toBeNull();
  });

  it("displays all required weather icons", () => {
    render(<WeatherDisplay weatherData={mockWeatherData} error={false} />);

    const icons = screen.getAllByRole("img");
    expect(icons).toHaveLength(3); // weather icon, humidity icon, wind icon

    icons.forEach((icon) => {
      expect(icon).toHaveAttribute("src");
      expect(icon).toHaveAttribute("alt");
    });
  });
});
