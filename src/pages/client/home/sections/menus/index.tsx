import InstagramIcon from "../../../../../components/icons/InstagramIcon";
import MenuIcon from "../../../../../components/icons/MenuIcon";
import LineSquareTitle from "../../../../../components/line-square-title";
import CurvedMenuTitle from "./components/curved";
import MenuItem from "./components/menu-item";
import "./styles.css";

function HomeMenusSection() {
  return (
    <div>
      <div className="section-title-box">
        <MenuIcon className="icon" />
        <h2 className="title">Restaurant Menus</h2>
      </div>
      <div className="menu-container">
        <div className="menu-preface page">
          <div className="metadata">
            <LineSquareTitle title="RESTLUX" squareFilled width="100%" />
            <LineSquareTitle title="Since 1970's" fontWeight={200} />
          </div>
          <CurvedMenuTitle className="curved-title" />
          <div className="first-image" />
          <div className="menus-row">
            <div className="menu-box">
              <div className="title">Main Course</div>
              <div className="line-square-title">
                <div className="square"></div>
                <div className="line"></div>
                <div className="square"></div>
              </div>
              <div className="items">
                <MenuItem
                  name="SPAGHETTI CARBONARA"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={19.99}
                />
                <MenuItem
                  name="MARGERITHA PIZZA"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={19.99}
                />
                <MenuItem
                  name="CHICKEN PARMESAN"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={54.99}
                />
                <MenuItem
                  name="RISOTTO ALLA MILASANE"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={29.99}
                />
              </div>
            </div>
            <div className="menu-box special">
              <div className="title">Special Menu</div>
              <div className="items">
                <MenuItem
                  name="SPAGHETTI CARBONARA"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={19.99}
                />
                <MenuItem
                  name="MARGERITHA PIZZA"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={19.99}
                />
                <MenuItem
                  name="CHICKEN PARMESAN"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={54.99}
                />
                <MenuItem
                  name="RISOTTO ALLA MILASANE"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  price={29.99}
                />
              </div>
            </div>
          </div>
          <div className="follow-and-opening-section">
            <div className="follow-box section">
              Follow us
              <InstagramIcon className="instagram-icon" />
              Restlux
            </div>
            <div className="opening-and-delivery section">
              <p>Opening Hours: 08AM to 12PM</p>
              <p>Delivery: +212 678 487 554</p>
            </div>
          </div>
        </div>
        <div className="menu-content page"></div>
      </div>
    </div>
  );
}

export default HomeMenusSection;
