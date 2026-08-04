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
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/MyParcels/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/MyParcels/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/MyParcels/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRaiders from "../Pages/Dashboard/ApproveRaiders/ApproveRaiders";
import UserManagement from "../Pages/Dashboard/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import AssignRaider from "../Pages/Dashboard/AssignRaider/AssignRaider";
import AssignedDeliveries from "../Pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import RaidersRoute from "./RaidersRoute";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../Pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import About from "../Pages/About/About";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",

        Component: Coverage,
        loader: () => fetch("/servicesCenter.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "parcelTrack/:trackingId",
        Component: ParcelTrack,
      },

      {
        path: "/raider",
        element: (
          <PrivateRoutes>
            <Raider></Raider>
          </PrivateRoutes>
        ),
        loader: () => fetch("/servicesCenter.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
        ),
        loader: () => fetch("/servicesCenter.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/about",

        Component: About,
      },
      {
        path: "/services",
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },

      // raider related routes

      {
        path: "assignedDeliveries",
        element: (
          <RaidersRoute>
            <AssignedDeliveries></AssignedDeliveries>
          </RaidersRoute>
        ),
      },
      {
        path: "completedDeliveries",
        element: (
          <RaidersRoute>
            <CompletedDeliveries />
          </RaidersRoute>
        ),
      },

      // admin related routes

      {
        path: "approveRaiders",

        element: (
          <AdminRoute>
            <ApproveRaiders></ApproveRaiders>
          </AdminRoute>
        ),
      },
      {
        path: "usersManagement",
        element: (
          <AdminRoute>
            <UserManagement></UserManagement>
          </AdminRoute>
        ),
      },
      {
        path: "assignRaider",
        element: (
          <AdminRoute>
            <AssignRaider></AssignRaider>
          </AdminRoute>
        ),
      },
    ],
  },
]);
