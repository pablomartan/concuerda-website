import React, { FC } from "react";

import "./service-modal.style.scss";
import { Customization } from "../customization/customization.component";

const ServiceModal: FC = () => {
  return (
    <div className="ServiceModal">
      <header className="ServiceModal__header">
        <a className="ServiceModal__header__back-link" href="">
          Volver
        </a>
        <h1 className="ServiceModal__header__title">{title}</h1>
        <h2 className="ServiceModal__header__subtitle">{subtitle}</h2>
      </header>
      <main className="ServiceModal__body">
        {customizations.map((customization) => {
          return <Customization {...customization} />;
        })}
        <div className="ServiceModal__body__premium-customization">
          <div className="ServiceModal__body__premium-customization__banner" />
          <Customization {...premiumCustomization} />
        </div>
      </main>
      <footer className="ServiceModal__footer">
        <a className="ServiceModal__footer__link" href={footerLink}>
          {footerTitle}
        </a>
      </footer>
    </div>
  );
};

export default ServiceModal;
