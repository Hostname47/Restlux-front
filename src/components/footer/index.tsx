import { Link } from "react-router";
import TextLogo from "../logos/TextLogo";
import "./styles.css";

function Footer() {
  return (
    <footer>
      <div className="links-sections-container">
        <div className="brand-section">
          <TextLogo id="footer-text-logo" />
          <h4 className="title-under-logo">The tast of sophistication</h4>
          <p className="description">
            At RestLux, we connect you with the most luxurious dining
            experiences around. Savor elegance, flavor, and unforgettable
            moments—one reservation at a time.
          </p>
        </div>
        <div className="links-section">
          <Link to="" className="link">
            Menus
          </Link>
          <Link to="" className="link">
            Book a table
          </Link>
          <Link to="" className="link">
            Order a meal
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="" className="link">
            Contact
          </Link>
        </div>
        <div className="links-section">
          <Link to="" className="link">
            Chefs
          </Link>
          <Link to="" className="link">
            Testimonials
          </Link>
          <Link to="" className="link">
            Gallery
          </Link>
          <Link to="" className="link">
            Dinner Menu
          </Link>
          <Link to="" className="link">
            Get Directions
          </Link>
        </div>
        <div className="links-section">
          <div className="title-and-content">
            <b className="title">Send an email:</b>
            <p className="title-content">contact@restlux.com</p>
          </div>
          <div className="title-and-content">
            <b className="title">Call us:</b>
            <p className="title-content">+212 6-12-15-48-98</p>
          </div>
        </div>
      </div>
      <p id="copyright-notice">
        © 2024 - {new Date().getFullYear()} <b>Restlux</b>. All rights reserved.{" "}
        <br />
        Restlux® is a registered trademark. Unauthorized use is prohibited.
      </p>
    </footer>
  );
}

export default Footer;
