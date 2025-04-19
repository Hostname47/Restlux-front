import { HTMLElementType } from "react";

type SmartLineSquareTitleType = {
  format?: string;
  Type?: HTMLElementType;
  title: string;
  color?: string;
  itemsColor?: string;
  fontFamily: string;
  fontSize?: number;
  linesWidth?: number;
  firstLineWidth?: number;
  squaresFilled?: boolean;
};

function SmartLineSquareTitle({
  format = "lstsl",
  Type = "h2",
  title,
  color = "#cdad83",
  itemsColor = "#cdad83",
  fontFamily,
  fontSize = 24,
  linesWidth = 80,
  firstLineWidth = 0,
  squaresFilled = false,
  ...props
}: SmartLineSquareTitleType) {
  const components = format.split("");
  console.log(components);
  return (
    <div className="line-square-title" {...props}>
      {components.map((component, index) => {
        switch (component) {
          case "l":
            return (
              <div
                className="line"
                style={{
                  width:
                    index == 0
                      ? firstLineWidth
                        ? firstLineWidth
                        : linesWidth
                      : linesWidth,
                  maxWidth:
                    index == 0
                      ? firstLineWidth
                        ? firstLineWidth
                        : linesWidth
                      : linesWidth,
                  backgroundColor: itemsColor ?? "currentcolor",
                }}
              />
            );
          case "s":
            return (
              <div
                className="square"
                style={{
                  borderColor: itemsColor ?? "currentcolor",
                  backgroundColor: squaresFilled ? itemsColor : "",
                }}
              />
            );
          default:
            return (
              <Type
                className="title"
                style={{
                  fontFamily: fontFamily ?? "initial",
                  fontSize: fontSize ?? "",
                  color: color ?? "currentcolor",
                }}
              >
                {title}
              </Type>
            );
        }
      })}
    </div>
  );
}

export default SmartLineSquareTitle;
