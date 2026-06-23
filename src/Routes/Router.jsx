import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Raider from "../Pages/Raider/Raider";
import SendParcel from "../Pages/SendParcels/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",

        Component: Coverage,
        loader: () => fetch("/servicesCenter.json").then((res) => res.json()),
        hydrateFallbackElement: <p>loading</p>,
      },
      {
        path: "/raider",
        element: (
          <PrivateRoutes>
            <Raider></Raider>
          </PrivateRoutes>
        ),
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
        ),
        loader: () => fetch("/servicesCenter.json").then((res) => res.json()),
        hydrateFallbackElement: <p>Loading</p>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
