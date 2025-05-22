import { Link } from "react-router";
import ProductIcon from "../../../../../components/icons/ProductIcon";
import SmartLineSquareTitle from "../../../../../components/smart-line-square-title";
import Product from "./components/product";
import "./styles.css";

function HomeProductsSection() {
  return (
    <div id="home-products-section">
      <SmartLineSquareTitle
        format="lstsl"
        title="What do we offer"
        fontFamily="Italian1"
        fontSize={34}
        linesWidth={60}
        color="#e9c18d"
        style={{ justifyContent: "center" }}
      />
      <div className="products-box">
        <button className="nav-button">&lt;</button>
        <div className="products-container">
          {[1, 1, 1, 1].map((product, index) => (
            <Product
              key={index}
              id={1}
              name="Garlic Bliss Breadsticks"
              category="Food"
              price={199.99}
              is_available
              slug="plate-diverse"
              image=""
            />
          ))}
        </div>
        <button className="nav-button">&gt;</button>
      </div>
      <Link to="" className="button-style-3">
        <ProductIcon className="icon" />
        See all products
      </Link>
    </div>
  );
}

export default HomeProductsSection;
