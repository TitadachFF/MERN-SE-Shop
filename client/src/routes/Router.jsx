import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home/Home";
import ProductList from "../pages/shop/ProductList";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import UpdateProfile from "../Pages/dashboard/updateProfile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Cart from "../pages/shop/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRouter>
            <ProductList />
          </PrivateRouter>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/singup",
    element: <SignUp />,
  },
  {
    path: "/singin",
    element: <SignIn />,
  },
]);

export default router;