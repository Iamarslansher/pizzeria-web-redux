import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../components/Home/Home";
import NavBar from "../components/Navbar/NavBar";
import Dashboard from "../components/Dashboard/Dashboard";
import AddtoCart from "../components/AddtoCart/AddtoCart";
import OrderNow from "../components/OrderPayment/OrderNow";

const router = createBrowserRouter([
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

export default Router;
