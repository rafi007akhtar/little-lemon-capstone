import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import { useReducer } from "react";

function updateTimes(state, action) {
  switch (action.type) {
  }
  return state;
}

function initializeTimes() {
  return ["9PM"];
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
