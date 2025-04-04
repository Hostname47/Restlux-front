import TextLogo from "../logos/TextLogo";
import "./styles.css";

function Header() {
  return (
    <header id="header">
      <a href="">
        <TextLogo id="header-text-logo" />
      </a>
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">FOODS</a>
        </li>
        <li>
          <a href="">RESERVATIONS</a>
        </li>
        <li>
          <a href="">SUBSCRIPTIONS</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
