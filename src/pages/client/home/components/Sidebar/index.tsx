import { useState } from "react";
import Checkbox from "../../../../../components/checkbox";
import SidebarSearch from "./components/search";
import "./styles.css";
import DesignersSignature from "../../../../../components/design-signature";
import RadioButton from "../../../../../components/radio-button";
import StackIcon from "../../../../../components/icons/StackIcon";
import DollarIcon from "../../../../../components/icons/DollarIcon";

function Sidebar() {
  const [menu, setMenu] = useState(true);
  const [products, setProducts] = useState(true);
  const [reservations, setReservations] = useState(true);
  const [subscriptions, setSubscriptions] = useState(true);
  const [priceRange, setPriceRange] = useState(-1);
  const [category, setCategory] = useState("regular");

  return (
    <div className="sidebar">
      <SidebarSearch />
      <div className="quick-actions-bar"></div>
      <div className="sidebar-controls">
        <div className="filter-buttons">
          <p className="description">
            Only show sections you are concerned using the following filter form
          </p>
          <button className="filter-button" onClick={() => setMenu((v) => !v)}>
            <Checkbox state={menu} onClick={() => setMenu((v) => !v)} />
            Menus
          </button>
          <button
            className="filter-button"
            onClick={() => setProducts((v) => !v)}
          >
            <Checkbox state={products} onClick={() => setProducts((v) => !v)} />
            Products
          </button>
          <button
            className="filter-button"
            onClick={() => setReservations((v) => !v)}
          >
            <Checkbox
              state={reservations}
              onClick={() => setReservations((v) => !v)}
            />
            Reservations
          </button>
          <button
            className="filter-button"
            onClick={() => setSubscriptions((v) => !v)}
          >
            <Checkbox
              state={subscriptions}
              onClick={() => setSubscriptions((v) => !v)}
            />
            Subscriptions
          </button>
        </div>
        <h3 className="title">Filters</h3>
        <div className="filters">
          <div className="title-container">
            <DollarIcon className="title-icon" />
            <p className="description">Price Range</p>
          </div>
          <button className="filter-button" onClick={() => setPriceRange(-1)}>
            <RadioButton
              state={priceRange == -1}
              onClick={() => setPriceRange(-1)}
            />
            All
          </button>
          <button className="filter-button" onClick={() => setPriceRange(200)}>
            <RadioButton
              state={priceRange == 200}
              onClick={() => setPriceRange(200)}
            />
            200DH -&gt; 500DH
          </button>
          <button className="filter-button" onClick={() => setPriceRange(500)}>
            <RadioButton
              state={priceRange == 500}
              onClick={() => setPriceRange(500)}
            />
            500DH -&gt; 1200DH
          </button>
          <button className="filter-button" onClick={() => setPriceRange(1200)}>
            <RadioButton
              state={priceRange == 1200}
              onClick={() => setPriceRange(1200)}
            />
            &gt; 1200DH
          </button>

          <div className="title-container">
            <StackIcon className="title-icon" />
            <p className="description">Per Category</p>
          </div>
          <button
            className="filter-button"
            onClick={() => setCategory("regular")}
          >
            <RadioButton
              state={category == "regular"}
              onClick={() => setCategory("regular")}
            />
            Regular
          </button>
          <button
            className="filter-button"
            onClick={() => setCategory("delux")}
          >
            <RadioButton
              state={category == "delux"}
              onClick={() => setCategory("delux")}
            />
            Delux
          </button>
          <button
            className="filter-button"
            onClick={() => setCategory("business")}
          >
            <RadioButton
              state={category == "business"}
              onClick={() => setCategory("business")}
            />
            <span
              className="italian-font"
              style={{ fontSize: 20, marginRight: -4 }}
            >
              B
            </span>
            usiness Class
          </button>
        </div>
      </div>
      <DesignersSignature />
    </div>
  );
}

export default Sidebar;
