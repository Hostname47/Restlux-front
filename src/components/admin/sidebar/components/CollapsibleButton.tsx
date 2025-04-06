import { useState } from "react";
import RightChevron from "../../../icons/RightChevron";
import { Button, Collapsible } from "../types";
import SidebarButton from "./SidebarButton";

function CollapsibleButton({ button }: { button: Button & Collapsible }) {
  const [opened, setOpened] = useState(false);

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
            <SidebarButton button={btn} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CollapsibleButton;
