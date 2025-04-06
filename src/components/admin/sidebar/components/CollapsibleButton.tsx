import RightChevron from "../../../icons/RightChevron";
import { Collapsible } from "../types";

function CollapsibleButton({ button }: { button: Collapsible }) {
  return (
    <button className="button">
      {button.Icon && <button.Icon className="icon" />}
      <span className="title">{button.title}</span>
      <RightChevron className="chevron" />
    </button>
  );
}

export default CollapsibleButton;
