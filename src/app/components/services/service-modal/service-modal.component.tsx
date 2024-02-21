import { FC } from "react";
import {
  Customization,
  CustomizationType,
} from "../customization/customization.component";
import {
  useWeddingsServiceModalsData,
  useEventsServiceModalData,
} from "../../../hooks/useData";
import "./service-modal.style.scss";
import { capitalize } from "../../../utils/utils";
import { Link } from "react-router-dom";

type ServiceModalKeyType =
  | "religious"
  | "civil"
  | "cocktail"
  | "dinner"
  | "party"
  | "corporate"
  | "custom";

type ServiceModalType = {
  hero: string;
  title: string;
  subtitle: string;
  customizations: CustomizationType[];
  premiumCustomization?: CustomizationType;
  footer: { url: string; text: string };
};

export const ServiceModal: FC<{ modal: ServiceModalKeyType }> = ({ modal }) => {
  const modalCustomizations = {
    ...useWeddingsServiceModalsData(),
    ...useEventsServiceModalData(),
  };

  const {
    hero,
    title,
    subtitle,
    customizations,
    premiumCustomization,
    footer: { url: footerLink, text: footerText },
  } = modalCustomizations[modal] as ServiceModalType;

  return (
    <div className="ServiceModal">
      <header
        className="ServiceModal__header"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Link className="ServiceModal__header__back-link" to="/weddings">
          Volver
        </Link>
        <Link className="ServiceModal__header__back-link--cross" to="/weddings">
          ⨉
        </Link>
        <div className="ServiceModal__header--text">
          <h1 className="ServiceModal__header__title">{title}</h1>
          <h2 className="ServiceModal__header__subtitle">
            {capitalize(subtitle)}
          </h2>
        </div>
      </header>
      <main className="ServiceModal__body">
        {customizations.map((customization) => {
          return <Customization {...customization} />;
        })}
        {premiumCustomization ? (
          <div className="ServiceModal__body__premium-customization">
            <video
              className={"ServiceModal__body__premium-customization__banner"}
              src={premiumCustomization["banner"]}
              autoPlay={true}
            />
            <Customization {...premiumCustomization} />
          </div>
        ) : null}
      </main>
      <footer className="ServiceModal__footer">
        {footerText.includes(".") ? (
          <a
            className="ServiceModal__footer__link"
            href={footerLink}
            target="_blank"
          >
            {capitalize(footerText)}
          </a>
        ) : (
          <Link className="ServiceModal__footer__link" to={footerLink}>
            {capitalize(footerText)}
          </Link>
        )}
      </footer>
    </div>
  );
};
