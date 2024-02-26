import { FC, useEffect } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import { useEventsServices } from "../../hooks/useData";
import {
  ServiceType,
  Services,
} from "../../components/services/services.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { useNavigate } from "react-router";

import "./events.style.scss";

const Events: FC = () => {
  const navigate = useNavigate();

  const heroProps: MainHeroProps = {
    hook: "Eventos Trío Concuerda",
    subtext: "variedad y calidad para eventos de todo tipo",
    pic: true,
  };

  const serviceList = useEventsServices();

  useEffect(() => navigate("/events"), []);

  return (
    <div className="Events">
      <Header />
      <MainHero {...heroProps} />
      <Services serviceList={serviceList as ServiceType[]} />
      <Footer />
    </div>
  );
};

export default Events;
