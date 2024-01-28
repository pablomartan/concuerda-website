import React, { PropsWithChildren } from "react";
import "./button.style.scss";

export const Button: React.FC<
  PropsWithChildren<{ url: string; className?: string }>
> = ({ url, className, children }) => {
  return (
    <button className={"Button".concat(` ${className}` ?? "")}>
      <a href={url}>{children || "ver más"}</a>
    </button>
  );
};
