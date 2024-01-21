import React, { Dispatch, SetStateAction, useReducer, useState } from "react";
import {
  Customization,
  CustomizationType,
} from "../customization/customization.component";
import "./service.style.scss";
import { ServiceModal } from "../service-modal/service-modal.component";
import {
  useWeddingsCustomizations,
  useWeddingsCeremonyTypes,
} from "../../../hooks/useData";
import { ServiceType } from "../services.component";

const OvalImage: React.FC<any> = ({ picture, svgClass }) => {
  return (
    <svg className={svgClass} viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <clipPath id="clip">
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="55"
            transform="rotate(40, 50, 50)"
          />
        </clipPath>
      </defs>
      <image
        width="100%"
        height="100%"
        clipPath="url(#clip)"
        xlinkHref={picture}
      />
    </svg>
  );
};

const CeremoniaSubType: React.FC<{
  url: string;
  picture: string;
  title: string;
}> = ({ url, picture, title }) => {
  return (
    <a className="Ceremonia__subtype" href={url}>
      <div className="Ceremonia__subtype--wrapper">
        <OvalImage
          className="Ceremonia__subtype--pic"
          picture={picture}
          svgClass="Ceremonia__subtype--pic__svg"
        />
        <h4 className="Ceremonia__subtype--title">{title}</h4>
      </div>
    </a>
  );
};

const Ceremonia: React.FC<{
  active: boolean;
}> = ({ active }) => {
  const customizations = useWeddingsCustomizations();
  const subtypes = useWeddingsCeremonyTypes();

  return (
    <div className="Ceremonia">
      <div className={"Ceremonia__options".concat(active ? "" : " inactive")}>
        <h3 className="Ceremonia__title">Música para la ceremonia</h3>
        {customizations.map((cust: CustomizationType) => {
          return <Customization key={cust.url} {...cust} />;
        })}
      </div>
      <div className={"Ceremonia__types".concat(active ? "" : " inactive")}>
        {subtypes.map((subtype) => (
          <CeremoniaSubType {...subtype} />
        ))}
      </div>
    </div>
  );
};

export const Service: React.FC<ServiceType> = ({ name, pic }) => {
  const [ceremoniaActive, setCeremoniaActive] = useReducer(
    (state) => !state,
    false,
  );

  return (
    <>
      {name === "ceremonia" ? (
        <div className="Service">
          <div className="Ceremonia--wrapper" onClick={setCeremoniaActive}>
            <img src={pic} className="Service__banner" alt="" />
            <h2 className="Service__title">{name}</h2>
          </div>
          <Ceremonia active={ceremoniaActive} />
        </div>
      ) : (
        <div className="Service">
          <img src={pic} className="Service__banner" alt="" />
          <h2 className="Service__title">{name}</h2>
        </div>
      )}
    </>
  );
};
