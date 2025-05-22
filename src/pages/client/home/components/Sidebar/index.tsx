import { useState } from "react";
import SidebarSearch from "./components/search";
import "./styles.css";
import DesignersSignature from "../../../../../components/design-signature";
import StackIcon from "../../../../../components/icons/StackIcon";
import DollarIcon from "../../../../../components/icons/DollarIcon";
import StarIcon from "../../../../../components/icons/StarIcon";
import StarButton from "./components/star-button";
import FilterButton from "./components/filter-button";

function Sidebar() {
  const [products, setProducts] = useState(true);
  const [reservations, setReservations] = useState(true);
  const [subscriptions, setSubscriptions] = useState(true);
  const [priceRange, setPriceRange] = useState(-1);
  const [category, setCategory] = useState("regular");
  const [stars, setStars] = useState(-1);

  return (
    <div className="sidebar">
      <SidebarSearch />
      <div className="quick-actions-bar"></div>
      <div className="sidebar-controls">
        <div className="filter-buttons">
          <p className="description">Only show sections you wish</p>
          <FilterButton
            title="Products"
            onClick={() => setProducts((v) => !v)}
            selected={products}
          />
          <FilterButton
            title="Reservations"
            onClick={() => setReservations((v) => !v)}
            selected={reservations}
          />
          <FilterButton
            title="Subscriptions"
            onClick={() => setSubscriptions((v) => !v)}
            selected={subscriptions}
          />
        </div>
        <div className="filters">
          <div className="title-container" style={{ marginTop: 10 }}>
            <DollarIcon className="title-icon" />
            <p className="description">Price Range</p>
          </div>
          <FilterButton
            title="All"
            onClick={() => setPriceRange(-1)}
            selected={priceRange == -1}
            isRadio
          />
          <FilterButton
            title="200DH -&gt; 500DH"
            onClick={() => setPriceRange(200)}
            selected={priceRange == 200}
            isRadio
          />
          <FilterButton
            title="500DH -&gt; 1200DH"
            onClick={() => setPriceRange(500)}
            selected={priceRange == 500}
            isRadio
          />
          <FilterButton
            title="&gt; 1200DH"
            onClick={() => setPriceRange(1200)}
            selected={priceRange == 1200}
            isRadio
          />
          <div className="title-container" style={{ marginTop: 10 }}>
            <StackIcon className="title-icon" />
            <p className="description">Per Category</p>
          </div>

          <FilterButton
            title="Regular"
            onClick={() => setCategory("regular")}
            selected={category == "regular"}
            isRadio
          />
          <FilterButton
            title="Delux"
            onClick={() => setCategory("delux")}
            selected={category == "delux"}
            isRadio
          />
          <FilterButton
            title=""
            onClick={() => setCategory("regular")}
            selected={category == "regular"}
            isRadio
          >
            <span
              className="italian-font"
              style={{ fontSize: 20, marginRight: -4 }}
            >
              B
            </span>
            usiness Class
          </FilterButton>

          <div className="title-container" style={{ marginTop: 10 }}>
            <StarIcon className="title-icon" />
            <p className="description">Reviews</p>
          </div>
          {[0].map((v, i) => (
            <StarButton
              key={i}
              count={v}
              selected={stars == v}
              onClick={() => setStars(v)}
            />
          ))}
        </div>
      </div>
      <DesignersSignature />
    </div>
  );
}

export default Sidebar;
