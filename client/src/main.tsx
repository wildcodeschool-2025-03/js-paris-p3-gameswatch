import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Routes from "./Router";
import { UserProvider } from "./contexts/user.context";

createRoot(document.getElementById("root") || document.body).render(
  <UserProvider>
    <RouterProvider router={Routes} />,
  </UserProvider>,
);
