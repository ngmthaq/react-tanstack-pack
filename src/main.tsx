import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./assets/css/index.css";

export const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
