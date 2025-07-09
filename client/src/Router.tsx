import { createBrowserRouter } from "react-router";
import App from "./App";
import Description from "./pages/Description";
import Game from "./pages/Game";
import GamePc from "./pages/GamePC";
import GamePlay from "./pages/GamePlay";
import GameXbox from "./pages/GameXbox";
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
      {
        element: <GamePc />,
        path: "/GamePc",
      },
      {
        element: <Description />,
        path: "/Description/:id",
      },
      {
        element: <GameXbox />,
        path: "/GameXbox",
      },
      {
        element: <GamePlay />,
        path: "/GamePlay",
      },
    ],
  },
]);
export default Routes;
