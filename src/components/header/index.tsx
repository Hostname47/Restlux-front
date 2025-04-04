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
          <a href="">LINK1</a>
        </li>
        <li>
          <a href="">LINK1</a>
        </li>
        <li>
          <a href="">LINK1</a>
        </li>
        <li>
          <a href="">LINK1</a>
        </li>
        <li>
          <a href="">LINK1</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
