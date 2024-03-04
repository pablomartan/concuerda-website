import { FC, forwardRef, useEffect, useRef, useState } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { MainHero } from "../../components/main-hero/main-hero.component";

import repertoriePdf from "../../../assets/pdf/repertoire.pdf";
import soloistsPdf from "../../../assets/pdf/solists.pdf";
import soloistsVid from "../../../assets/vid/bodas_velas_vid.mp4";
import decorationVid from "../../../assets/vid/decoration_vid.mp4";

import a from "../../../assets/img/customization/3.jpg";
import b from "../../../assets/img/customization/2.jpg";
import c from "../../../assets/img/customization/1.jpg";
import d from "../../../assets/img/customization/4.jpg";
import e from "../../../assets/img/customization/5.jpg";
import f from "../../../assets/img/customization/6.jpg";
import g from "../../../assets/img/customization/7.jpg";
import h from "../../../assets/img/customization/8.jpg";
import i from "../../../assets/img/customization/9.jpg";
import j from "../../../assets/img/customization/10.jpg";
import k from "../../../assets/img/customization/11.jpg";
import l from "../../../assets/img/customization/12.jpg";
import m from "../../../assets/img/customization/13.jpg";
import n from "../../../assets/img/customization/14.jpg";
import o from "../../../assets/img/customization/15.jpg";

import { Button } from "../../components/button/button.component";

import "./customization.style.scss";
import { capitalize } from "../../utils/utils";
import CustomLink from "../../components/link/link.component";
import { useNavigate } from "react-router";
import { animated, useSpring } from "@react-spring/web";

type CustomizationSubServiceType = {
  name: string;
  hook: string;
  subtext: string;
  video?: string;
};

type CustomizationServiceVideoType = {
  src: string;
  hook: string;
  subtext: string;
  url: string;
};

type CustomizationServiceType = {
  hook: string;
  subtext: string;
  list?: string[];
  url?: string;
  buttonText?: string;
  video?: CustomizationServiceVideoType;
  subServices?: CustomizationSubServiceType[];
  className?: string;
};

type CustomizationPicRefType = {
  src: string;
  style: object;
  index: number;
};

const CustomizationPicRef = forwardRef<
  HTMLImageElement,
  CustomizationPicRefType
>(({ src, index, style }, ref) => {
  return (
    <animated.img
      ref={ref}
      style={{ ...style }}
      src={src}
      alt=""
      className={`CustomizationPage__pic CustomizationPage__pic--index-${index + 1}`}
    />
  );
});

const CustomizationPic: FC<{ src: string; index: number }> = ({
  src,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  const opacity = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      tension: 200,
      friction: 50,
    },
  });

  const [position, positionApi] = useSpring(() => ({
    from: { y: 0 },
    config: {
      tension: 200,
      friction: 20,
    },
  }));

  useEffect(function setPicVisibility() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: window.innerWidth < 1200 ? "0px" : "-300px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      positionApi.start({
        from: { y: 70 },
        to: { y: 0 },
      });
    }
  }, [isVisible]);

  return (
    <CustomizationPicRef
      style={{ ...opacity, ...position }}
      src={src}
      index={index}
      ref={ref}
    />
  );
};

const CustomizationSubService: FC<CustomizationSubServiceType> = ({
  name,
  hook,
  subtext,
  video,
}) => {
  return (
    <div className="CustomizationService__subservice">
      <h3 className="CustomizationService__subservice__name">
        {capitalize(name)}
      </h3>
      <div className="CustomizationService__subservice__text">
        <h4 className="CustomizationService__subservice__hook">{hook}</h4>
        <h5 className="CustomizationService__subservice__subtext">{subtext}</h5>
      </div>
      {video ? (
        <video
          className="CustomizationService__subservice__video"
          autoPlay
          muted
          loop
          src={video}
        />
      ) : null}
    </div>
  );
};

