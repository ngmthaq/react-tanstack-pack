import "./assets/css/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { router } from "./utils";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
