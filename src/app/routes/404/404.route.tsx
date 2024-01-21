import React, { FC } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

const NotFound: FC = () => {
  const heroProps: MainHeroProps = {
    hook: "Página no encontrada",
    subtext: "Disculpa las molestias",
    currentComponentClass: "NotFound",
  };
  return (
    <>
      <Header />
      <MainHero {...heroProps} />
      <Footer />
    </>
  );
};

export default NotFound;
