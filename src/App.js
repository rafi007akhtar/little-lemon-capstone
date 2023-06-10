import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./helpers/api";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/Error";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Main /> },
        {
          path: "/reservations",
          element: (
            <BookingForm
              availableTimes={{ availableTimes, dispatch }}
              submitForm={submitForm}
            />
          ),
        },
        {
          path: "/booking-confirmed",
          element: <ConfirmedBooking submitSuccess={submitSuccess} />,
        },
        { path: "/menu", element: <ErrorPage /> },
        { path: "/order-online", element: <ErrorPage /> },
        { path: "/login", element: <ErrorPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
export { initializeTimes, updateTimes };
