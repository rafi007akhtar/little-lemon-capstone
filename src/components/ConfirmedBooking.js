const styles = {
  marginLeft: "1rem",
};

export default function ConfirmedBooking(props) {
  return props.submitSuccess ? (
    <p style={styles}>Your booking has been confirmed!</p>
  ) : (
    <p style={styles}>Your booking could not be confirmed. Please try again.</p>
  );
}
