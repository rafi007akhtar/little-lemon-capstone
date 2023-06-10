import { NavLink } from "react-router-dom";

const ulStyles = {
  listStyleType: "none",
  display: "inline",
};

export default function Nav() {
  return (
    <nav>
      <ul style={ulStyles}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/order-online">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
