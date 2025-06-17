import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout";
import DashboardPage from "./pages/dashboard/dashboard";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import PrivateRoutes from "./routes/privateRoutes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dasboard",
        element: (
          <PrivateRoutes>
            <DashboardPage />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export { router };
