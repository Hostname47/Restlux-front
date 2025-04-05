import { CSSProperties } from "react";
import DocumentsIcon from "./../icons/DocumentsIcon";
import ErrorIcon from "./../icons/ErrorIcon";
import TickIcon from "./../icons/TickIcon";
import XIcon from "./../icons/XIcon";
import "./styles.css";

type MessageColor = "red" | "green" | "regular";

type FormMessageProps = {
  color?: MessageColor;
  content: string;
  showIcon?: boolean;
  showCloseButton?: boolean;
  onCloseButtonClick?: () => void;
  styles?: CSSProperties;
};

const getIcon = (color: MessageColor) => {
  switch (color) {
    case "red":
      return { Icon: ErrorIcon, fill: "#a71717" };
    case "green":
      return { Icon: TickIcon, fill: "#2b922b" };
    default:
      return { Icon: DocumentsIcon, fill: "#2a2d2e" };
  }
};

function FormMessage({
  color = "regular",
  showIcon = true,
  content,
  showCloseButton,
  onCloseButtonClick,
  styles,
}: FormMessageProps) {
  const Icon = getIcon(color);

  return (
    <div className={`form-message ${color}`} style={styles}>
      {showIcon && <Icon.Icon className="form-message-icon" fill={Icon.fill} />}
      <p className={`form-message-content ${color}`}>{content}</p>
      {showCloseButton && (
        <button
          className="form-message-close-button"
          onClick={onCloseButtonClick}
        >
          <XIcon className="form-message-close-icon" />
        </button>
      )}
    </div>
  );
}

export default FormMessage;
