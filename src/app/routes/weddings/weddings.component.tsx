import { FC } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import {
  ServiceType,
  Services,
} from "../../components/services/services.component";
import { useWeddingsServices } from "../../hooks/useData";
import "./weddings.style.scss";

const Weddings: FC = () => {
  const weddingServiceList = useWeddingsServices();

  const heroProps: MainHeroProps = {
    hook: "bodas trio concuerda",
    subtext: "Variedad y calidad para toda la boda",
    pic: true,
  };

  return (
    <div className="Weddings">
      <Header />
      <MainHero {...heroProps} />
      <Services serviceList={weddingServiceList as ServiceType[]} />
      <Footer />
    </div>
  );
};

export default Weddings;
