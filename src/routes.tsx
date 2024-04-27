import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";

const routers = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  {
    path: "/following",
    element: <Following />,
  },
]);

export default routers;
