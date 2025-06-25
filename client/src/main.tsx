import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Routes from "./Router";

createRoot(document.getElementById("root") || document.body).render(
  <RouterProvider router={Routes} />,
);