const CustomizationService: FC<CustomizationServiceType> = ({
  hook,
  subtext,
  list,
  url,
  buttonText,
  video,
  subServices,
  className,
}) => {
  const listItemClass = "CustomizationService__list__item";

  return (
    <div
      className={"CustomizationService".concat(
        className ? " " + className : "",
      )}
    >
      <h2 className="CustomizationService__hook">{hook}</h2>
      <h3 className="CustomizationService__subtext">{subtext}</h3>
      {list && list.length > 0 ? (
        <ul className="CustomizationService__list">
          {list.map((item) => {
            return (
              <li key={`${listItemClass}-${item}`} className={listItemClass}>
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
      {url ? (
        <CustomLink className="CustomizationService__button" url={url}>
          <Button>{buttonText ?? "Ver Más"}</Button>
        </CustomLink>
      ) : null}
      {video ? (
        <div className="CustomizationService__video--wrapper">
          <video
            className="CustomizationService__video"
            src={video.src}
            autoPlay
            muted
            loop
          />
          <div className="CustomizationService__video__text">
            <h4 className="CustomizationService__video__hook">{video.hook}</h4>
            <h5 className="CustomizationService__video__subtext">
              {video.subtext}
            </h5>
            <CustomLink url={video.url}>
              <Button>Ver Más</Button>
            </CustomLink>
          </div>
        </div>
      ) : null}

      {subServices && subServices.length > 0
        ? subServices.map((subservice) => (
            <CustomizationSubService {...subservice} />
          ))
        : null}
    </div>
  );
};

const CustomizationPage: FC = () => {
  const navigate = useNavigate();

  const mainHeroProps = {
    pic: true,
    hook: "Personalización",
    subtext: "Definir cada detalle para un evento único",
  };

  const repertorie: CustomizationServiceType = {
    hook: "repertorio",
    subtext: "Definir cada detalle para un evento único",
    list: ["pop", "bossa nova", "clásica", "jazz", "bandas sonoras"],
    url: repertoriePdf,
    className: "repertoire",
  };

  const soloists: CustomizationServiceType = {
    hook: "solistas",
    subtext: "Añade un solista a nuestra agrupación",
    list: ["sopranos", "saxofonistas", "cantantes de pop"],
    buttonText: "Nuestros Solistas",
    url: soloistsPdf,
    video: {
      src: soloistsVid,
      hook: "ceremonia premium",
      subtext: "Coro Gospel con TC, String Band TC, Camerata y Coro Concuerda",
      url: "/cma",
    },
  };

  const decoration: CustomizationServiceType = {
    hook: "decoración y vestuario",
    subtext: "Tú decides: adapta la imagen del grupo a tu evento",
    subServices: [
      {
        name: "decoración",
        hook: "da luz a tu evento",
        subtext: "escenarios con 1000 velas led",
        video: decorationVid,
      },
      {
        name: "vestuario",
        hook: "un look para cada ocasión",
        subtext:
          "cambios de vestimenta con diferentes opciones a elegir. Consulta para escoger el vestuario de tu evento",
      },
    ],
    className: "decoration",
  };

  useEffect(() => navigate("/customization"), []);

  return (
    <div className="CustomizationPage">
      <Header />
      <MainHero {...mainHeroProps} />
      {[a, b, c].map((src, index) => (
        <CustomizationPic src={src} index={index} />
      ))}
      <CustomizationService {...repertorie} />
      {[d, e].map((src, index) => (
        <CustomizationPic src={src} index={index + 3} />
      ))}
      <CustomizationService {...soloists} />
      {[f, g].map((src, index) => (
        <CustomizationPic src={src} index={index + 5} />
      ))}
      {[h, i, j].map((src, index) => (
        <CustomizationPic src={src} index={index + 7} />
      ))}
      <CustomizationService {...decoration} />
      {[k, l, m, n, o].map((src, index) => (
        <CustomizationPic src={src} index={index + 10} />
      ))}
      <Footer />
    </div>
  );
};

export default CustomizationPage;
