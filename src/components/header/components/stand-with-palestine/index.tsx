import "./styles.css";

function TopMessageBar({
  shown = false,
  message,
}: {
  shown?: boolean;
  message: string;
}) {
  return (
    <div id="top-message-bar" style={{ display: shown ? "flex" : "none" }}>
      <p color="#9ba1ad" className="message">
        {message}
      </p>
    </div>
  );
}

export default TopMessageBar;
