import { FC, ReactNode, forwardRef, useContext, useReducer } from "react";
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
import {
  useSpring,
  animated,
  SpringValue,
  Controller,
} from "@react-spring/web";
import useMeasure from "react-use-measure";

import "./service.style.scss";
import { weddingContext } from "../../../routes/weddings/weddings.component";

type CeremoniaSprings = {
  springOpacity?: {
    opacity: SpringValue<number>;
  };
  springHeight?: {
    height: SpringValue<number>;
  };
  springHeightTypes?: {
    height: SpringValue<number>;
  };
  springOptions?: {
    height: SpringValue<number>;
    width: SpringValue<number>;
  };
};

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

type CeremoniaProps = {
  banner: ReactNode;
  springs: CeremoniaSprings;
};

const CeremoniaSmall = forwardRef<HTMLDivElement, CeremoniaProps>(
  ({ banner, springs }, ref) => {
    const customizations = useWeddingsCustomizations();
    const subtypes = useWeddingsCeremonyTypes();

    const { springOpacity, springHeight } = springs;

    return (
      <>
        {banner}
        <animated.div className={"Ceremonia"} style={{ ...springHeight }}>
          <div className="Ceremonia__wrapper" ref={ref}>
            <animated.div
              className={"Ceremonia__options"}
              style={{ ...springOpacity }}
            >
              <h3 className="Ceremonia__title">Música para la ceremonia</h3>
              {customizations.map((cust: CustomizationType) => {
                return <Customization key={cust.url} {...cust} />;
              })}
            </animated.div>
            <animated.div
              className={"Ceremonia__types"}
              style={{ ...springOpacity }}
            >
              {subtypes.map((subtype) => (
                <CeremoniaSubType {...subtype} />
              ))}
            </animated.div>
          </div>
        </animated.div>
      </>
    );
  },
);

const CeremoniaBig = forwardRef<HTMLDivElement, CeremoniaProps>(
  ({ banner, springs }, ref) => {
    const customizations = useWeddingsCustomizations();
    const subtypes = useWeddingsCeremonyTypes();

    const { springOpacity, springHeightTypes, springOptions } = springs;

    return (
      <>
        <div className="Ceremonia__top-flex">
          <div className="Ceremonia__top-flex__banner">{banner}</div>
          <animated.div style={{ ...springOptions }}>
            <animated.div
              className={"Ceremonia__options"}
              style={{ ...springOpacity }}
              ref={ref}
            >
              <h3 className="Ceremonia__title">Música para la ceremonia</h3>
              {customizations.map((cust: CustomizationType) => {
                return <Customization key={cust.url} {...cust} />;
              })}
            </animated.div>
          </animated.div>
        </div>
        <animated.div
          className={"Ceremonia__types"}
          style={{ ...springOpacity, ...springHeightTypes }}
        >
          {subtypes.map((subtype) => (
            <CeremoniaSubType {...subtype} />
          ))}
        </animated.div>
      </>
    );
  },
);

export const Service: FC<ServiceType> = ({
  className,
  name,
  pic,
  url,
  text,
}) => {
  const [ceremoniaActive, setCeremoniaActive] = useReducer(
    (state) => !state,
    false,
  );

  const weddingComponentWidth = useContext(weddingContext);

  const [ref, { height, width }] = useMeasure();

  const springHeight = useSpring({
    height: ceremoniaActive ? height : 0,
    config: {
      tension: 120,
      friction: 20,
    },
  });

  const [springOptions, springOptionsApi] = useSpring(() => ({
    width: 0,
    height: 0,
    config: {
      tension: 50,
      friction: 50,
    },
  }));

  const springHeightTypes = useSpring({
    height: ceremoniaActive ? 550 : 0,
    config: {
      tension: 150,
      friction: 40,
    },
  });

  const springOpacity = useSpring({
    opacity: ceremoniaActive ? 1 : 0,
    config: {
      tension: 90,
      friction: 10,
    },
  });

  const springOptionsHandler = () => {
    if (!ceremoniaActive) {
      springOptionsApi.start({
        width: width ? width : 700,
        config: { tension: 0 },
      });
      springOptionsApi.start({
        height: height,
        immediate: true,
      });
    } else {
      springOptionsApi.start({
        height: 0,
      });
      springOptionsApi.start({
        width: 0,
        immediate: true,
      });
    }
  };

  return (
    <>
      {name === "ceremonia" ? (
        <div className={"Service".concat(ceremoniaActive ? " active" : "")}>
          {weddingComponentWidth < 1200 ? (
            <CeremoniaSmall
              banner={
                <>
                  <div
                    style={{ backgroundImage: `url("${pic}")` }}
                    className="Service__banner"
                    onClick={setCeremoniaActive}
                  />
                  <h2 className="Service__title">{name}</h2>
                </>
              }
              springs={{ springHeight, springOpacity }}
              ref={ref}
            />
          ) : (
            <CeremoniaBig
              banner={
                <>
                  <div
                    style={{ backgroundImage: `url("${pic}")` }}
                    className="Service__banner"
                    onClick={() => {
                      springOptionsHandler();
                      setCeremoniaActive();
                    }}
                  />
                  <h2 className="Service__title">{name}</h2>
                </>
              }
              springs={{ springHeightTypes, springOpacity, springOptions }}
              ref={ref}
            />
          )}
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
