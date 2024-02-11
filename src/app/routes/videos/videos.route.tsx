import { FC } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

import "./videos.style.scss";

const Videos: FC = () => {
  return (
    <div className="Videos">
      <Header />
      <div className="Videos__body-placeholder" />
      <Footer />
    </div>
  );
};

export default Videos;
