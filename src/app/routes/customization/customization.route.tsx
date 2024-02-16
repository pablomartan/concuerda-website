import { FC } from "react";

import "./customization.style.scss";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { MainHero } from "../../components/main-hero/main-hero.component";

import a from "../../../assets/img/customization/1.jpg";
import b from "../../../assets/img/customization/2.jpg";
import c from "../../../assets/img/customization/3.jpg";

const CustomizationPic: FC<{ src: string; index: number }> = ({
  src,
  index,
}) => {
  return (
    <img
      src={src}
      alt=""
      className={`Customization__pic Customization__pic--index-${index + 1}`}
    />
  );
};

const Customization: FC = () => {
  const mainHeroProps = {
    pic: true,
    hook: "Personalización",
    subtext: "Definir cada detalle para un evento único",
  };

  return (
    <div className="Customization">
      <Header />
      <MainHero {...mainHeroProps} />
      {[a, b, c].map((src, index) => (
        <CustomizationPic src={src} index={index} />
      ))}
      <Footer />
    </div>
  );
};

export default Customization;
