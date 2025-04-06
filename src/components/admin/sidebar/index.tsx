import TextLogo from "../../logos/TextLogo";
import "./styles.css";

function AdminSidebar() {
  return (
    <div id="admin-sidebar">
      <div className="logo-container">
        <TextLogo className="logo" />
      </div>
    </div>
  );
}

export default AdminSidebar;
