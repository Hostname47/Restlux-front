function LineSquareTitle({
  title,
  fontWeight = 400,
  squareFilled = false,
  width = "",
}: {
  title: string;
  fontWeight?: number;
  squareFilled?: boolean;
  width?: string;
}) {
  return (
    <div
      className="line-square-title"
      style={{ width: width ? width : "fit-content" }}
    >
      <div className="line"></div>
      <div
        className="square"
        style={{ backgroundColor: squareFilled ? "gray" : "transparent" }}
      ></div>
      <h3 className="title" style={{ fontWeight: fontWeight }}>
        {title}
      </h3>
      <div
        className="square"
        style={{ backgroundColor: squareFilled ? "gray" : "transparent" }}
      ></div>
      <div className="line"></div>
    </div>
  );
}

export default LineSquareTitle;
