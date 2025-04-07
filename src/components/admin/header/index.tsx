import { useLocation } from "react-router";
import "./styles.css";
import { getSidebarButton } from "../sidebar/buttons";

function AdminHeader() {
  const location = useLocation();

  const route = getSidebarButton(location.pathname);

  return (
    <div id="admin-header">
      <div className="title-container">
        {route.Icon && <route.Icon className="icon" />}
        <h1 className="title">{route.title}</h1>
      </div>
    </div>
  );
}

export default AdminHeader;
