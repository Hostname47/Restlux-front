import { CSSProperties, HTMLElementType } from "react";

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
  style?: CSSProperties | undefined;
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
  style,
  ...props
}: SmartLineSquareTitleType) {
  const components = format.split("");
  return (
    <div className="line-square-title" style={style} {...props}>
      {components.map((component, index) => {
        switch (component) {
          case "l":
            return (
              <div
                className="line"
                key={index}
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
                key={index}
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
                key={index}
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
