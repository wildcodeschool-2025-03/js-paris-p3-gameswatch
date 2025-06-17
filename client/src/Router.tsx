import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Game from "./pages/game";
import Inscription from "./pages/inscription";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import Search from "./pages/search";
import Sitting from "./pages/sitting";


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
