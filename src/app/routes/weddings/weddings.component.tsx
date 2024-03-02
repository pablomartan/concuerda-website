import { FC, createContext, useEffect } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import {
  MainHero,
  MainHeroProps,
} from "../../components/main-hero/main-hero.component";
import {
  ServiceType,
  Services,
} from "../../components/services/services.component";
import { useWeddingsServices } from "../../hooks/useData";
import { useNavigate } from "react-router";
import useMeasure from "react-use-measure";

import "./weddings.style.scss";

export const weddingContext = createContext<number>(0);
const { Provider } = weddingContext;

const Weddings: FC = () => {
  const weddingServiceList = useWeddingsServices();

  const navigate = useNavigate();

  const [ref, { width }] = useMeasure();

  useEffect(() => navigate("/weddings"), []);

  const heroProps: MainHeroProps = {
    hook: "bodas trio concuerda",
    subtext: "Variedad y calidad para toda la boda",
    pic: true,
  };

  return (
    <Provider value={width}>
      <div className="Weddings" ref={ref}>
        <Header />
        <MainHero {...heroProps} />
        <Services serviceList={weddingServiceList as ServiceType[]} />
        <Footer />
      </div>
    </Provider>
  );
};

export default Weddings;
