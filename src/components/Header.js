// import Logo from "../../public/assets/Logo.svg";
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="header row row-center">
      <button className="hamburger" onClick={() => setShowNav(!showNav)}>
        Ξ
      </button>
      <img src={Logo} alt="Little Lemon Logo" />
      {showNav && <Nav />}
    </header>
  );
}
