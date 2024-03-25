import { FC, useEffect } from "react";

import { Header } from "../../components/header/header.component";
import { MainHero } from "../../components/main-hero/main-hero.component";
import { Footer } from "../../components/footer/footer.component";
import { Service } from "../../components/services/single-service/service.component";
import { ServiceType } from "../../components/services/services.component";
import { Button } from "../../components/button/button.component";

import { useProjectsServices } from "../../hooks/useData";

import projectsPdf from "../../../assets/pdf/projects.pdf";
import video from "../../../assets/vid/projects_banner.mp4";

import "./projects.style.scss";
import { useNavigate } from "react-router";
import CustomLink from "../../components/link/link.component";

const ProjectsServices = () => {
  const services: ServiceType[] = useProjectsServices();

  const fontClassNames = [
    "rogik",
    "daily",
    "retro",
    "kento",
    "snell",
    "merosa",
  ] as const;

  return (
    <div className="Services">
      {services.map((service, i) => {
        return <Service className={fontClassNames[i]} {...service} />;
      })}
      <CustomLink url={projectsPdf}>
        <Button style="yellow">Ver Más</Button>
      </CustomLink>
    </div>
  );
};

const Projects: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/projects"), []);

  const mainHeroProps = {
    pic: false,
    hook: "Proyectos Trío Concuerda",
    subtext: "Un amplio abanico de posibilidades a elegir",
    video,
  };

  return (
    <div className="Projects">
      <Header />
      <div className="Projects__bg-wrapper">
        <MainHero {...mainHeroProps} />
        <ProjectsServices />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
