// import Logo from "../../public/assets/Logo.svg";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header row row-center">
      <img src={Logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}
