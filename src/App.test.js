import { render, screen } from "@testing-library/react";
import App from "./App";
import { initializeTimes, updateTimes } from "./App";

test("renders reservation details", () => {
  render(<App />);
  const reservationHeader = screen.getByText("Reservation Details");
  expect(reservationHeader).toBeInTheDocument();
});

test("available time is correctly initialized", () => {
  const initialTime = initializeTimes();
  expect(initialTime).toStrictEqual(["9PM"]);
});

test("available time is correctly updated", () => {
  const state = updateTimes(["9PM"], {});
  expect(state).toStrictEqual(["9PM"]);
});
