import { useEffect, useState } from "react";
import TextLogo from "../../logos/TextLogo";
import "./styles.css";
import { allButtons, getSidebarButton, sidebarFlatButtons } from "./buttons";
import SearchIcon from "../../icons/SearchIcon";
import SidebarButton from "./components/SidebarButton";
import { Button } from "./types";
import { useLocation } from "react-router";

function AdminSidebar() {
  const location = useLocation();
  const [buttons, setButtons] = useState<Button[]>(allButtons);
  const [query, setQuery] = useState("");

  const searchFor = (query: string) => {
    if (query.trim()) {
      setButtons(() =>
        sidebarFlatButtons.filter((b) =>
          b.keywords.toUpperCase().includes(query.toUpperCase())
        )
      );
    } else {
      setButtons(allButtons);
    }
  };

  const route = getSidebarButton(location.pathname);

  useEffect(() => {
    searchFor(query);
  }, [query]);

  return (
    <div id="admin-sidebar">
      <div className="logo-container">
        <TextLogo className="logo" />
      </div>
      <div className="search">
        <input
          type="search"
          value={query}
          onChange={(v) => setQuery(v.target.value)}
          className="input"
          placeholder="Search for anything.."
        />
        <SearchIcon className="icon" />
      </div>
      <div className="buttons-box">
        {buttons.map((button) => (
          <SidebarButton key={button.title} button={button} />
        ))}
      </div>
    </div>
  );
}

export default AdminSidebar;
