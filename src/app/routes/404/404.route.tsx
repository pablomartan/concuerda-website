import React, { FC } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";

const NotFound: FC = () => {
  const heroProps: MainHeroProps = {
    hook: "Página no encontrada",
    subtext: "Disculpa las molestias",
    currentComponentClass: "NotFound",
  };
  return (
    <>
      <MainHero {...heroProps} />
    </>
  );
};

export default NotFound;
