import { FC, useEffect } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { Button } from "../../components/button/button.component";

import cmaLogo from "../../../assets/img/cma_logo_yellow.png";
import bottomBanner from "../../../assets/vid/bodas_velas_vid.mp4";
import heroBanner from "../../../assets/vid/cma_banner.mp4";
import { useNavigate } from "react-router";

import "./cma.style.scss";
import AnimatedTitle from "../../components/animated-title/animated-title.component";

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
            Una selección de los mejores artistas de Pop, Jazz, Funky, Rock,
            Flamenco o Soul, en una empresa gestionada por{" "}
            <span className={"Service__cma-word"}>músicos</span>
          </p>
        </div>
        <div className="Service">
          <p>
            Agrupaciones <span className="Service__cma-word">premium</span>:
            String Band TC, Coro Gospel, Bandas, Camerata Concuerda
          </p>
        </div>
        <div className="Service">
          <p>
            Eventos únicos gracias a servicios como el de{" "}
            <span className="Service__cma-word">1001 velas</span> y el{" "}
            <span className="Service__cma-word">piano de cola</span>
          </p>
        </div>
        <div className="Service">
          <p>
            <span className="Service__cma-word">Music Planners</span>: los
            músicos de Trio Concuerda te ayudarán a elegir la mejor opción para
            tu evento
          </p>
        </div>
      </div>
      <a href="https://candlemusicagency.com/" target="_blank">
        <Button>Ver Más</Button>
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
