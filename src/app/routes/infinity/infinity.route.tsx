import { FC } from "react";
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
import { MainHero } from "../../components/main-hero/main-hero.component";
import CustomLink from "../../components/link/link.component";
import AnimatedTitle from "../../components/animated-title/animated-title.component";
import AppearingComponent from "../../components/appearing-component/appearing.component";

const InfinityServices = () => {
  const services = useInfinityServices();

  return (
    <section className="Services">
      <AnimatedTitle
        className="Services__title"
        text={"¿Qué incluye infinity?"}
      />
      {services.map((service: ServiceType & { text: string }, index) => {
        return (
          <div className="Service">
            <div className="Service__banner" />
            <AppearingComponent
              direction={index % 2 === 0 ? "left" : "right"}
              className="Service__content-wrapper"
            >
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
              <CustomLink url={service.url!}>
                <Button>
                  {service.name === "solistas" ? "Ver Catálogo" : "Ver Más"}
                </Button>
              </CustomLink>
            </AppearingComponent>
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
        <AnimatedTitle
          className="InfinityBody__how-it-works__title"
          text={title}
        />
        <AppearingComponent direction="up">
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
        </AppearingComponent>
        <AppearingComponent
          className="InfinityBody__how-it-works__link"
          direction="up"
        >
          <CustomLink url={link}>Más información</CustomLink>
        </AppearingComponent>
      </article>
      <article className="InfinityBody__music-types">
        <AnimatedTitle
          className="InfinityBody__music-types__title"
          text={musicTitle}
        />
        <section className="InfinityBody__music-types__info">
          <AppearingComponent
            direction="right"
            className="InfinityBody__music-types__oval--wrapper"
          >
            <OvalImage
              picture={ovalImage}
              svgClass="InfinityBody__music-types__oval"
            />
          </AppearingComponent>
          <div className="InfinityBody__music-types__customizations">
            {customizations.map((custo: CustomizationType) => (
              <AppearingComponent direction="up">
                <Customization key={custo.title} {...custo} />
              </AppearingComponent>
            ))}
          </div>
        </section>
      </article>
      <article className="InfinityBody__listen">
        <AppearingComponent direction="up">
          <h2 className="InfinityBody__listen__title">escucha infinity</h2>
        </AppearingComponent>
        <AppearingComponent
          direction="up"
          className="InfinityBody__listen__button"
        >
          <CustomLink url="/videos">
            <Button style="infinity">Ver videos</Button>
          </CustomLink>
        </AppearingComponent>
      </article>
    </section>
  );
};

const InfinityBottomBanner = () => {
  return <div className="InfinityBottomBanner" />;
};

const InfinityComponent: FC = () => {
  const mainHeroProps = {
    pic: false,
    hook: "infinity",
    subtext: "un evento diferente y atrevido",
    video: heroBanner,
  };

  return (
    <div className="Infinity">
      <Header />
      <MainHero {...mainHeroProps} />
      <InfinityBody />
      <InfinityServices />
      <InfinityBottomBanner />
      <Footer />
    </div>
  );
};

export default InfinityComponent;
