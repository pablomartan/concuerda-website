import { FC, useEffect, useRef, useState } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { Button } from "../../components/button/button.component";

import cmaLogo from "../../../assets/img/cma_logo_yellow.png";
import bottomBanner from "../../../assets/vid/bodas_velas_vid.mp4";
import heroBanner from "../../../assets/vid/cma_banner.mp4";
import { useNavigate } from "react-router";

import "./cma.style.scss";
import AnimatedTitle from "../../components/animated-title/animated-title.component";
import { animated, useSpring } from "@react-spring/web";
import AppearingComponent from "../../components/appearing-component/appearing.component";

const CmaHero: FC = () => {
  const mainHeroProps = {
    hook: "candlemusic agency",
    subtext: "by trio concuerda",
  };

  return (
    <div className="MainHero">
      <video src={heroBanner} className="MainHero__bg" autoPlay muted loop />
      <div className="MainHero__text">
        <img src={cmaLogo} alt="" />
        <h2 className="MainHero__subtext">{mainHeroProps.subtext}</h2>
      </div>
    </div>
  );
};

const CmaOpacityText: FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [opacity, api] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: window.innerWidth < 1200 ? "-150px" : "-300px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      api.start({
        opacity: 1,
        config: {
          tension: 80,
          friction: 50,
          clamp: true,
        },
      });
    }
  }, [isVisible]);

  return (
    <animated.span style={opacity} ref={ref}>
      {text}
    </animated.span>
  );
};

const CmaServices: FC = () => {
  return (
    <section className="Services">
      <AnimatedTitle
        className="Services__title"
        text="Un nuevo concepto de evento"
      />
      <div className={"Services__service-container"}>
        <div className="Service">
          <p>
            <CmaOpacityText
              text={
                "Una selección de los mejores artistas de Pop, Jazz, Funky, Rock, Flamenco o Soul, en una empresa gestionada por"
              }
            />{" "}
            <span className={"Service__cma-word"}>músicos</span>
          </p>
        </div>
        <div className="Service">
          <p>
            <CmaOpacityText text="Agrupaciones" />{" "}
            <span className="Service__cma-word">premium</span>
            <CmaOpacityText
              text={": String Band TC, Coro Gospel, Bandas, Camerata Concuerda"}
            />
          </p>
        </div>
        <div className="Service">
          <p>
            <CmaOpacityText text="Eventos únicos gracias a servicios como el de" />{" "}
            <span className="Service__cma-word">
              <span className="Service__cma-word-number">1001</span>velas
            </span>{" "}
            <CmaOpacityText text="y el" />{" "}
            <span className="Service__cma-word">piano de cola</span>
          </p>
        </div>
        <div className="Service">
          <p>
            <span className="Service__cma-word">Music Planners</span>
            <CmaOpacityText text=": los músicos de Trio Concuerda te ayudarán a elegir la mejor opción para tu evento" />
          </p>
        </div>
      </div>
      <a href="https://candlemusicagency.com/" target="_blank">
        <AppearingComponent direction="up">
          <Button>Ver Más</Button>
        </AppearingComponent>
      </a>
      <video src={bottomBanner} autoPlay muted loop />
    </section>
  );
};

const Cma: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/cma"), []);
  return (
    <div className="Cma">
      <Header />
      <CmaHero />
      <CmaServices />
      <Footer />
    </div>
  );
};

export default Cma;
