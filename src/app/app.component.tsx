import React, { FC } from "react";
import Weddings from "./routes/weddings/weddings.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.module.scss";
import Events from "./routes/events/events.component";
import NotFound from "./routes/404/404.route";
import { ServiceModal } from "./components/services/service-modal/service-modal.component";

const App: FC = () => {
  const router = createBrowserRouter([
    /*
     * {
     * path: "/",
     *   element: <Landing>,
     * },
     */
    {
      path: "/weddings",
      element: <Weddings />,
    },
    {
      path: "/events",
      element: <Events />,
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
