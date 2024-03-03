import { FC, useEffect } from "react";
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
import { useNavigate } from "react-router";
import AnimatedTitle from "../../components/animated-title/animated-title.component";

const InfinityServices = () => {
  const services = useInfinityServices();

  return (
    <section className="Services">
      <AnimatedTitle
        className="Services__title"
        text={"¿Qué incluye infinity?"}
      />
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
            <CustomLink url={service.url!}>
              <Button>
                {service.name === "solistas" ? "Ver Catálogo" : "Ver Más"}
              </Button>
            </CustomLink>
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
        <CustomLink className="InfinityBody__how-it-works__link" url={link}>
          Más información
        </CustomLink>
      </article>
      <article className="InfinityBody__music-types">
        <AnimatedTitle
          className="InfinityBody__music-types__title"
          text={musicTitle}
        />
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
        <CustomLink url="/videos">
          <Button>Ver videos</Button>
        </CustomLink>
      </article>
    </section>
  );
};

const InfinityBottomBanner = () => {
  return <div className="InfinityBottomBanner" />;
};

const InfinityComponent: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/infinity"), []);

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
