import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { register } from "swiper/element/bundle";

import { router } from "./App";
import { AppContextProvider } from "./context/AppContextProvider";

register();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
