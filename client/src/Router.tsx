import { createBrowserRouter } from "react-router";
import App from "./App";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Sitting from "./pages/Sitting";

const Routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Game />,
        path: "/Game",
      },
      {
        element: <Inscription />,
        path: "/Inscription",
      },
      {
        element: <Login />,
        path: "/Login",
      },
      {
        element: <Profile />,
        path: "/Profile",
      },
      {
        element: <Search />,
        path: "/Search",
      },
      {
        element: <Sitting />,
        path: "/Sitting",
      },
    ],
  },
]);
export default Routes;
