import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// ADMIN-COMPONENTS
import Dashboad from "../components/Admin-compnents/AdminDashboard/Dashboad";
import Navbar from "../components/Admin-compnents/AdminNav/Navbar";
import OnProcessing from "../components/Admin-compnents/OnProcessing/OrderProcessing";
import OnDelivery from "../components/Admin-compnents/OnDelivery/OnDelivery";
import Completed from "../components/Admin-compnents/Completed/Completed";

// CLIENTS-COMPONENTS
import Home from "../components/Home/Home";
import NavBar from "../components/Navbar/NavBar";
import Dashboard from "../components/Dashboard/Dashboard";
import AddtoCart from "../components/AddtoCart/AddtoCart";
import OrderNow from "../components/OrderPayment/OrderNow";

const router = createBrowserRouter([
  //  CLIENT-ROUTES
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "addToCart",
        element: <AddtoCart />,
      },
    ],
  },
  {
    path: "user-order",
    element: <OrderNow />,
  },

  // ADMIN-ROUTES
  {
    path: "/admin-dashboard",
    element: <Admin_Layout />,
    children: [
      {
        index: true,
        element: <Dashboad />,
      },
      {
        path: "on-processing",
        element: <OnProcessing />,
      },
      {
        path: "on-delivery",
        element: <OnDelivery />,
      },
      {
        path: "completed",
        element: <Completed />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function Admin_Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Router;
