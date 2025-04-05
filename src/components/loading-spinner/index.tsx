import SpinnerInner from "./components/SpinnerInner";
import SpinnerOutline from "./components/SpinnerOutline";
import "./styles.css";

function LoadingSpinner({
  shown = false,
  size = 16,
  color = "white",
  absolute = false,
}: {
  shown?: boolean;
  size?: number;
  color?: string;
  absolute?: boolean;
}) {
  return (
    <div
      className="loading-spinner-container"
      style={{
        width: `${size}px`,
        height: `${size}px,`,
        display: shown ? "flex" : "none",
        opacity: shown ? 1 : 0,
        ...(absolute && {
          position: "absolute",
          width: "calc(100% - 4px)",
          height: "calc(100% - 4px)",
        }),
      }}
    >
      <SpinnerOutline className="loading-spinner-outline" />
      <SpinnerInner className="loading-spinner-inner" fill={color} />
    </div>
  );
}

export default LoadingSpinner;
