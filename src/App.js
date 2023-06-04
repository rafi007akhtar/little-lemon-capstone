import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./helpers/api";

function updateTimes(state, action) {
  const times = fetchAPI(new Date(action.date));
  return times;
}

function initializeTimes() {
  return fetchAPI(new Date());
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function submitForm(formData) {
    const submission = submitAPI(formData);
    setSubmitSuccess(submission);
  }

  return (
    <div className="container">
      <Header />
      {/* <Main />
      <Footer /> */}
      <BookingForm
        availableTimes={{ availableTimes, dispatch }}
        submitForm={submitForm}
      />
      {submitSuccess && <ConfirmedBooking />}
    </div>
  );
}

export default App;
export { initializeTimes, updateTimes };
