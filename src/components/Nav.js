const ulStyles = {
  listStyleType: "none",
  display: "inline",
};

export default function Nav() {
  return (
    <nav>
      <ul style={ulStyles}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
