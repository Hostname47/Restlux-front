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
import UserImage from "./components/user-image";

function Header() {
  const { user, isAdmin } = useAppSelector((state) => state.global);

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
          {user && isAdmin == true && (
            <li>
              <Link to="/admin/dashboard">
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
            <Link to="/home#home-menu-section">
              <MenuIcon className="icon" />
              MENUS
            </Link>
          </li>
          <li>
            <Link to="/home#home-reservations">
              <CalendarIcon className="icon" />
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link to="/home#subscriptions">
              <SubscriptionIcon className="icon" />
              SUBSCRIPTIONS
            </Link>
          </li>
          <li>
            <Link to="/contact">
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
                <button className="button-style-1" style={{ gap: 8 }}>
                  <UserImage user={user} />
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
                <Link to="/signup" className="button-style-1 whitebg">
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
