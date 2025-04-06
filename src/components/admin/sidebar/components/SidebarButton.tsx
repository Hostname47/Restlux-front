import { Button } from "../types";
import CollapsibleButton from "./CollapsibleButton";
import ClickableButton from "./ClickableButton";

function SidebarButton({ button }: { button: Button }) {
  return "to" in button ? ( // If button has to (It means it's a link)
    <ClickableButton button={button} />
  ) : (
    <CollapsibleButton button={button} />
  );
}

export default SidebarButton;
