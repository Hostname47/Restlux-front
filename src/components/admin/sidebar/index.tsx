import HomeIcon from "../../icons/HomeIcon";
import OrderIcon from "../../icons/OrderIcon";
import SearchIcon from "../../icons/SearchIcon";
import StatisticsIcon from "../../icons/StatisticsIcon";
import TextLogo from "../../logos/TextLogo";
import SidebarButton from "./components/SidebarButton";
import "./styles.css";
import { Button } from "./types";

const buttons: Button[] = [
  {
    title: "Dashboard",
    to: "/admin/dashboard",
    Icon: HomeIcon,
  },
  {
    title: "Statistics",
    to: "/admin/statistics",
    Icon: StatisticsIcon,
  },
  {
    title: "Orders",
    Icon: OrderIcon,
    buttons: [
      {
        title: "List orders",
        to: "/admin/orders",
      },
    ],
  },
];

function AdminSidebar() {
  return (
    <div id="admin-sidebar">
      <div className="logo-container">
        <TextLogo className="logo" />
      </div>
      <div className="search">
        <input
          type="search"
          className="input"
          placeholder="Search for anything.."
        />
        <SearchIcon className="icon" />
      </div>
      <div className="buttons-box">
        {buttons.map((button) => (
          <SidebarButton button={button} />
        ))}
      </div>
    </div>
  );
}

export default AdminSidebar;
