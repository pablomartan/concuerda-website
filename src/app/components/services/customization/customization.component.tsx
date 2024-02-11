import React from "react";
import { Button } from "../../button/button.component";
import "./customization.style.scss";

export type CustomizationType = {
  title: string;
  subtitle: string;
  url: string;
  banner?: string;
};

export const Customization: React.FC<CustomizationType> = ({
  title,
  subtitle,
  url,
}) => {
  return (
    <div
      className={"Customization".concat(
        title === "infinity" ? " infinity" : "",
      )}
    >
      <a href={url} target={url.includes("pdf") ? "_blank" : ""}>
        <div>
          <h4 className="Customization__title">{title}</h4>
          <h5 className="Customization__subtitle">{subtitle}</h5>
        </div>
        <div>
          <Button className="Customization__button">Ver Más</Button>
          <p className="Customization__decorative-dot">•</p>
        </div>
      </a>
    </div>
  );
};
