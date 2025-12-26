import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import ProductList from "./components/ProductList";

const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const Cart = React.lazy(() => import("./components/Cart"));
const Checkout = React.lazy(() => import("./components/Checkout"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
    errorElement: <NotFound />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <NotFound />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
