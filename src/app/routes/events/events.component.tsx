import React, { FC } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import "./events.style.scss";

const Events: FC = () => {
  const heroProps: MainHeroProps = {
    hook: "Page under construction",
    subtext: "",
    currentComponentClass: "Events",
  };
  return (
    <>
      <MainHero {...heroProps} />
    </>
  );
};

export default Events;
