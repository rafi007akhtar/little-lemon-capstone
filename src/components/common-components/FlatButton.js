const styles = {
  border: "none",
  background: "transparent",
};

export default function FlatButton(props) {
  return (
    <button
      className="flat-button"
      type="button"
      style={styles}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
