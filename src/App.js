import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./helpers/api";

function updateTimes(state, action) {
  const times = fetchAPI(new Date(action.date));
  return times;
}

function initializeTimes() {
  return fetchAPI(new Date());
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <div className="container">
      <Header />
      {/* <Main />
      <Footer /> */}
      <BookingForm availableTimes={{ availableTimes, dispatch }} />
    </div>
  );
}

export default App;
export { initializeTimes, updateTimes };
