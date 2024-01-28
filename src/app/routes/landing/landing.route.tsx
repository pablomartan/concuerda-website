import React, { FC } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import heroBanner from "../../../assets/vid/landing_hero_banner.mp4";
import versionesBanner from "../../../assets/vid/landing_soloists_banner.mp4";
import soloistsBanner from "../../../assets/vid/landing_soloists_banner.mp4";
import customizationBanner from "../../../assets/vid/landing_soloists_banner.mp4";
import infinityBanner from "../../../assets/vid/landing_infinity_banner.mp4";
import cmaBanner from "../../../assets/vid/landing_cma_banner.mp4";
import "./landing.style.scss";
import { Button } from "../../components/button/button.component";

const LandingHero: FC = () => {
  return (
    <div className="MainHero">
      <video src={heroBanner} autoPlay={true} className="MainHero__bg" />
      <div className="MainHero__text">
        <h1 className="MainHero__hook">la mejor música para tu evento</h1>
        <h2 className="MainHero__subtext"></h2>
      </div>
    </div>
  );
};

const LandingServices: FC = () => {
  const normalServices = [
    {
      title: "versiones únicas",
      banner: versionesBanner,
      url: "",
    },
    {
      title: "añade solistas",
      banner: soloistsBanner,
      url: "",
    },
    {
      title: "personalización de repertorio",
      banner: customizationBanner,
      url: "",
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
              <h2 className="Service__title">
                {title.split(" ").map((titleWord) => {
                  return (
                    <span
                      className={"Service__title--span".concat(
                        titleWord === "de" ? " de" : "",
                      )}
                    >
                      {titleWord}
                    </span>
                  );
                })}
              </h2>
              <Button url={url} />
            </div>
            <video src={banner} className="Service__banner" autoPlay />
          </div>
        );
      })}
      {specialServices.map(({ title, subtitle, banner, logo, url }) => {
        return (
          <div
            className={"Service--special".concat(
              ` ${title.replace("\n", "-")}`,
            )}
          >
            <a href={url}>
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
            </a>
          </div>
        );
      })}
    </div>
  );
};

const Reviews: FC = () => {
  return <></>;
};

const Home: FC = () => {
  return (
    <div className="Landing">
      <Header />
      <LandingHero />
      <LandingServices />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
