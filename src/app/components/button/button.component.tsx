import React, { PropsWithChildren } from "react";
import "./button.style.scss";

export const Button: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <button className={"Button".concat(className ? " " + className : "")}>
      {children}
    </button>
  );
};
