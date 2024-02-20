import { FC } from "react";
import { Service } from "./single-service/service.component";
import "./services.style.scss";

export type ServiceType = {
  name: string;
  url?: string;
  pic?: string;
  text?: string;
  className?: string;
  button?: string;
};

export const Services: FC<{ serviceList: ServiceType[] }> = ({
  serviceList,
}) => {
  return (
    <div className="Services">
      {serviceList.map((service) => {
        return <Service key={service.name} {...service} />;
      })}
    </div>
  );
};
