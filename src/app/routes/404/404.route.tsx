import { FC } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

import "./404.style.scss";

const NotFound: FC = () => {
  const heroProps: MainHeroProps = {
    pic: true,
    hook: "Página no encontrada",
    subtext: "Disculpa las molestias",
  };
  return (
    <div className="NotFound">
      <Header />
      <MainHero {...heroProps} />
      <Footer />
    </div>
  );
};

export default NotFound;
