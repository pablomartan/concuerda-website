import { createBrowserRouter } from "react-router-dom";

import Weddings from "./weddings/weddings.component";
import Events from "./events/events.component";
import NotFound from "./404/404.route";
import { ServiceModal } from "../components/services/service-modal/service-modal.component";
import Landing from "./landing/landing.route";
import InfinityComponent from "./infinity/infinity.route";
import CmaComponent from "./cma/cma.route";
import ContactComponent from "./contact/contact.route";
import Projects from "./projects/projects.route";
import Videos from "./videos/videos.route";
import Customization from "./customization/customization.route";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/weddings",
    element: <Weddings />,
  },
  {
    path: "/weddings/religious",
    element: <ServiceModal modal={"religious"} />,
  },
  {
    path: "/weddings/civil",
    element: <ServiceModal modal={"civil"} />,
  },
  {
    path: "/weddings/dinner",
    element: <ServiceModal modal={"dinner"} />,
  },
  {
    path: "/weddings/cocktail",
    element: <ServiceModal modal={"cocktail"} />,
  },
  {
    path: "/weddings/party",
    element: <ServiceModal modal={"party"} />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/corporate",
    element: <ServiceModal modal={"corporate"} />,
  },
  {
    path: "/events/custom",
    element: <ServiceModal modal={"custom"} />,
  },
  {
    path: "/infinity",
    element: <InfinityComponent />,
  },
  {
    path: "/cma",
    element: <CmaComponent />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/customization",
    element: <Customization />,
  },
  {
    path: "/contact",
    element: <ContactComponent />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
