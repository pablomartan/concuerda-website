import { FC } from "react";

import "./personalization.style.scss";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

const Personalization: FC = () => {
  return (
    <div className="Personalization">
      <Header />
      <Footer />
    </div>
  );
};

export default Personalization;
