import { Link } from "react-router";
import { Clickable } from "../types";

function ClickableButton({ button }: { button: Clickable }) {
  return (
    <Link to={button.to} className="button">
      {button.Icon && <button.Icon className="icon" />}
      <div className="button-title-container">
        <span className="title">{button.title}</span>
        {button.subtitle && <p>{button.subtitle}</p>}
      </div>
    </Link>
  );
}

export default ClickableButton;
