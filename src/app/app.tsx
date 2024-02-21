import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";
import "./app.module.scss";

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
