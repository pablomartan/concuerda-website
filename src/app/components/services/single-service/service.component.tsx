import { FC, Ref, useEffect, useReducer } from "react";
import {
  Customization,
  CustomizationType,
} from "../customization/customization.component";
import {
  useWeddingsCustomizations,
  useWeddingsCeremonyTypes,
} from "../../../hooks/useData";
import { ServiceType } from "../services.component";
import CustomLink from "../../link/link.component";
import { useSpring, animated, SpringValue } from "@react-spring/web";

import "./service.style.scss";
import useMeasure from "react-use-measure";

export const OvalImage: FC<{ picture: string; svgClass: string }> = ({
  picture,
  svgClass,
}) => {
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

const CeremoniaSubType: FC<{
  url: string;
  picture: string;
  title: string;
}> = ({ url, picture, title }) => {
  return (
    <CustomLink className="Ceremonia__subtype" url={url}>
      <div className="Ceremonia__subtype--wrapper">
        <OvalImage picture={picture} svgClass="Ceremonia__subtype--pic__svg" />
        <h4 className="Ceremonia__subtype--title">{title}</h4>
      </div>
    </CustomLink>
  );
};

type CeremoniaSprings = {
  springOpacity: {
    opacity: SpringValue<number>;
  };
  springHeight: {
    height: SpringValue<number>;
  };
};

const Ceremonia: FC<{
  active: boolean;
  springs: CeremoniaSprings;
  smallRef: Ref<HTMLDivElement>;
}> = ({ active, springs, smallRef }) => {
  const customizations = useWeddingsCustomizations();
  const subtypes = useWeddingsCeremonyTypes();

  const { springOpacity, springHeight } = springs;

  return (
    <animated.div className={"Ceremonia small"} style={{ ...springHeight }}>
      <div className="Ceremonia__wrapper" ref={smallRef}>
        <animated.div
          className={"Ceremonia__options".concat(active ? "" : " inactive")}
          style={{ ...springOpacity }}
        >
          <h3 className="Ceremonia__title">Música para la ceremonia</h3>
          {customizations.map((cust: CustomizationType) => {
            return <Customization key={cust.url} {...cust} />;
          })}
        </animated.div>
        <animated.div
          className={"Ceremonia__types".concat(active ? "" : " inactive")}
          style={{ ...springOpacity }}
        >
          {subtypes.map((subtype) => (
            <CeremoniaSubType {...subtype} />
          ))}
        </animated.div>
      </div>
    </animated.div>
  );
};

export const Service: FC<ServiceType> = ({
  className,
  name,
  pic,
  url,
  text,
}) => {
  const [ceremoniaActive, setCeremoniaActive] = useReducer(
    (state) => !state,
    true,
  );

  const [ref, { height }] = useMeasure();

  const springHeight = useSpring({
    height: ceremoniaActive ? height : 0,
    config: {
      tension: 120,
      friction: 20,
    },
  });

  const springOpacity = useSpring({
    opacity: ceremoniaActive ? 1 : 0,
    config: {
      tension: 90,
      friction: 6,
    },
  });

  return (
    <>
      {name === "ceremonia" ? (
        <div className={"Service".concat(ceremoniaActive ? " active" : "")}>
          <div
            style={{ backgroundImage: `url("${pic}")` }}
            className="Service__banner"
            onClick={setCeremoniaActive}
          />
          <h2 className="Service__title">{name}</h2>
          <Ceremonia
            active={ceremoniaActive}
            springs={{ springHeight, springOpacity }}
            smallRef={ref}
          />
        </div>
      ) : (
        <div className={"Service".concat(className ? " " + className : "")}>
          <CustomLink url={url!}>
            <div
              style={{ backgroundImage: `url("${pic}")` }}
              className="Service__banner"
            />
            <h2 className="Service__title">{name}</h2>
            <p>{text}</p>
          </CustomLink>
        </div>
      )}
    </>
  );
};
