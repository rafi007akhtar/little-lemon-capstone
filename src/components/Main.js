import FoodImage from "../assets/restauranfood.jpg";
import Card from "./common-components/Card";
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta-low.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const nav = useNavigate();

  return (
    <main>
      <section className="banner row row-center">
        <div className="info" id="info">
          <h1>Little Lemon</h1>
          <h6 className="markazi info-location">Chicago</h6>
          <article className="info-article">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </article>
          <button className="button" onClick={() => nav("/reservations")}>
            Reserve Table
          </button>
        </div>
        <div className="image">
          <img src={FoodImage} alt="restaurant food" />
        </div>
      </section>

      <section className="specials-menu">
        <div className="specials-header">
          <h1>This week's specials!</h1>
          <button className="button" onClick={() => nav("/menu")}>
            Online Menu
          </button>
        </div>

        <div className="menu-items row">
          <Card
            className="col-3 right-36"
            imgSrc={greekSalad}
            imgAlt="Greek Salad"
            itemName="Greek salad"
            itemCost="12.99"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas a
            feugiat erat, vitae luctus.
          </Card>
          <Card
            className="col-3 right-36"
            imgSrc={bruschetta}
            imgAlt="Bruschetta"
            itemName="Bruschetta"
            itemCost="5.99"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas a
            feugiat erat, vitae luctus.
          </Card>
          <Card
            className="col-3"
            imgSrc={lemonDessert}
            imgAlt="Lemon Dessert"
            itemName="Lemon Dessert"
            itemCost="5.00"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maec enas a
            feugiat erat, vitae luctus.
          </Card>
        </div>
      </section>
    </main>
  );
}
