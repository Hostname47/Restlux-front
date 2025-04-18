function MenuPageTitle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="0 0 300 100"
        style={{
          width: "300px",
          height: "100px",
          border: "1px dashed #ccc", // for debugging
        }}
      >
        <path
          id="textArc"
          d="M 50 80 A 100 100 0 0 1 250 80"
          fill="none"
          stroke="#999" // for debugging
          strokeWidth="1"
        />

        <text>
          <textPath
            href="#textArc"
            startOffset="50%"
            style={{
              fontSize: "18px",
              fontFamily: "Arial, sans-serif",
              fill: "#000000", // Changed to black for better visibility
              textAnchor: "middle",
            }}
          >
            RESTLUX MENU
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default MenuPageTitle;
