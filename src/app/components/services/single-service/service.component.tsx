import React, { useState } from "react";
import { ICustomization, IService } from "../../../../custom";
import { Customization } from "../customization/customization.component";
import useData from "../../../hooks/useData";
import "./service.style.scss";

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

const Ceremonia: React.FC<{ active: boolean }> = ({ active }) => {
  const {
    customizations,
    religiosaPic: religiosa,
    civilPic: civil,
  } = useData();

  const subtypes = [
    {
      url: "#",
      picture: religiosa,
      title: "religiosa",
    },
    {
      url: "#",
      picture: civil,
      title: "civil",
    },
  ];

  return (
    <div className="Ceremonia">
      <div className={"Ceremonia__options".concat(active ? "" : " inactive")}>
        <h3 className="Ceremonia__title">Música para la ceremonia</h3>
        {customizations.map((cust: ICustomization) => {
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

export const Service: React.FC<IService> = ({ name, pic }) => {
  const [ceremoniaActive, setCeremoniaActive] = useState(false);

  const toggleActive = () => {
    setCeremoniaActive(!ceremoniaActive);
  };

  return (
    <>
      {name === "ceremonia" ? (
        <div className="Ceremonia--wrapper">
          <div className="Service" onClick={toggleActive}>
            <img src={pic} className="Service__banner" alt="" />
            <h2 className="Service__title">{name}</h2>
          </div>
          {name === "ceremonia" && <Ceremonia active={ceremoniaActive} />}
        </div>
      ) : (
        <div className="Service" onClick={toggleActive}>
          <img src={pic} className="Service__banner" alt="" />
          <h2 className="Service__title">{name}</h2>
        </div>
      )}
    </>
  );
};
