/* eslint-disable no-restricted-globals */
// import Logo from "../../public/assets/Logo.svg";
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Header() {
  const [showNav, setShowNav] = useState(screen.width >= 900);
  window.addEventListener("resize", () => {
    setShowNav(screen.width >= 900);
  });

  return (
    <>
      <header className="header row row-center">
        {screen.width < 900 && (
          <button
            className="hamburger button"
            onClick={() => setShowNav((state) => !state)}
          >
            Ξ
          </button>
        )}
        <img src={Logo} alt="Little Lemon Logo" />
        {showNav && <Nav />}
      </header>

      <Outlet />
    </>
  );
}
