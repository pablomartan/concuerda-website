import React, { PropsWithChildren } from "react";
import "./button.style.scss";

export type ButtonStyle = "black" | "yellow" | "transparent" | "infinity";

export const Button: React.FC<
  PropsWithChildren<{
    style?: ButtonStyle;
    size?: "small";
  }>
> = ({ style, size, children }) => {
  const className = " " + (style ?? "") + " " + (size ?? "");

  return (
    <button
      className={"Button".concat(className.length > 2 ? className : "").trim()}
    >
      {children}
    </button>
  );
};
