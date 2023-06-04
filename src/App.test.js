import { render, screen } from "@testing-library/react";
import App from "./App";
import { initializeTimes, updateTimes } from "./App";

test("renders reservation details", () => {
  render(<App />);
  const reservationHeader = screen.getByText("Reservation Details");
  expect(reservationHeader).toBeInTheDocument();
});

test("available time is correctly initialized", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes.length).toBeGreaterThanOrEqual(1);
});

test("available time is correctly updated", () => {
  const state = updateTimes(["9PM"], { date: new Date() });
  expect(state.length).toBeGreaterThanOrEqual(1);
});

test("form submission writes to local storage", () => {
  render(<App />);
  const submitButton = screen.getByText("Submit");
  submitButton.click();
  const formDataFromLocal = localStorage.getItem("formData");
  expect(formDataFromLocal).toBeDefined();
});
