import { FC } from "react";
import Weddings from "./routes/weddings/weddings.component";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./app.module.scss";
import Events from "./routes/events/events.component";
import NotFound from "./routes/404/404.route";
import { ServiceModal } from "./components/services/service-modal/service-modal.component";
import Landing from "./routes/landing/landing.route";
import InfinityComponent from "./routes/infinity/infinity.route";
import CmaComponent from "./routes/cma/cma.route";
import ContactComponent from "./routes/contact/contact.route";
import Projects from "./routes/projects/projects.route";
import Videos from "./routes/videos/videos.route";
import Customization from "./routes/customization/customization.route";

const App: FC = () => {
  const router = createHashRouter([
    {
      path: "/concuerda-website",
      element: <Landing />,
    },
    {
      path: "/concuerda-website/weddings",
      element: <Weddings />,
    },
    {
      path: "/concuerda-website/weddings/religious",
      element: <ServiceModal modal={"religious"} />,
    },
    {
      path: "/concuerda-website/weddings/civil",
      element: <ServiceModal modal={"civil"} />,
    },
    {
      path: "/concuerda-website/weddings/dinner",
      element: <ServiceModal modal={"dinner"} />,
    },
    {
      path: "/concuerda-website/weddings/cocktail",
      element: <ServiceModal modal={"cocktail"} />,
    },
    {
      path: "/concuerda-website/weddings/party",
      element: <ServiceModal modal={"party"} />,
    },
    {
      path: "/concuerda-website/events",
      element: <Events />,
    },
    {
      path: "/concuerda-website/events/corporate",
      element: <ServiceModal modal={"corporate"} />,
    },
    {
      path: "/concuerda-website/events/custom",
      element: <ServiceModal modal={"custom"} />,
    },
    {
      path: "/concuerda-website/infinity",
      element: <InfinityComponent />,
    },
    {
      path: "/concuerda-website/cma",
      element: <CmaComponent />,
    },
    {
      path: "/concuerda-website/projects",
      element: <Projects />,
    },
    {
      path: "/concuerda-website/videos",
      element: <Videos />,
    },
    {
      path: "/concuerda-website/customization",
      element: <Customization />,
    },
    {
      path: "/concuerda-website/contact",
      element: <ContactComponent />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
};

export default App;
