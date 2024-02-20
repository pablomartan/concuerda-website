import { FC } from "react";
import "./main-hero.style.scss";

export type MainHeroProps = {
  pic: boolean;
  video?: string;
  hook: string;
  subtext: string;
};

export const MainHero: FC<MainHeroProps> = ({ hook, subtext, pic, video }) => {
  return (
    <div className="MainHero">
      {pic ? (
        <div className="MainHero__bg" />
      ) : (
        <video
          className="MainHero__bg"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="MainHero__text">
        <h2 className="MainHero__hook">{hook}</h2>
        <h3 className="MainHero__subtext">{subtext}</h3>
      </div>
    </div>
  );
};
