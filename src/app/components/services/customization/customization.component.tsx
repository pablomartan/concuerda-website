import React from "react";
import { Button } from "../../button/button.component";
import "./customization.style.scss";

export type CustomizationType = {
  title: string;
  subtitle: string;
  url: string;
  banner?: ImageBitmapSource;
};

export const Customization: React.FC<CustomizationType> = ({
  title,
  subtitle,
  url,
}) => {
  return (
    <div className="Customization">
      <div>
        <h4 className="Customization__title">{title}</h4>
        <h5 className="Customization__subtitle">{subtitle}</h5>
      </div>
      <div>
        <Button url={url} className="Customization__button" />
        <p className="Customization__decorative-dot">•</p>
      </div>
    </div>
  );
};
