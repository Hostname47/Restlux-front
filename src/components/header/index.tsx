import { Link } from "react-router";
import TextLogo from "../logos/TextLogo";
import "./styles.css";
import LoginIcon from "../icons/LoginIcon";
import UserIcon from "../icons/UserIcon";
import HomeIcon from "../icons/HomeIcon";
import MessageIcon from "../icons/MessageIcon";
import CalendarIcon from "../icons/CalendarIcon";
import MenuIcon from "../icons/MenuIcon";
import SubscriptionIcon from "../icons/SubscriptionIcon";
import LanguageIcon from "../icons/LanguageIcon";
import DownChevronIcon from "../icons/DownchevronIcon";
import SearchIcon from "../icons/SearchIcon";
import { useAppSelector } from "../../app/hooks";
import LinkIcon from "../icons/LinkIcon";
import LogoutButton from "./components/logout-button";
import TopMessageBar from "./components/stand-with-palestine";

function Header() {
  const { user } = useAppSelector((state) => state.global);

  return (
    <header>
      <TopMessageBar
        shown
        message="🕊️ Stand with Palestine — Stop the Genocide"
      />
      <div id="header">
        <Link to="/" className="flex">
          <TextLogo id="header-text-logo" />
        </Link>
        <ul>
          {user && user.isAdmin && (
            <li>
              <Link to="/">
                <LinkIcon className="icon" />
                ADMIN
              </Link>
            </li>
          )}
          <li>
            <Link to="/home">
              <HomeIcon className="icon" />
              HOME
            </Link>
          </li>
          <li>
            <Link to="/menus">
              <MenuIcon className="icon" />
              MENUS
            </Link>
          </li>
          <li>
            <Link to="/reservations">
              <CalendarIcon className="icon" />
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link to="subscriptions">
              <SubscriptionIcon className="icon" />
              SUBSCRIPTIONS
            </Link>
          </li>
          <li>
            <Link to="contact">
              <MessageIcon className="icon" />
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="right align-center">
          <button className="button-style-1">
            <SearchIcon className="icon" />
          </button>
          <div className="separator-style-1"></div>
          <button className="button-style-1">
            <LanguageIcon className="icon" />
          </button>

          <div className="separator-style-1"></div>
          <div className="auth">
            {user ? (
              <>
                <button className="button-style-1">
                  <UserIcon style={{ width: 26, height: 26 }} />
                  {user.fullname}
                  <DownChevronIcon style={{ width: 12, height: 12 }} />
                </button>
                <div className="separator-style-1"></div>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link to="/login" className="button-style-1">
                  <LoginIcon className="icon" />
                  SIGN IN
                </Link>
                <Link to="/sign-up" className="button-style-1 whitebg">
                  <UserIcon className="icon" />
                  SIGN UP
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
