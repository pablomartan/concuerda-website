import React, { FC } from "react";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { OvalImage } from "../../components/services/single-service/service.component";
import {
  Customization,
  CustomizationType,
} from "../../components/services/customization/customization.component";
import { Button } from "../../components/button/button.component";
import { ServiceType } from "../../components/services/services.component";
import { useInfinityBody, useInfinityServices } from "../../hooks/useData";

import heroBanner from "../../../assets/vid/landing_infinity_banner.mp4";

import "./infinity.style.scss";

const InfinityHero = () => {
  const mainHeroProps = {
    hook: "infinity",
    subtext: "un evento diferente y atrevido",
  };

  return (
    <div className="MainHero">
      <video src={heroBanner} className="MainHero__bg" autoPlay muted loop />
      <div className="MainHero__text">
        <h1 className="MainHero__hook">{mainHeroProps.hook}</h1>
        <h2 className="MainHero__subtext">{mainHeroProps.subtext}</h2>
      </div>
    </div>
  );
};

const InfinityServices = () => {
  const services = useInfinityServices();

  return (
    <section className="Services">
      <h2 className="Services__title">¿Qué incluye infinity?</h2>
      {services.map((service: ServiceType & { text: string }) => {
        return (
          <div className="Service">
            <div className="Service__banner" />
            <div className="Service__title">{service.name}</div>
            <div className="Service__text">
              {service.name === "solistas" ? (
                <ul>
                  {service.text.split("\n").map((soloist) => (
                    <li>{soloist}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.text}</p>
              )}
            </div>
            <Button url={service.url}>
              {service.name === "solistas" ? "Ver Catálogo" : "Ver Más"}
            </Button>
          </div>
        );
      })}
    </section>
  );
};

const InfinityBody = () => {
  const { title, paragraphs, link, musicTitle, customizations, ovalImage } =
    useInfinityBody();

  return (
    <section className="InfinityBody">
      <article className="InfinityBody__how-it-works">
        <h2 className="InfinityBody__how-it-works__title">{title}</h2>
        <section className="InfinityBody__how-it-works__text">
          {paragraphs.map((paragraph: string) => (
            <p
              key={paragraph}
              className="InfinityBody__how-it-woks__text__paragraph"
            >
              {paragraph}
            </p>
          ))}
        </section>
        <a className="InfinityBody__how-it-works__link" href={link}>
          Más información
        </a>
      </article>
      <article className="InfinityBody__music-types">
        <h2 className="InfinityBody__music-types__title">{musicTitle}</h2>
        <section className="InfinityBody__music-types__info">
          <OvalImage
            picture={ovalImage}
            svgClass="InfinityBody__music-types__oval"
          />
          <div className="InfinityBody__music-types__customizations">
            {customizations.map((custo: CustomizationType) => (
              <Customization key={custo.title} {...custo} />
            ))}
          </div>
        </section>
      </article>
      <article className="InfinityBody__listen">
        <h2 className="InfinityBody__listen__title">escucha infinity</h2>
        <Button url="/videos">Ver videos</Button>
      </article>
    </section>
  );
};

const InfinityBottomBanner = () => {
  return <div className="InfinityBottomBanner" />;
};

const InfinityComponent: FC = () => {
  return (
    <div className="Infinity">
      <Header />
      <InfinityHero />
      <InfinityBody />
      <InfinityServices />
      <InfinityBottomBanner />
      <Footer />
    </div>
  );
};

export default InfinityComponent;
