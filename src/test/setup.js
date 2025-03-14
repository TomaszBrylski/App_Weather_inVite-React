import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock dla geolokalizacji
Object.defineProperty(window.navigator, "geolocation", {
  value: {
    getCurrentPosition: vi.fn(),
  },
  configurable: true,
});
