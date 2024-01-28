import React, { FC } from "react";
import "./main-hero.style.scss";

export type MainHeroProps = {
  hook: String;
  subtext: String;
};

export const MainHero: FC<MainHeroProps> = ({ hook, subtext }) => {
  return (
    <div className="MainHero">
      <div className="MainHero__bg" />
      <div className="MainHero__text">
        <h2 className="MainHero__hook">{hook}</h2>
        <h3 className="MainHero__subtext">{subtext}</h3>
      </div>
    </div>
  );
};
