import React, { FC } from "react";
import "./main-hero.style.scss";

export type MainHeroProps = {
  hook: String;
  subtext: String;
  currentComponentClass:
    | "Home"
    | "Weddings"
    | "Events"
    | "Infinity"
    | "CMA"
    | "Customization"
    | "Videos"
    | "Contact"
    | "Projects"
    | "NotFound";
};

export const MainHero: FC<MainHeroProps> = ({
  hook,
  subtext,
  currentComponentClass,
}) => {
  return (
    <div className="MainHero">
      <div className={`MainHero__bg ${currentComponentClass}`} />
      <div className="MainHero__text">
        <h2 className="MainHero__hook">{hook}</h2>
        <h3 className="MainHero__subtext">{subtext}</h3>
      </div>
    </div>
  );
};
