import React from "react";
import { Button } from "../../button/button.component";
import "./customization.style.scss";
import CustomLink from "../../link/link.component";

export type CustomizationType = {
  title: string;
  subtitle: string;
  url: string;
  banner?: string;
  buttonStyle?: string;
};

export const Customization: React.FC<CustomizationType> = ({
  title,
  subtitle,
  url,
  buttonStyle,
}) => {
  return (
    <div
      className={"Customization".concat(
        title === "infinity" ? " infinity" : "",
      )}
    >
      <CustomLink url={url}>
        <div>
          <h4 className="Customization__title">{title}</h4>
          <h5 className="Customization__subtitle">{subtitle}</h5>
        </div>
        <div>
          <Button
            style={buttonStyle}
            size={innerWidth < 1200 ? "small" : undefined}
          >
            Ver Más
          </Button>
          <p className="Customization__decorative-dot">•</p>
        </div>
      </CustomLink>
    </div>
  );
};
