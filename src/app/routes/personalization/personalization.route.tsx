import { FC } from "react";

import "./personalization.style.scss";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { MainHero } from "../../components/main-hero/main-hero.component";

const Personalization: FC = () => {
  const mainHeroProps = {
    pic: true,
    hook: "Personalización",
    subtext: "Definir cada detalle para un evento único",
  };

  return (
    <div className="Personalization">
      <Header />
      <MainHero {...mainHeroProps} />
      <Footer />
    </div>
  );
};

export default Personalization;
