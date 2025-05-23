import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./App";
import HeaderComponent from "./components/Header-Component/headerComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderComponent />
    <RouterProvider router={router} />
  </StrictMode>
);
