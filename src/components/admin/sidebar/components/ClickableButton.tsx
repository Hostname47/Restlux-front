import { Link, useLocation } from "react-router";
import { Button, Clickable } from "../types";

function ClickableButton({ button }: { button: Button & Clickable }) {
  const location = useLocation();

  return (
    <Link
      target={button.target}
      to={button.to}
      className={`button ${location.pathname == button.to ? "current" : ""}`}
    >
      {button.Icon && <button.Icon className="icon" />}
      <div className="button-title-container">
        <span className="title">{button.title}</span>
        {button.subtitle && <p>{button.subtitle}</p>}
      </div>
    </Link>
  );
}

export default ClickableButton;
