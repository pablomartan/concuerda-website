import React, { FC } from "react";
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
    currentComponentClass: "Weddings",
  };

  return (
    <>
      <MainHero {...heroProps} />
      <Services serviceList={weddingServiceList as ServiceType[]} />
    </>
  );
};

export default Weddings;
