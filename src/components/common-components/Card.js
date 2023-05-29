const cardStyles = {
  height: "431px",
  background: "rgba(217, 217, 217, 0.58)",
};

const imgStyles = {
  width: "100%",
  height: "139.38px",
  borderRadius: "10px 10px 0px 0px",
};

const menuHeaderStyles = {
  marginTop: "10.87px",
};

const menuItemNameStyles = {
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#171717",
  marginLeft: "13px",
};

const menuItemCostStyles = {
  float: "right",
  marginRight: "19px",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#F4CE14",
};

const menuDescriptionStyles = {
  margin: "2rem 19px 86px 13px",
  fontWeight: "300",
  fontSize: "16px",
  lineHeight: "19px",
};

const orderDeliveryStyles = {
  marginLeft: "13px",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#171717",
};

export default function Card(props) {
  return (
    <div className={props.className} style={cardStyles}>
      <img src={props.imgSrc} alt={props.imgAlt} style={imgStyles} />
      <div className="row" style={menuHeaderStyles}>
        <span className="markazi" style={menuItemNameStyles}>
          {props.itemName}
        </span>
        <span style={menuItemCostStyles}>${props.itemCost}</span>
      </div>
      <article style={menuDescriptionStyles}>{props.children}</article>
      <div style={orderDeliveryStyles}>Order a delivery</div>
    </div>
  );
}
