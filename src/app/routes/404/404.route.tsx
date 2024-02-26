import { FC, useEffect } from "react";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { useNavigate } from "react-router";

import "./404.style.scss";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const heroProps: MainHeroProps = {
    pic: true,
    hook: "Página no encontrada",
    subtext: "Disculpa las molestias",
  };

  useEffect(() => navigate("/404"), []);

  return (
    <div className="NotFound">
      <Header />
      <MainHero {...heroProps} />
      <Footer />
    </div>
  );
};

export default NotFound;
