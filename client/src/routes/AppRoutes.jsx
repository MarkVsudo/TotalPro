import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AirConLayout from "../layout/AirConLayout";
import AirConHomePage from "../pages/AirConPages/AirConHomePage";
import AirConStorePage from "../pages/AirConPages/AirConStorePage";
import { CartProvider } from "../context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <HomePage />
      </CartProvider>
    ),
  },
  {
    path: "/air-conditioning",
    element: (
      <CartProvider>
        <AirConLayout />
      </CartProvider>
    ),
    children: [
      {
        path: "home",
        element: <AirConHomePage />,
      },
      {
        path: "store",
        element: <AirConStorePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
