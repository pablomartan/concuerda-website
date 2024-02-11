import React, { PropsWithChildren } from "react";
import "./button.style.scss";

export const Button: React.FC<
  PropsWithChildren<{ url: string; className?: string; target?: string }>
> = ({ className, children }) => {
  return (
    <button className={"Button".concat(className ? " " + className : "")}>
      {children}
    </button>
  );
};
