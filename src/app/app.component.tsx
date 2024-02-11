import React, { FC } from "react";
import Weddings from "./routes/weddings/weddings.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const App: FC = () => {
  const router = createBrowserRouter([
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
      path: "/Videos",
      element: <Videos />,
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
