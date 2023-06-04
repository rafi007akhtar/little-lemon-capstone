import { useEffect, useState } from "react";
import FlatButton from "./common-components/FlatButton";

function getFormattedDate(d) {
  const date = new Date(d);
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
  const [date, setDate] = useState(getFormattedDate(new Date()));
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [dinerCount, setDinerCount] = useState(1);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      localStorage.removeItem("formData");
    };
  }, []);

  const availableTimes = props.availableTimes;
  const timesShownJSX = availableTimes.availableTimes.map((time, id) => (
    <button
      key={id}
      className="button available-times"
      onClick={() => {
        setError(false);
        setTime(time);
      }}
      type="button"
    >
      {time}
    </button>
  ));

  const minDate = getFormattedDate(new Date());

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
    setTime("");
    availableTimes.dispatch({ date: date });
  }

  function resetStates() {
    setDate(getFormattedDate(new Date()));
    setTime("");
    setOccasion("");
    setDinerCount(1);
  }

  function formSubmit(e) {
    e.preventDefault();
    bookedInfo.date = date;
    bookedInfo.time = time;
    bookedInfo.occasion = occasion;
    bookedInfo.dinerCount = dinerCount;
    console.log(
      "The resevation has been booked with these details:",
      bookedInfo
    );
    localStorage.setItem("formData", JSON.stringify(bookedInfo));
    props.submitForm(bookedInfo);
    const submissionError = localStorage.getItem("submissionError");
    if (submissionError) {
      setError(submissionError);
    } else {
      resetStates();
      setFormIsSubmitted(true);
    }
  }

  function formChange() {
    setError(null);
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
          required
          min={minDate}
        />

        <hr />

        <label htmlFor="reservation-time" className="row">
          Reservation time
        </label>
        <p>
          Select from the following list of available times on the selected
          date.
        </p>
        <div className="available-times-container" name="reservation-time">
          {timesShownJSX}
        </div>
        {error && error === "time" && (
          <p className="error">
            Please select a reservation time from this list
          </p>
        )}

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
          required
        />

        <hr />

        <label htmlFor="resevation-diners" className="row">
          Number of diners
        </label>
        <p>You need to select at least 1 and go upto a maximum of 4 diners.</p>
        <div className="diner-count">
          <FlatButton onClick={decreaseDinerCount}>-</FlatButton>
          <span id="resevation-diners"> {dinerCount} </span>
          <FlatButton onClick={increaseDinerCount}>+</FlatButton>
        </div>

        <div className="form-submission">
          <button
            aria-label="On Click"
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

export { getFormattedDate };
