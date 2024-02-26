import { FC, useEffect } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import { Button } from "../../components/button/button.component";

import { useReviews } from "../../hooks/useData";

import "./landing.style.scss";

import heroBanner from "../../../assets/vid/landing_hero_banner.mp4";
import versionesBanner from "../../../assets/vid/contact_banner.mp4";
import soloistsBanner from "../../../assets/vid/landing_soloists_banner.mp4";
import customizationBanner from "../../../assets/vid/videos_banner.mp4";
import infinityBanner from "../../../assets/vid/landing_infinity_banner.mp4";
import cmaBanner from "../../../assets/vid/landing_cma_banner.mp4";

import soloistsPdf from "../../../assets/pdf/solists.pdf";
import repertoirePdf from "../../../assets/pdf/repertoire.pdf";
import { MainHero } from "../../components/main-hero/main-hero.component";
import CustomLink from "../../components/link/link.component";
import { useNavigate } from "react-router";

const LandingServices: FC = () => {
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
      {normalServices.map(({ title, banner, url }) => {
        return (
          <div className="Service">
            <div className="Service__interaction">
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
                <Button>Ver Más</Button>
              </CustomLink>
            </div>
            <video src={banner} className="Service__banner" autoPlay muted />
          </div>
        );
      })}
      <div className="LandingServices__special">
        {specialServices.map(({ title, subtitle, banner, logo, url }) => {
          return (
            <div
              className={"Service--special".concat(
                ` ${title.replace("\n", "-")}`,
              )}
            >
              <CustomLink url={url}>
                <div className="Service__banner--special">
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
                </div>
                <div className="Service__interaction--special">
                  <div className="Service__interaction--special__logo">
                    {logo}
                  </div>
                  <h3 className="Service__subtitle--special">{subtitle}</h3>
                </div>
              </CustomLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Reviews: FC = () => {
  const reviews: string[] = useReviews();

  return (
    <div className="Reviews">
      <h2 className="Reviews__title">Reseñas</h2>
      <div className="Reviews__separation-line" />
      <div className="Reviews--wrapper">
        {reviews.map((review) => {
          return (
            <div className="Reviews__review-wrapper">
              <p className="Reviews__review">"{review}"</p>
              <p className="Reviews__decorative-dot">•</p>
            </div>
          );
        })}
      </div>
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
        <Button className="CookieNotice__acceptance-button">
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

  useEffect(() => navigate("/"), []);

  const mainHeroProps = {
    pic: false,
    video: heroBanner,
    hook: "la mejor música para tu evento",
    subtext: "",
  };

  return (
    <div className="Landing">
      <CookieNotice />
      <Header />
      <MainHero {...mainHeroProps} />
      <LandingServices />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
