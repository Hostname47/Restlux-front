import InstagramIcon from "../../../../../components/icons/InstagramIcon";
import MenuIcon from "../../../../../components/icons/MenuIcon";
import LineSquareTitle from "../../../../../components/line-square-title";
import TextLogo from "../../../../../components/logos/TextLogo";
import CurvedMenuTitle from "./components/curved";
import HomeMenuBox from "./components/menu";
import "./styles.css";

function HomeMenusSection() {
  return (
    <div id="home-menu-section">
      <div className="section-title-box">
        <MenuIcon className="icon" />
        <h2 className="title">Restaurant Menus</h2>
      </div>
      <div className="menu-container">
        <div className="menu-preface page">
          <div className="metadata">
            <div className="line-square-title" style={{ width: "100%" }}>
              <div className="square"></div>
              <div className="line"></div>
              <TextLogo className="logo" />
              <div className="line"></div>
              <div className="square"></div>
            </div>
            <LineSquareTitle
              title="Crafted with careful precision"
              fontWeight={200}
            />
            <LineSquareTitle title="Since 1970's" fontWeight={200} />
          </div>
          <CurvedMenuTitle className="curved-title" />
          <div className="first-image" />
          <div className="menus-row">
            <HomeMenuBox title="MAIN COURSE" />
            <HomeMenuBox title="Speicial Menu" special />
          </div>
        </div>
        <div className="page-separator" />
        <div className="menu-content page">
          <div className="menus-row">
            <HomeMenuBox title="STARTER" />
            <HomeMenuBox title="PASTA" />
          </div>
          <div className="menus-row">
            <HomeMenuBox title="DESSERT" />
            <HomeMenuBox title="DRINKS" />
          </div>
        </div>
      </div>
      <div className="follow-and-opening-section">
        <div className="follow-box">
          FOLLOW US
          <InstagramIcon className="instagram-icon" />
          <b style={{ color: "#cdad83" }}>RESTLUX</b>
        </div>
        <p>
          Opening Hours : <b>08</b>AM -&gt; <b>12</b>PM
        </p>
        <p>
          Delivery : <b>+212 678 487 554</b>
        </p>
      </div>
    </div>
  );
}

export default HomeMenusSection;
