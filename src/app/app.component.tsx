import React, { FC } from "react";
import Weddings from "./routes/weddings/weddings.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./app.module.scss";
import Events from "./routes/events/events.component";
import NotFound from "./routes/404/404.route";

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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
