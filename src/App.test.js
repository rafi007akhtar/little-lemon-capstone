/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import { render, screen } from "@testing-library/react";
import { getFormattedDate } from "./components/BookingForm";
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

test("date field has HTML validation", () => {
  const view = render(<App />);
  const date = view.container.querySelector("#reservation-date");
  const minDate = date.getAttribute("min");
  expect(minDate).toEqual(getFormattedDate(new Date()));
});

test("submit field gets JS validation: no submission without entering all fields", () => {
  render(<App />);
  const submitButton = screen.getByText("Submit");
  submitButton.click();
  expect(submitButton.innerText).not.toEqual("Submitted");
});
