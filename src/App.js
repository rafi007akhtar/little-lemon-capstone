import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Main />
      <Footer /> */}
      <BookingForm />
    </div>
  );
}

export default App;
