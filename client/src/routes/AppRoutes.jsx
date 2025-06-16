import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
