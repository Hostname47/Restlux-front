import { Link, useLocation } from "react-router";
import { getSidebarButton } from "../sidebar/buttons";
import "./styles.css";
import NotificationIcon from "../../icons/NotificationIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import DownChevronIcon from "../../icons/DownchevronIcon";

function AdminHeader() {
  const location = useLocation();

  const route = getSidebarButton(location.pathname);

  return (
    <div id="admin-header">
      <div className="title-container">
        {route.Icon && <route.Icon className="icon" />}
        <h1 className="title">{route.title}</h1>
      </div>

      <div className="right">
        <button className="button">
          <NotificationIcon className="icon" />
        </button>
        <button className="button">
          <SettingsIcon className="icon" />
        </button>
        <div className="user">
          <Link to="" className="user-fullname">
            Mouad Nassri
          </Link>
          <button className="circle-dropdown">
            {Date() ? ( // If the current user doesn't have an image
              <div className="letter-container">
                <span className="letter">M</span>
              </div>
            ) : (
              <div className="image-container">
                <img className="image" />
              </div>
            )}
            <DownChevronIcon className="chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
