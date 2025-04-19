import SearchIcon from "../../../../../../../components/icons/SearchIcon";
import "./styles.css";

function SidebarSearch() {
  return (
    <div id="client-sidebar-search">
      <SearchIcon className="icon" />
      <input
        type="search"
        className="input"
        placeholder="search for anything"
      />
    </div>
  );
}

export default SidebarSearch;
