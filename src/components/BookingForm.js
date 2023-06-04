import { useState } from "react";
import FlatButton from "./common-components/FlatButton";

function getTodaysDate() {
  const date = new Date();
  let dd = date.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  let mm = date.getMonth() + 1;
  if (mm < 10) {
    mm = "0" + mm;
  }
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export default function BookingForm(props) {
  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [dinerCount, setDinerCount] = useState(1);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const availableTimes = props.availableTimes;
  // console.log("available times:", availableTimes);

  const bookedInfo = {
    date: "",
    time: "",
    occasion: "",
    dinerCount: 0,
  };

  function decreaseDinerCount() {
    if (dinerCount <= 1) return;
    setDinerCount((state) => state - 1);
  }

  function increaseDinerCount() {
    if (dinerCount >= 4) return;
    setDinerCount((state) => state + 1);
  }

  function dateChangeHandler(e) {
    setDate(e.target.value);
    availableTimes.dispatch(date);
    // console.log("available times:", availableTimes);
  }

  function resetStates() {
    setDate(getTodaysDate());
    setTime("");
    setOccasion("");
    setDinerCount(1);
  }

  function formSubmit(e) {
    e.preventDefault();
    setFormIsSubmitted(true);
    bookedInfo.date = date;
    bookedInfo.time = time;
    bookedInfo.occasion = occasion;
    bookedInfo.dinerCount = dinerCount;
    console.log(
      "The resevation has been booked with these details:",
      bookedInfo
    );
    resetStates();
  }

  function formChange() {
    setFormIsSubmitted(false);
  }

  return (
    <div className="table-booking">
      <h1>Reservation Details</h1>
      <p>Please enter the following details needed for the reservation.</p>

      <hr />

      <form onSubmit={formSubmit} onChange={formChange}>
        <label htmlFor="reservation-date" className="row">
          Reservation Date
        </label>
        <input
          type="date"
          name="reservation-date"
          id="reservation-date"
          className="reservation-field"
          value={date}
          onChange={dateChangeHandler}
        />

        <hr />

        <label htmlFor="reservation-time" className="row">
          Reservation time
        </label>
        <input
          type="time"
          name="reservation-time"
          id="reservation-time"
          className="reservation-field"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <hr />

        <label htmlFor="reservation-occasion" className="row">
          Occasion
        </label>
        <input
          type="text"
          name="reservation-occasion"
          id="reservation-occasion"
          className="reservation-field occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        />

        <hr />

        <label htmlFor="resevation-diners" className="row">
          Number of diners
        </label>
        <div className="diner-count">
          <FlatButton onClick={decreaseDinerCount}>-</FlatButton>
          <span id="resevation-diners"> {dinerCount} </span>
          <FlatButton onClick={increaseDinerCount}>+</FlatButton>
        </div>

        <div className="form-submission">
          <button
            className={`form-submit button ${
              formIsSubmitted ? "submitted" : ""
            }`}
          >
            {formIsSubmitted ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
