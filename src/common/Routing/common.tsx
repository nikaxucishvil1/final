import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import Checkout from "../../pages/Checkout/Checkout";
import Details from "../../pages/Details/Details";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shoppingCart", element: <ShoppingCart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/Details", element: <Details /> },
  { path: "/Signup", element: <SignUp /> },
]);
