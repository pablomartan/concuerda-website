import { FC, useEffect, useRef, useState } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import { Button } from "../../components/button/button.component";
import { Outlet, useLocation, useNavigate } from "react-router";
import { ScrollRestoration } from "react-router-dom";

import { MainHero } from "../../components/main-hero/main-hero.component";
import CustomLink from "../../components/link/link.component";

import AnimatedTitle from "../../components/animated-title/animated-title.component";
import AppearingComponent from "../../components/appearing-component/appearing.component";
import { animated, useSpring } from "@react-spring/web";

import heroBanner from "../../../assets/vid/landing_hero_banner.mp4";
import versionesBanner from "../../../assets/vid/contact_banner.mp4";
import soloistsBanner from "../../../assets/vid/landing_soloists_banner.mp4";
import customizationBanner from "../../../assets/vid/videos_banner.mp4";
import infinityBanner from "../../../assets/vid/landing_infinity_banner.mp4";
import cmaBanner from "../../../assets/vid/landing_cma_banner.mp4";

import soloistsPdf from "../../../assets/pdf/solists.pdf";
import repertoirePdf from "../../../assets/pdf/repertoire.pdf";

import "./landing.style.scss";
import { useReviews } from "../../hooks/useData";

const LandingServices: FC = () => {
  const innerWidth = window.innerWidth;

  const normalServices = [
    {
      title: "versiones únicas",
      banner: versionesBanner,
      url: "/videos",
    },
    {
      title: "añade solistas",
      banner: soloistsBanner,
      url: soloistsPdf,
    },
    {
      title: "personalización de repertorio",
      banner: customizationBanner,
      url: repertoirePdf,
    },
  ];

  const specialServices = [
    {
      title: "infinity",
      subtitle: "marca la diferencia",
      banner: infinityBanner,
      logo: "infinity",
      url: "/infinity",
    },
    {
      title: "candlemusic\nagency",
      subtitle: "ilumina tu evento",
      banner: cmaBanner,
      logo: "",
      url: "/cma",
    },
  ];

  return (
    <div className="LandingServices">
      {normalServices.map(({ title, banner, url }, index) => {
        return (
          <div className="Service">
            <AppearingComponent
              direction={index % 2 === 0 ? "right" : "left"}
              className="Service__interaction"
            >
              <div className="Service__title">
                {title.split(" ").map((titleWord, i, array) => {
                  return titleWord === "de" ? null : i > 1 &&
                    i === array.length - 1 ? (
                    <p className="Service__title-word">
                      <span>de</span>
                      <span>{titleWord}</span>
                    </p>
                  ) : (
                    <p className="Service__title-word">{titleWord}</p>
                  );
                })}
              </div>
              <CustomLink url={url}>
                <Button style={innerWidth < 1200 ? "black" : undefined}>
                  Ver Más
                </Button>
              </CustomLink>
            </AppearingComponent>
            <video src={banner} className="Service__banner" autoPlay muted />
          </div>
        );
      })}
      <div className="LandingServices__special">
        {specialServices.map(
          ({ title, subtitle, banner, logo, url }, index) => {
            return (
              <div
                className={"Service--special".concat(
                  ` ${title.replace("\n", "-")}`,
                )}
              >
                <CustomLink url={url}>
                  <AppearingComponent
                    direction={index % 2 === 0 ? "left" : "right"}
                    className="Service__banner--special"
                  >
                    <h2 className="Service__title--special">
                      {title.split("\n").map((word) => (
                        <span className="Service__title--special__word">
                          {word}
                        </span>
                      ))}
                    </h2>
                    <video
                      src={banner}
                      className="Service__banner--special__video"
                      autoPlay
                      muted
                    />
                  </AppearingComponent>
                  <AppearingComponent
                    direction={index % 2 === 0 ? "right" : "left"}
                    className="Service__interaction--special"
                  >
                    <div className="Service__interaction--special__logo">
                      {logo}
                    </div>
                    <h3 className="Service__subtitle--special">{subtitle}</h3>
                  </AppearingComponent>
                </CustomLink>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

const Reviews: FC = () => {
  const reviews: string[] = useReviews();
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const [spring, api] = useSpring(() => ({
    width: "0",
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      api.start({
        width: "100%",
        config: {
          tension: 500,
          friction: 80,
        },
      });
    }
  }, [isVisible]);

  return (
    <div className="Reviews">
      <AnimatedTitle
        className="Reviews__title"
        text={"Reseñas"}
        marginRight={innerWidth < 1200 ? 16 : 26}
      />
      <div className="Reviews__separation-line" />
      <animated.div
        className="Reviews--wrapper"
        style={{ ...spring }}
        ref={ref}
      >
        {reviews.map((review) => {
          return (
            <AppearingComponent
              className="Reviews__review-wrapper"
              direction="up"
              delay={300}
            >
              <p className="Reviews__review">"{review}"</p>
              <p className="Reviews__decorative-dot">•</p>
            </AppearingComponent>
          );
        })}
      </animated.div>
      <div className="Reviews__separator" />
      <div className="Reviews__collabs" />
    </div>
  );
};

const CookieNotice: FC = () => {
  return (
    <div className="CookieNotice">
      <div className="CookieNotice__wrapper">
        <div className="CookieNotice__wrapper--text">
          <div className="CookieNotice__icon" />
          <div className="CookieNotice__text">
            Utilizamos cookies para personalizar su experiencia. Si continúa
            navegando, consideramos que acepta su uso.
          </div>
        </div>
        <Button style="transparent">
          <a href="" target="">
            Aceptar cookies
          </a>
        </Button>
      </div>
    </div>
  );
};

const Home: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => navigate("/"), []);

  const mainHeroProps = {
    pic: false,
    video: heroBanner,
    hook: "la mejor música para tu evento",
    subtext: "",
  };

  return (
    <>
      <ScrollRestoration />
      {pathname !== "/" ? (
        <Outlet />
      ) : (
        <div className="Landing">
          <CookieNotice />
          <Header />
          <MainHero {...mainHeroProps} />
          <LandingServices />
          <Reviews />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
