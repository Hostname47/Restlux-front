import { Link } from "react-router";
import Image from "../../../../../../../assets/images/plate.jpg";
import Star from "../../../../../../../components/icons/Star";
import "./styles.css";

type ProductType = {
  id: number;
  name: string;
  category: string;
  slug: string;
  is_available: boolean;
  price: number;
  image: string;
};

function Product({
  id,
  name,
  slug,
  is_available,
  price,
  image,
  category,
}: ProductType) {
  return (
    <div className="product-container">
      <img className="image" src={Image} />
      <div className="metadata-box">
        <Link to={"/categories/" + category} className="category">
          {category}
        </Link>
        <Link to="" className="name">
          {name}
        </Link>
        <div className="price-and-stars">
          <p className="price">{price}$</p>
          <div className="stars">
            {Array.from({ length: 5 }).map((s, index) => (
              <Star className="star filled" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
