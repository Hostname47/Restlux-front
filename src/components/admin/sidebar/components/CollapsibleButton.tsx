import { useEffect, useState } from "react";
import RightChevron from "../../../icons/RightChevron";
import { Button, Collapsible } from "../types";
import SidebarButton from "./SidebarButton";
import { useLocation } from "react-router";

function CollapsibleButton({ button }: { button: Button & Collapsible }) {
  const location = useLocation();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    button.buttons.forEach((b) => {
      if ("to" in b && b.to == location.pathname) {
        setOpened(true);
        return;
      }
    });
  }, [location.pathname, button.buttons]);

  return (
    <div className="button-container">
      <button className="button" onClick={() => setOpened((v) => !v)}>
        {button.Icon && <button.Icon className="icon" />}
        <span className="title">{button.title}</span>
        <RightChevron
          className="chevron"
          style={{ transform: `rotate(${opened ? "90deg" : "0deg"})` }}
        />
      </button>
      {opened && (
        <div className="button-collapsible-area">
          {button.buttons.map((btn: Button) => (
            <SidebarButton key={btn.title} button={btn} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CollapsibleButton;
