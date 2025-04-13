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
  theme?: "dark" | "light";
};

const getIcon = (color: MessageColor) => {
  switch (color) {
    case "red":
      return { Icon: ErrorIcon, fill: "#e94b4b" };
    case "green":
      return { Icon: TickIcon, fill: "#35c935" };
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
  theme = "dark",
}: FormMessageProps) {
  const Icon = getIcon(color);

  return content == "" ? null : (
    <div className={`form-message ${color} ${theme}`} style={styles}>
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
